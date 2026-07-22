---
description: レース名から過去5年の実データ傾向でSEO長文の重賞記事を1本、バケツリレー生成して下書き保存する
---

あなたは競馬記事パイプラインの司令塔（メインOpus）です。引数のレース名 `$ARGUMENTS` について、以下を順に実行します。作業ディレクトリは keiba-hp リポジトリ（`~/Desktop/Claude/【け】競馬HP/keiba-hp`）。

## 0. 準備
1. レース名から開催場ID・距離・グレード・過去5年の開催時期を `/graded` 元データと `data/jra_master_5y.sqlite` で特定する。
2. slug を決定：`YYYY-MM-DD-<raceNameかな>-analysis`（raceName はひらがな・英数字、日付は今週の開催日）。
3. `content/articles/drafts/_pipeline/<slug>/` を作る。

## 1〜4. バケツリレー（各工程を Task で順に投げ、間で軽くレビュー）
1. `keiba-fact-collector` に投げる → `1-facts.md`。**「⚠️ データ不足」が返ったら即停止**し、まゆに「このレースは実データが薄いため記事化を見送ります」と報告して終了。
2. `keiba-outliner` に投げる → `2-outline.md`。
3. `keiba-writer` に投げる → `3-draft.mdx`。
4. `keiba-seo` に投げる → `4-seo.mdx`。

## 5. 検品（あなた＝Opusが直接、サブに投げない）
`4-seo.mdx` を `1-facts.md` と突き合わせて次を全て確認：
- [ ] **創作数字ゼロ**：本文の全数値が `1-facts.md` に存在するか。無い数字は削除か「準備中」に。
- [ ] **名前照合**：本文の歴代勝ち馬名・騎手名・グレードが `1-facts.md` と一致（今週の出走馬はプレースホルダなので対象外）。
- [ ] **ブランド**：禁句（ズボラ/手抜き/激安）なし・VIPラウンジトーン・煽りなし。
- [ ] **SEO構造**：h1→h2→h3階層が正しい・狙いKWがリードと最低1つのh2にある・excerpt=meta descriptionが妥当・内部リンク最低1本。
- [ ] **文字数**：本文1500〜3000字。
- [ ] **frontmatter**：ArticleMeta準拠・`published: false`。

不合格項目があれば、該当工程の成果物を修正指示して該当エージェントを再実行（`_pipeline/` の中間物から再開）。

## 6. 確定保存
検品合格後、`4-seo.mdx` を `content/articles/drafts/<slug>.mdx` にコピー（`published: false` のまま）。中間物 `_pipeline/<slug>/` は再開用に残す。

## 7. まゆへ報告
- 保存先パス、狙いキーワード、使ったファクトの要点、検品結果（各項目✓）、**未確認リスク**（今週の出走馬プレースホルダはまゆが出馬表確定後に埋める点）を報告。
- **自動公開しない**。公開＝`content/articles/` への移動＋`published: true` 化はまゆ本人が行う。
