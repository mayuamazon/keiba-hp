# keiba-hp 3機能実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** コースファインダーに「前後半比較モード」、サンプル数(races)表示、実績バナー「準備中」化の3機能を追加する

**Architecture:** タスク1は course-finder.tsx 内に完結するUIコンポーネント追加。タスク2はスクリプト2本を修正し再生成後、lib/types.ts・lib/data/courses.ts・course-finder.tsx・course-table.tsx を連携更新。タスク3は accuracy-banner.tsx の単純な条件分岐。テストは各タスク後に追加。

**Tech Stack:** Next.js 16 App Router・Tailwind v4・React 19・jest + @testing-library/react・Python3（export_stats.py）・Node.js ESM（import-stats.mjs）

ベースライン: npm test 64件全パス・course-stats.ts 256キー
