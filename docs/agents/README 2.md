# 競馬記事パイプライン エージェント定義

これらは keiba-hp の記事ワンポチ生成（`/keiba_article`）で使う専任サブエージェントの
**バージョン管理用コピー**です。ランタイムが実際に読むのは `~/.claude/agents/` と
`~/.claude/commands/`（リポジトリ外）。編集したら両方を同期すること。

| ファイル | 役割 | モデル |
|---|---|---|
| keiba-fact-collector.md | 工程1 データ収集（sqlite/backtest.py→ファクトシート） | sonnet |
| keiba-outliner.md | 工程2 SEO構成設計 | sonnet |
| keiba-writer.md | 工程3 執筆（VIPラウンジ調・本文MDX） | sonnet |
| keiba-seo.md | 工程4 SEO最適化（frontmatter/meta/内部リンク） | sonnet |
| ../commands/keiba_article.md | 司令塔コマンド＋工程5検品（メインOpus） | — |

設計/計画：`docs/superpowers/specs/2026-07-22-keiba-article-pipeline-design.md`、
`docs/superpowers/plans/2026-07-22-keiba-article-pipeline.md`
