# JRA-VAN DataLab → 馬券ファクト データパイプライン 導入手順書

> 非エンジニア向け。上から順に実行すれば完了します。

---

## 目次

1. [全体像](#1-全体像)
2. [必要なもの](#2-必要なもの)
3. [⚠️ 規約上の注意（必読）](#3-️-規約上の注意必読)
4. [集計SQLの例](#4-集計sqlの例)
5. [CSVフォーマット仕様（importスクリプトの入力契約）](#5-csvフォーマット仕様importスクリプトの入力契約)
6. [importスクリプトの実行方法](#6-importスクリプトの実行方法)
7. [サンプルCSVについて](#7-サンプルcsvについて)

---

## 1. 全体像

```
JRA-VAN DataLab と契約
        ↓
Windows（Parallels または中古PC）に
PC-KEIBA Database をインストール
        ↓
PC-KEIBAが JV-Link 経由でレースデータを
PostgreSQL データベースに自動蓄積
        ↓
本手順書の「集計SQL」を実行して
統計CSVを2本エクスポート
（frame_stats.csv / style_stats.csv）
  ※ phase 列で開催全体(all)/開幕前半(early)/開催後半(late)を区別
        ↓
Mac で import スクリプトを実行
→ lib/data/course-stats.ts を自動生成
  ※ early/late キーが揃えばトップページの
    「開幕前半/後半フィルタ」が実データ駆動になる
        ↓
npm test && npm run build で確認
→ git commit & Vercel デプロイ
→ 全コースの統計データがサイトに反映
```

### フィルタと実データの連携イメージ

```
ユーザーが「開幕前半」を選択
        ↓
course-finder.tsx → getFrameFavorability(track, surface, distance, 'early')
        ↓
bug-finder.ts → courseStats に 'tokyo-turf-2400-early' キーがあれば実データ使用
                                なければモック補正にフォールバック
        ↓
条件サマリーに金バッジ「実データ」が表示される（実データ時のみ）
```

---

## 2. 必要なもの

| ツール | 説明 | 費用・入手先 |
|---|---|---|
| **JRA-VAN DataLab** | JRAの公式データ提供サービス。JV-Linkで生データを配信 | 月額 約2,090円（税込）。[JRA-VAN公式サイト](https://jra-van.jp/)から申込 |
| **Windows環境** | JV-Link（JRA-VAN接続ソフト）はWindowsのみ対応 | Mac の場合は Parallels Desktop または中古Windows PC（5,000円〜）を用意 |
| **PC-KEIBA Database** | JVデータをPostgreSQLに自動取り込みする定番フリーソフト | 無料。[配布サイト](https://pckeiba.net/)からダウンロード |
| **PostgreSQL** | PC-KEIBAが使うデータベース | 無料。PC-KEIBAのインストール手順に含まれることが多い |
| **Node.js（Mac側）** | importスクリプトの実行に必要 | このプロジェクト既存環境に含まれています |

---

## 3. ⚠️ 規約上の注意（必読）

> **取得した生データをWebに転載・再配布することは禁止されています。**

- JRA-VANから取得したレースデータ（着順・タイム・馬名・騎手名等）を**そのままサイトに掲載することは利用規約違反**になる可能性があります。
- サイトに掲載してよいのは、**自社が独自に集計・加工した統計値**（勝率・複勝率など）のみです。
- **必ず最新のJRA-VAN利用規約・FAQ**（[jra-van.jp/outline/rule](https://jra-van.jp/outline/rule.html)）を事前に確認し、公開可否を判断してください。
- 不明な点はJRA-VANサポートに直接問い合わせることを推奨します。

---

## 4. 集計SQLの例

> **PC-KEIBAのテーブル名・カラム名はバージョンにより異なります。**
> 以下SQLの `-- ※テーブル名はPC-KEIBAのスキーマ定義で確認` と記載した箇所は、
> ご自身の環境のスキーマ（テーブル定義書）を見て読み替えてください。
>
> JV-Data の RA テーブルには開催回次（kaiji）・開催日次（nichiji）カラムがあります。
> `nichiji <= 4` が開幕前半（early）、`nichiji >= 5` が開催後半（late）に対応します。
> **テーブル名・カラム名はPC-KEIBAのスキーマ定義で必ず確認してください。**

### SQL-1: 枠番別 勝率・複勝率（競馬場×芝ダ×距離 単位）

#### SQL-1a: 開催全体（phase=all）

```sql
-- ※テーブル名はPC-KEIBAのスキーマ定義で確認
-- 例: race_results がレース結果テーブル
SELECT
    r.track_code                          AS track_id,    -- 例: '05'=東京 ※コード変換は後述
    r.track_type                          AS surface,     -- 例: '1'=芝, '2'=ダート
    r.distance                            AS distance,
    h.frame_number                        AS frame,       -- 枠番 1〜8
    'all'                                 AS phase,
    COUNT(*)                              AS total,
    ROUND(
      100.0 * SUM(CASE WHEN h.finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*),
      1
    )                                     AS win_rate,
    ROUND(
      100.0 * SUM(CASE WHEN h.finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*),
      1
    )                                     AS place_rate
FROM
    race_results h                        -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
    JOIN races r ON r.race_id = h.race_id -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
WHERE
    h.finish_order IS NOT NULL            -- 出走取消・除外を除く
    AND r.race_class >= 3                 -- 例: 未勝利以上のみ（任意条件）
GROUP BY
    r.track_code, r.track_type, r.distance, h.frame_number
HAVING
    COUNT(*) >= 30                        -- サンプル数が少ない組合せは除外
ORDER BY
    r.track_code, r.track_type, r.distance, h.frame_number;

-- ■ track_code を track_id（英語）に変換する例:
--   CASE r.track_code
--     WHEN '05' THEN 'tokyo'
--     WHEN '06' THEN 'nakayama'
--     WHEN '08' THEN 'kyoto'
--     WHEN '09' THEN 'hanshin'
--     WHEN '10' THEN 'kokura'
--     WHEN '03' THEN 'fukushima'
--     WHEN '04' THEN 'niigata'
--     WHEN '07' THEN 'chukyo'
--     WHEN '01' THEN 'sapporo'
--     WHEN '02' THEN 'hakodate'
--   END
--
-- ■ surface の変換:
--   CASE r.track_type WHEN '1' THEN 'turf' WHEN '2' THEN 'dirt' END
```

#### SQL-1b: phase 別（early/late）を同時出力する UNION 例

```sql
-- ※テーブル名はPC-KEIBAのスキーマ定義で確認
-- all（全体）と early/late を一発で出力し、結果を1つのCSVに重ねる例

-- (1) 開催全体 (all)
SELECT
    r.track_code AS track_id,
    r.track_type AS surface,
    r.distance,
    h.frame_number AS frame,
    'all' AS phase,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM race_results h                        -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
JOIN races r ON r.race_id = h.race_id      -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
WHERE h.finish_order IS NOT NULL AND r.race_class >= 3
GROUP BY r.track_code, r.track_type, r.distance, h.frame_number
HAVING COUNT(*) >= 30

UNION ALL

-- (2) 開幕前半 (early): nichiji <= 4
--     ※ nichiji（開催日次）カラム名はPC-KEIBAのスキーマ定義で確認
SELECT
    r.track_code AS track_id,
    r.track_type AS surface,
    r.distance,
    h.frame_number AS frame,
    'early' AS phase,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM race_results h                        -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
JOIN races r ON r.race_id = h.race_id      -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
WHERE h.finish_order IS NOT NULL
  AND r.race_class >= 3
  AND r.nichiji <= 4                       -- ※ カラム名はPC-KEIBAのスキーマ定義で確認
GROUP BY r.track_code, r.track_type, r.distance, h.frame_number
HAVING COUNT(*) >= 20

UNION ALL

-- (3) 開催後半 (late): nichiji >= 5
SELECT
    r.track_code AS track_id,
    r.track_type AS surface,
    r.distance,
    h.frame_number AS frame,
    'late' AS phase,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
    ROUND(100.0 * SUM(CASE WHEN h.finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM race_results h                        -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
JOIN races r ON r.race_id = h.race_id      -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
WHERE h.finish_order IS NOT NULL
  AND r.race_class >= 3
  AND r.nichiji >= 5                       -- ※ カラム名はPC-KEIBAのスキーマ定義で確認
GROUP BY r.track_code, r.track_type, r.distance, h.frame_number
HAVING COUNT(*) >= 20

ORDER BY track_id, surface, distance, phase, frame;
```

CSVエクスポート（psqlの場合）：
```bash
psql -U postgres -d pckeiba -c "\COPY (上記SQL) TO 'frame_stats.csv' WITH CSV HEADER"
```

---

### SQL-2: 脚質別 勝率・複勝率（競馬場×芝ダ×距離 単位）

#### SQL-2a: 開催全体（phase=all）

```sql
-- ■ 脚質の近似方法:
--   JRA-VANの生データには「脚質」カラムが直接ないことがあります。
--   その場合は「4コーナー通過順位」と「出走頭数」を使い、4分位で近似します:
--     逃げ  → corner4_order = 1
--     先行  → corner4_order / total_horses <= 0.25（かつ逃げ以外）
--     差し  → corner4_order / total_horses <= 0.50（かつ先行以外）
--     追込  → 上記以外
--   コーナー通過順位カラム名は PC-KEIBA のスキーマ定義で確認してください。

-- ※テーブル名はPC-KEIBAのスキーマ定義で確認
SELECT
    r.track_code                          AS track_id,
    r.track_type                          AS surface,
    r.distance                            AS distance,
    CASE
      WHEN h.corner4_order = 1
        THEN '逃げ'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.25
        THEN '先行'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.50
        THEN '差し'
      ELSE '追込'
    END                                   AS style,
    'all'                                 AS phase,
    COUNT(*)                              AS total,
    ROUND(
      100.0 * SUM(CASE WHEN h.finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*),
      1
    )                                     AS win_rate,
    ROUND(
      100.0 * SUM(CASE WHEN h.finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*),
      1
    )                                     AS place_rate
FROM
    race_results h                        -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
    JOIN races r ON r.race_id = h.race_id -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
WHERE
    h.finish_order IS NOT NULL
    AND h.corner4_order IS NOT NULL
    AND r.total_horses > 0
GROUP BY
    r.track_code, r.track_type, r.distance,
    CASE
      WHEN h.corner4_order = 1                                     THEN '逃げ'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.25       THEN '先行'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.50       THEN '差し'
      ELSE '追込'
    END
HAVING
    COUNT(*) >= 30
ORDER BY
    r.track_code, r.track_type, r.distance, style;
```

#### SQL-2b: phase 別（early/late）を同時出力する UNION 例

```sql
-- all（全体）＋ early/late を一発でstyle_stats.csvに出力する例
-- ※ nichiji カラム名はPC-KEIBAのスキーマ定義で確認

-- 脚質ラベル変換 CTE（繰り返しを避けるため）
WITH style_base AS (
  SELECT
    r.track_code AS track_id,
    r.track_type AS surface,
    r.distance,
    CASE
      WHEN h.corner4_order = 1                                   THEN '逃げ'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.25     THEN '先行'
      WHEN h.corner4_order::NUMERIC / r.total_horses <= 0.50     THEN '差し'
      ELSE '追込'
    END AS style,
    r.nichiji,                            -- ※ カラム名はPC-KEIBAのスキーマ定義で確認
    h.finish_order
  FROM race_results h                     -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
  JOIN races r ON r.race_id = h.race_id   -- ※テーブル名はPC-KEIBAのスキーマ定義で確認
  WHERE h.finish_order IS NOT NULL
    AND h.corner4_order IS NOT NULL
    AND r.total_horses > 0
)
-- (1) 開催全体 (all)
SELECT track_id, surface, distance, style, 'all' AS phase,
  ROUND(100.0 * SUM(CASE WHEN finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
  ROUND(100.0 * SUM(CASE WHEN finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM style_base
GROUP BY track_id, surface, distance, style
HAVING COUNT(*) >= 30

UNION ALL

-- (2) 開幕前半 (early): nichiji <= 4
SELECT track_id, surface, distance, style, 'early' AS phase,
  ROUND(100.0 * SUM(CASE WHEN finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
  ROUND(100.0 * SUM(CASE WHEN finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM style_base WHERE nichiji <= 4
GROUP BY track_id, surface, distance, style
HAVING COUNT(*) >= 20

UNION ALL

-- (3) 開催後半 (late): nichiji >= 5
SELECT track_id, surface, distance, style, 'late' AS phase,
  ROUND(100.0 * SUM(CASE WHEN finish_order = 1 THEN 1 ELSE 0 END) / COUNT(*), 1) AS win_rate,
  ROUND(100.0 * SUM(CASE WHEN finish_order <= 3 THEN 1 ELSE 0 END) / COUNT(*), 1) AS place_rate
FROM style_base WHERE nichiji >= 5
GROUP BY track_id, surface, distance, style
HAVING COUNT(*) >= 20

ORDER BY track_id, surface, distance, phase, style;
```

CSVエクスポート（psqlの場合）：
```bash
psql -U postgres -d pckeiba -c "\COPY (上記SQL) TO 'style_stats.csv' WITH CSV HEADER"
```

---

## 5. CSVフォーマット仕様（importスクリプトの入力契約）

importスクリプトはこのフォーマットを期待します。**1文字でも違うとエラーになります。**

### frame_stats.csv（枠番別統計）

```
track_id,surface,distance,frame,win_rate,place_rate,phase
tokyo,turf,2400,1,8.2,24.1,all
tokyo,turf,2400,2,9.1,26.3,all
...
tokyo,turf,2400,1,9.8,26.5,early
...
```

| カラム | 型 | 値の例 | 説明 |
|---|---|---|---|
| `track_id` | 文字列 | `tokyo` | 競馬場ID（10種のみ有効。下表参照） |
| `surface` | 文字列 | `turf` | 芝=`turf`、ダート=`dirt` |
| `distance` | 整数 | `2400` | 距離（メートル） |
| `frame` | 整数 | `1`〜`8` | 枠番 |
| `win_rate` | 小数 | `8.2` | 勝率（%・小数1桁） |
| `place_rate` | 小数 | `24.1` | 複勝率（%・小数1桁） |
| `phase` | 文字列 | `all` | **開催時期区分**（後述）。列自体が無い・値が空の場合は `all` として扱う |

**phase 列の値の意味：**

| 値 | 意味 | 導出方法（JV-Data の RA テーブル） |
|---|---|---|
| `all` | 開催全体の集計（phase 未区分） | `GROUP BY` に nichiji を含めない |
| `early` | 開幕前半（日次 nichiji ≦ 4） | `CASE WHEN nichiji <= 4 THEN 'early' ...` |
| `late` | 開催後半（日次 nichiji ≧ 5） | `CASE WHEN nichiji >= 5 THEN 'late' ...` |

### style_stats.csv（脚質別統計）

```
track_id,surface,distance,style,win_rate,place_rate,phase
tokyo,turf,2400,逃げ,8.4,25.2,all
tokyo,turf,2400,先行,14.1,36.8,all
...
tokyo,turf,2400,逃げ,12.1,30.5,early
...
```

| カラム | 型 | 値の例 | 説明 |
|---|---|---|---|
| `track_id` | 文字列 | `tokyo` | 競馬場ID（下表参照） |
| `surface` | 文字列 | `turf` | 芝=`turf`、ダート=`dirt` |
| `distance` | 整数 | `2400` | 距離（メートル） |
| `style` | 文字列 | `逃げ` | `逃げ` / `先行` / `差し` / `追込` の4種のみ有効 |
| `win_rate` | 小数 | `8.4` | 勝率（%・小数1桁） |
| `place_rate` | 小数 | `25.2` | 複勝率（%・小数1桁） |
| `phase` | 文字列 | `all` | frame_stats.csv と同じ定義。列がない・空なら `all` |

### 有効な track_id 一覧

| track_id | 競馬場名 |
|---|---|
| `tokyo` | 東京 |
| `nakayama` | 中山 |
| `hanshin` | 阪神 |
| `kyoto` | 京都 |
| `chukyo` | 中京 |
| `kokura` | 小倉 |
| `fukushima` | 福島 |
| `niigata` | 新潟 |
| `hakodate` | 函館 |
| `sapporo` | 札幌 |

### 重要：両ファイルのキーは揃えること

`frame_stats.csv` と `style_stats.csv` に含まれる「競馬場×芝/ダ×距離」の組み合わせは**完全に一致**している必要があります。片方にしかないキーがあるとimportスクリプトがエラーで停止します。

---

## 6. importスクリプトの実行方法

Macのターミナルでリポジトリのルートディレクトリに移動してから実行します。

```bash
cd ~/Desktop/keiba-hp

# ステップ1: dry-run で内容を確認（lib/ には書き込まない）
node scripts/jravan/import-stats.mjs \
  --frame frame_stats.csv \
  --style style_stats.csv \
  --source "JRA-VAN DataLab 自社集計" \
  --period "2023-2025" \
  --dry-run

# ステップ2: 問題がなければ実際に生成（lib/data/course-stats.ts を上書き）
node scripts/jravan/import-stats.mjs \
  --frame frame_stats.csv \
  --style style_stats.csv \
  --source "JRA-VAN DataLab 自社集計" \
  --period "2023-2025"

# ステップ3: テストとビルドで動作確認
npm test && npm run build

# ステップ4: 問題なければコミット
git add lib/data/course-stats.ts
git commit -m "feat: JRA-VAN 実データでコース統計を更新 (2023-2025)"
```

### オプション一覧

| オプション | 説明 | 例 |
|---|---|---|
| `--frame <ファイル>` | 枠番別CSVのパス（必須） | `--frame frame_stats.csv` |
| `--style <ファイル>` | 脚質別CSVのパス（必須） | `--style style_stats.csv` |
| `--source <文字列>` | データの出所（任意・生成ファイルに記録される） | `--source "JRA-VAN DataLab 自社集計"` |
| `--period <文字列>` | 集計期間（任意・生成ファイルに記録される） | `--period "2023-2025"` |
| `--dry-run` | 書き込まず差分件数のみ表示 | `--dry-run` |

### 生成されるファイルと自動バックアップ

- **生成先**: `lib/data/course-stats.ts`
- **バックアップ**: 上書き前に `lib/data/course-stats.bak.ts` を自動作成します（削除はしません）

---

## 7. サンプルCSVについて

`scripts/jravan/sample/` に以下のサンプルファイルがあります：

- `frame_stats.csv` - 東京 turf 2400 の枠1〜8（allフェーズ＋earlyフェーズ見本行）
- `style_stats.csv` - 東京 turf 2400 の脚質4種（allフェーズ＋earlyフェーズ見本行）

**⚠️ これらの値は「現行の参考値・見本」です。**
- `phase=all` 行：実際のJRA-VANデータに差し替えるまでの初期値として東京2400の既存数値をそのまま流用
- `phase=early` 行：**見本行**です。実データではありません。early/lateキーの動作確認用に東京2400の既存数値を流用して作成しています
- 本番運用時は必ず自社集計データのCSVで上書きしてください。

動作テスト（dry-run）：
```bash
cd ~/Desktop/keiba-hp
node scripts/jravan/import-stats.mjs \
  --frame scripts/jravan/sample/frame_stats.csv \
  --style scripts/jravan/sample/style_stats.csv \
  --source "サンプル（東京2400参考値）" \
  --period "参考値" \
  --dry-run
```
