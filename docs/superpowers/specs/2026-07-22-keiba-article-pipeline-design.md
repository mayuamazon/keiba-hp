# 競馬記事 ワンポチ・バケツリレー生成システム — 設計書

- 日付: 2026-07-22
- 対象: keiba-hp（馬券ファクト）
- 設計: Opus（メインセッション）／実装: Sonnetサブエージェント（監査はOpus直轄）

## 目的

毎週の重賞について、**SEOで上位を狙える読み物記事**を「ワンポチ」で高品質生成し、無料コンテンツとして keiba-hp に掲載していく。集客（無料）→将来の有料化につなげるコンテンツマーケの背骨。

## 決定事項（ブレストで確定）

1. **記事の型** = SEO長文でGoogle上位狙い（1レース1500〜3000字・見出しh2/h3・網羅性・構造化データ・内部リンク）。読み物パートで「ついつい読ませる」も両立。
2. **スコープ** = 器（表示ページ＋SEO土台）＋生成パイプラインの両方。実装順は **Phase1=器 → Phase2=パイプライン**。
3. **入力** = レース名だけ → **過去5年の実データに基づく履歴傾向記事**。今週の出馬表（実際に走る馬・騎手）は記事内プレースホルダで後からまゆが埋める。数字は全て `jra_master_5y.sqlite` の実測のみ＝創作ゼロ。
4. **パイプライン構造** = A案（直列スペシャリスト・リレー、5工程）。

## 制約・絶対ルール（まゆのCLAUDE.md／既存運用より）

- **勝率・回収率の創作禁止**。実データが無い箇所は「準備中」表記。
- 文体 = です・ます調、府中のVIPラウンジ（上品・データドリブン、煽り/感情論禁止）。
- **禁句**: ズボラ・手抜き・激安。
- 記事は必ず `content/articles/drafts/` に `published: false` で保存。**公開フォルダへの移動と `published: true` 化はまゆ本人が行う**（Claudeは自動公開しない）。
- 新ライブラリを増やさない（既存の next-mdx-remote / gray-matter を踏襲）。
- frontmatter は `lib/article-types.ts` の `ArticleMeta` に準拠。

---

## パート1：器（Phase 1）

記事を表示する仕組みとSEO土台。`/report`（`lib/reports.ts` + `app/report/[slug]`）と同じMDX描画パターンを踏襲する。

### 追加/変更ファイル

- `lib/articles.ts`（新規）— `lib/reports.ts` と同型。`content/articles/*.mdx` を読む。
  - `getAllArticleMeta(): Promise<ArticleMeta[]>` — `published: false` は除外し、`date` 降順ソート。
  - `getArticleBySlug(slug): Promise<{ meta: ArticleMeta; content: string } | null>`。
  - slug = ファイル名から `.mdx` を除いたもの（命名規則 `YYYY-MM-DD-{raceName}-{articleType}`）。
- `app/articles/page.tsx`（新規）— 記事一覧。新しい順。各カードにレース名・グレード・開催場チップ・抜粋。
- `app/articles/[slug]/page.tsx`（新規）— 記事詳細。
  - `generateStaticParams` で公開記事のslugを列挙。
  - `generateMetadata` で title / description(=excerpt) / OpenGraph / canonical URL。
  - **JSON-LD 構造化データ `Article`**（headline, datePublished, author, about=レース名, publisher）を `<script type="application/ld+json">` で注入。
  - 見出し階層 h1(title)→h2→h3。
  - 末尾に関連記事（`relatedSlugs` の analysis↔preview↔review）と、`/courses/[trackId]`・`/graded` への内部リンクブロック。
- `app/sitemap.ts`（変更）— 公開記事URLを追加（`published: false` は除外）。
- ナビゲーション（変更）— 「読み物」導線を追加し `/articles` へ。

### テスト（Phase 1）

- `lib/articles.ts` のユニットテスト（published除外・ソート・slug解決・存在しないslugでnull）。
- `next build` 成功。
- Playwright で `/articles` 一覧と `/articles/[slug]` 詳細をレンダリング検品、JSON-LD が出力されることを確認。

---

## パート2：ワンポチ・バケツリレー（Phase 2）

### 入口

- スラッシュコマンド `/keiba_article <レース名>`（`~/.claude/commands/keiba_article.md`）。
- 対話起動前提（claude -p ヘッドレスは自作コマンド非対応のため使わない → `feedback_claude_p_no_custom_commands`）。
- コマンド本文が「司令塔」の手順書：工程1→2→3→4を順に `Task`（Agent）で投げ、最後にメインOpusが検品する流れを明記。

### 5つの専任エージェント（`~/.claude/agents/` に新規）

| # | エージェント名 | 役割 | 入力 → 出力 | モデル | ツール |
|---|---|---|---|---|---|
| 1 | `keiba-fact-collector` | データ収集 | レース名 → ファクトシート(md)。枠/脚質/人気/距離の傾向・歴代勝ち馬（過去5年）。散文ゼロ・数字のみ | Sonnet | Bash(sqlite/backtest.py), Read |
| 2 | `keiba-outliner` | SEO構成設計 | ファクトシート → SEO骨子（狙いKW「◯◯記念 傾向」・検索意図・h2/h3見出し・タイトル案5・meta description案） | Sonnet | Read, Write |
| 3 | `keiba-writer` | 執筆 | 骨子＋ファクトシート → 本文MDX（VIPラウンジ調・冒頭フックで読ませる・今週馬はプレースホルダ） | Sonnet | Read, Write |
| 4 | `keiba-seo` | SEO最適化 | 本文MDX → frontmatter(ArticleMeta準拠)・meta・JSON-LD補助情報・`/courses`/`/graded`内部リンク・見出し構造チェック | Sonnet | Read, Edit |
| 5 | 検品官 | 品質ゲート | 完成MDX → 合否＋修正。**メインOpusが直接実行**（サブエージェント化しない） | Opus(メイン) | — |

### データフロー

1. 司令塔が slug を決定（`YYYY-MM-DD-{raceName}-{articleType}`、raceName はひらがな・英数字）。articleType は既定 `analysis`。
2. 中間成果物は `content/articles/drafts/_pipeline/<slug>/` に保存（`1-facts.md` → `2-outline.md` → `3-draft.mdx` → `4-seo.mdx`）。工程が独立し、途中から再開可能。
3. 工程1→2→3→4を順に実行。各工程完了後、司令塔（Opus）が軽くレビューしてから次へ。
4. 工程4完了後、**検品官（Opus）が品質ゲートを実行**。
5. 合格 → `content/articles/drafts/<slug>.mdx`（`published: false`）に確定保存。中間物は `_pipeline/` に残す。
6. まゆがレビュー → まゆ自身が `content/articles/` へ移動し `published: true` 化。

### 品質ゲート（検品官の必須チェック）

- **創作数字ゼロ**: 本文の全数値がファクトシート(`1-facts.md`)に存在するか照合。根拠のない勝率・回収率は「準備中」に置換。
- **JRA名前ダブルチェック**: 履歴傾向記事のため、本文に登場する歴代勝ち馬名・騎手名・グレードをファクトシートと照合（今週の出走馬はプレースホルダなので対象外）。
- **ブランド**: 禁句なし・VIPラウンジトーン・煽り/感情論なし。
- **SEO構造**: h1→h2→h3 階層が正しい・狙いキーワードが冒頭リード文とh2見出しに含まれる・meta description が excerpt と一致・内部リンクが最低1本。
- **文字数**: 本文1500〜3000字。

### エラー処理

- 工程1が該当コースのデータ不足（レース数が閾値未満）を検知 → ファクトシートに「データ不足」を明記してパイプライン停止し、まゆに報告。**薄い記事を作らない。**
- 検品官が不合格 → 該当工程の成果物を差し戻して再実行（`_pipeline/` の中間物から再開）。

### テスト（Phase 2）

- 小倉記念で1本を通しで生成し、器（`/articles/[slug]`）で表示・JSON-LD・内部リンクを目視検品。
- 検品官の照合が機能する証拠として、**故意に1つ「ファクトシートに無い数字」を仕込み、検品官が実際に弾くか**を確認。

---

## 実装順（フェーズ）

1. **Phase 1（器）**: `lib/articles.ts` → `app/articles/` 一覧・詳細 → sitemap/nav → テスト・build・Playwright検品。
2. **Phase 2（パイプライン）**: 5エージェント定義 → `/keiba_article` コマンド → 小倉記念で通し検証（創作数字の弾き確認込み）。

## 非目標（YAGNI）

- 今週の出馬表の自動取得（JRA WebFetch）は行わない。今週馬はプレースホルダ運用。
- 自動公開しない（まゆの手動公開を維持）。
- X投稿生成は既存の週次運用（`docs/article-workflow.md`）が担うため本システムの必須工程には含めない（将来オプション）。
