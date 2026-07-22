# 競馬記事 ワンポチ・バケツリレー生成システム 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** レース名だけで、過去5年の実データに基づくSEO長文の重賞記事をワンポチ生成し、keiba-hp の `/articles` に掲載できる状態にする。

**Architecture:** Phase1（器）= `/report` と同じ next-mdx-remote パターンで記事一覧・詳細ページ＋JSON-LD＋sitemap を追加。Phase2（パイプライン）= `~/.claude/agents/` の4つのSonnet専任エージェント（収集→構成→執筆→SEO）を `/keiba_article` コマンドが直列に回し、メインOpusが検品して `content/articles/drafts/` に `published:false` で保存。

**Tech Stack:** Next.js 16 (App Router) / next-mdx-remote 6 / gray-matter / TypeScript / Jest / Tailwind v4 / Python3 + SQLite（`scripts/jravan/backtest.py`, `data/jra_master_5y.sqlite`）

**設計書:** `docs/superpowers/specs/2026-07-22-keiba-article-pipeline-design.md`
**ブランチ:** `feature/keiba-article-pipeline`

---

# Phase 1：器（表示ページ＋SEO土台）

## Task 1: 記事ローダ `lib/articles.ts`

**Files:**
- Create: `lib/articles.ts`
- Test: `__tests__/lib/articles.test.ts`
- Reference: `lib/reports.ts`（同型パターン）, `lib/article-types.ts`（`ArticleMeta`）

- [ ] **Step 1: 失敗するテストを書く**

`__tests__/lib/articles.test.ts`:

```typescript
import { getAllArticleMeta, getArticleBySlug } from '@/lib/articles'

describe('articles loader', () => {
  it('getAllArticleMeta は配列を返す', async () => {
    const articles = await getAllArticleMeta()
    expect(Array.isArray(articles)).toBe(true)
  })

  it('published:false は一覧から除外される', async () => {
    const articles = await getAllArticleMeta()
    expect(articles.every((a) => a.published === true)).toBe(true)
  })

  it('日付降順にソートされている', async () => {
    const articles = await getAllArticleMeta()
    for (let i = 1; i < articles.length; i++) {
      expect(articles[i - 1].date >= articles[i].date).toBe(true)
    }
  })

  it('各記事に slug が付与される', async () => {
    const articles = await getAllArticleMeta()
    if (articles.length === 0) return
    expect(articles[0]).toHaveProperty('slug')
  })

  it('未知の slug では null を返す', async () => {
    const result = await getArticleBySlug('nonexistent-slug-xyz')
    expect(result).toBeNull()
  })
})
```

- [ ] **Step 2: テストを実行して失敗を確認**

Run: `npm test -- articles`
Expected: FAIL（`Cannot find module '@/lib/articles'`）

- [ ] **Step 3: 最小実装を書く**

`lib/articles.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ArticleMeta } from '@/lib/article-types'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

/** 一覧・カードで使う、slug 付きのメタ */
export type ArticleListItem = ArticleMeta & { slug: string }

function toMeta(slug: string, data: Record<string, unknown>): ArticleListItem {
  return {
    slug,
    articleType: (data.articleType as ArticleMeta['articleType']) ?? 'analysis',
    raceGrade: (data.raceGrade as ArticleMeta['raceGrade']) ?? 'G3',
    raceName: (data.raceName as string) ?? '',
    raceDate: (data.raceDate as string) ?? '',
    trackId: (data.trackId as ArticleMeta['trackId']) ?? 'tokyo',
    distance: (data.distance as string) ?? '',
    published: data.published === true,
    relatedSlugs: data.relatedSlugs as ArticleMeta['relatedSlugs'],
    date: (data.date as string) ?? slug,
    title: (data.title as string) ?? slug,
    excerpt: (data.excerpt as string) ?? '',
    results: data.results as ArticleMeta['results'],
  }
}

/** 公開記事のみ・日付降順。ディレクトリ未作成なら空配列 */
export async function getAllArticleMeta(): Promise<ArticleListItem[]> {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf8')
      const { data } = matter(raw)
      return toMeta(slug, data)
    })
    .filter((a) => a.published)
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** 単一記事（published 問わず本文取得。ページ側で存在判定に使う） */
export async function getArticleBySlug(
  slug: string
): Promise<{ meta: ArticleListItem; content: string } | null> {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: toMeta(slug, data), content }
}
```

- [ ] **Step 4: テストを実行して成功を確認**

Run: `npm test -- articles`
Expected: PASS（5件）。`content/articles` に .mdx が無くても全テスト緑（空配列で通る）。

- [ ] **Step 5: コミット**

```bash
git add lib/articles.ts __tests__/lib/articles.test.ts
git commit -m "feat(articles): 記事ローダ lib/articles.ts を追加（published除外・日付降順・slug付与）"
```

---

## Task 2: 一覧カード `components/article-card.tsx`

**Files:**
- Create: `components/article-card.tsx`
- Reference: `components/nav.tsx`（配色クラス gold-*/paddock-* の使い方）, `lib/articles.ts`（`ArticleListItem`）

- [ ] **Step 1: カードコンポーネントを書く**

`components/article-card.tsx`:

```tsx
import Link from 'next/link'
import type { ArticleListItem } from '@/lib/articles'

export function ArticleCard({ article }: { article: ArticleListItem }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block rounded border border-paddock-700 bg-paddock-900 p-4 transition-colors hover:border-gold-400/60"
    >
      <div className="flex items-center gap-2 text-xs">
        <span className="rounded border border-gold-400/60 px-1.5 py-0.5 text-gold-400">
          {article.raceGrade}
        </span>
        <span className="text-gray-400">{article.raceName}</span>
        <time className="ml-auto text-gray-500">{article.date}</time>
      </div>
      <h2 className="mt-2 font-heading text-lg font-bold text-gray-100">
        {article.title}
      </h2>
      <p className="mt-1 line-clamp-2 text-sm text-gray-400">{article.excerpt}</p>
    </Link>
  )
}
```

- [ ] **Step 2: コミット**

```bash
git add components/article-card.tsx
git commit -m "feat(articles): 一覧カード article-card を追加"
```

---

## Task 3: 一覧ページ `app/articles/page.tsx`

**Files:**
- Create: `app/articles/page.tsx`
- Reference: `app/report/page.tsx`（一覧の GateReveal/HoverLift パターン）

- [ ] **Step 1: 一覧ページを書く**

`app/articles/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { getAllArticleMeta } from '@/lib/articles'
import { ArticleCard } from '@/components/article-card'
import { GateReveal } from '@/components/motion/gate-reveal'
import { HoverLift } from '@/components/motion/hover-lift'

const DIRECTIONS = ['left', 'up', 'right'] as const

export const metadata: Metadata = {
  title: '読み物 | 馬券ファクト',
  description: '重賞レースを過去5年の実データで読み解く、データドリブンな読み物。',
}

export default async function ArticleListPage() {
  const articles = await getAllArticleMeta()

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        読み物
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        重賞レースを、過去5年の実データで読み解く。
      </p>

      {articles.length === 0 ? (
        <p className="mt-8 text-gray-500">記事はまだありません。</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {articles.map((article, index) => (
            <GateReveal
              key={article.slug}
              direction={DIRECTIONS[index % 3]}
              delay={index * 0.06}
            >
              <HoverLift>
                <ArticleCard article={article} />
              </HoverLift>
            </GateReveal>
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: 開発サーバで表示確認**

Run: `npm run dev`（別ポート3001の可能性あり）→ ブラウザで `/articles` を開く
Expected: 「記事はまだありません。」が表示されエラーなし。

- [ ] **Step 3: コミット**

```bash
git add app/articles/page.tsx
git commit -m "feat(articles): 記事一覧ページ /articles を追加"
```

---

## Task 4: 詳細ページ `app/articles/[slug]/page.tsx`（JSON-LD＋内部リンク）

**Files:**
- Create: `app/articles/[slug]/page.tsx`
- Reference: `app/report/[slug]/page.tsx`（MDXRemote・generateMetadata・generateStaticParams）

- [ ] **Step 1: 詳細ページを書く**

`app/articles/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { getAllArticleMeta, getArticleBySlug } from '@/lib/articles'

const SITE_URL = 'https://keiba-hp.vercel.app'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getAllArticleMeta()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article || !article.meta.published) return { title: '404 | 馬券ファクト' }
  const { meta } = article
  const url = `${SITE_URL}/articles/${slug}`
  return {
    title: `${meta.title} | 馬券ファクト`,
    description: meta.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      url,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  // 下書き（published:false）は公開ページとして表示しない
  if (!article || !article.meta.published) notFound()

  const { meta, content } = article

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    about: meta.raceName,
    author: { '@type': 'Organization', name: '馬券ファクト' },
    publisher: { '@type': 'Organization', name: '馬券ファクト' },
    mainEntityOfPage: `${SITE_URL}/articles/${slug}`,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex items-center gap-2 text-xs">
        <span className="rounded border border-gold-400/60 px-1.5 py-0.5 text-gold-400">
          {meta.raceGrade}
        </span>
        <span className="text-gray-400">{meta.raceName}</span>
        <time className="ml-auto text-gray-500">{meta.date}</time>
      </div>

      <h1 className="mt-2 font-heading text-2xl font-bold text-gold-shimmer animate-shimmer">
        {meta.title}
      </h1>

      <article className="prose prose-invert mt-8 max-w-none">
        <MDXRemote source={content} />
      </article>

      {/* 内部リンク（SEO土台）：このレースのコース傾向・重賞データへ */}
      <nav className="mt-12 flex flex-wrap gap-3 border-t border-paddock-700 pt-6 text-sm">
        <Link href={`/courses/${meta.trackId}`} className="text-gold-400 hover:underline">
          → {meta.raceName}のコース傾向を見る
        </Link>
        <Link href="/graded" className="text-gold-400 hover:underline">
          → 重賞データ一覧
        </Link>
      </nav>
    </div>
  )
}
```

- [ ] **Step 2: 検証用の公開記事を1本用意**

`content/articles/2026-07-22-てすと-analysis.mdx`（検証専用・後で削除）:

```mdx
---
articleType: "analysis"
raceGrade: "G3"
raceName: "テスト記念"
raceDate: "2026-07-22"
trackId: "kokura"
distance: "芝2000m"
published: true
date: "2026-07-22"
title: "【テスト記念】表示確認用ダミー記事"
excerpt: "詳細ページとJSON-LDの表示を確認するためのダミー記事です。"
---

## 見出しテスト

本文テスト。
```

- [ ] **Step 3: 開発サーバで表示・JSON-LD確認**

Run: `npm run dev` → `/articles/2026-07-22-てすと-analysis` を開く
Expected: 記事が表示され、ページソースに `"@type":"Article"` の JSON-LD が存在。内部リンク（`/courses/kokura`・`/graded`）が表示される。

- [ ] **Step 4: 検証用記事を削除してコミット**

```bash
rm content/articles/2026-07-22-てすと-analysis.mdx
git add app/articles/[slug]/page.tsx
git commit -m "feat(articles): 記事詳細ページ（JSON-LD Article・内部リンク・下書き非公開）を追加"
```

---

## Task 5: sitemap `app/sitemap.ts`

**Files:**
- Create: `app/sitemap.ts`
- Reference: `lib/articles.ts`

- [ ] **Step 1: sitemap を書く**

`app/sitemap.ts`:

```typescript
import type { MetadataRoute } from 'next'
import { getAllArticleMeta } from '@/lib/articles'

const SITE_URL = 'https://keiba-hp.vercel.app'

const STATIC_ROUTES = [
  '',
  '/courses',
  '/graded',
  '/jockeys',
  '/training',
  '/report',
  '/articles',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticleMeta()

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))

  const articleEntries = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.date),
  }))

  return [...staticEntries, ...articleEntries]
}
```

- [ ] **Step 2: build で sitemap 生成を確認**

Run: `npm run build`
Expected: ビルド成功。`/sitemap.xml` がルートに含まれる（ビルドログの Route 一覧に `○ /sitemap.xml` 等）。

- [ ] **Step 3: コミット**

```bash
git add app/sitemap.ts
git commit -m "feat(seo): sitemap.ts を追加（静的ルート＋公開記事）"
```

---

## Task 6: ナビに「読み物」導線を追加

**Files:**
- Modify: `components/nav.tsx`（`navLinks` 配列）

- [ ] **Step 1: navLinks に読み物を追加**

`components/nav.tsx` の `navLinks` を以下に変更（`/report` の直後に挿入）:

```tsx
const navLinks = [
  { href: '/report', label: '週次レポート' },
  { href: '/articles', label: '読み物' },
  { href: '/courses', label: 'コース傾向' },
  { href: '/graded', label: '重賞データ' },
  { href: '/jockeys', label: '騎手データ' },
  { href: '/training', label: '調教チェック' },
]
```

- [ ] **Step 2: 開発サーバでナビ表示を確認**

Run: `npm run dev` → 任意ページでヘッダーに「読み物」リンクが出て `/articles` に飛ぶ。モバイルメニューにも出る。

- [ ] **Step 3: コミット**

```bash
git add components/nav.tsx
git commit -m "feat(articles): ナビに読み物（/articles）導線を追加"
```

---

## Task 7: Phase1 総合検証（build＋Playwright）

**Files:** なし（検証のみ）

- [ ] **Step 1: 全テスト実行**

Run: `npm test`
Expected: 全 PASS（既存＋articles 5件）。

- [ ] **Step 2: 本番ビルド**

Run: `npm run build`
Expected: 成功。型エラー・lintエラーなし。

- [ ] **Step 3: Playwright で一覧・詳細を目視検品**

Task 4 Step 2 のダミー記事を再度置いて `npm run dev`、Playwright MCP で:
1. `/articles` へ navigate → ダミー記事カードが見える
2. カードをクリック → 詳細表示・見出し h1/h2 階層・内部リンク表示
3. `browser_evaluate` で `document.querySelector('script[type="application/ld+json"]').textContent` を取得し `"@type":"Article"` を含むことを確認
4. 確認後ダミー記事を削除

Expected: 全て確認できたら Phase1 完了。

- [ ] **Step 4: Phase1 完了コミット（あれば）**

```bash
git commit --allow-empty -m "chore: Phase1（器）検証完了 — build/test/Playwright緑"
```

---

# Phase 2：ワンポチ・バケツリレー（生成パイプライン）

> Phase2 は `~/.claude/agents/` と `~/.claude/commands/` の Markdown 定義が成果物。jest ではなく **小倉記念での実走検証**（Task 13）が受け入れテスト。各エージェント Markdown は frontmatter（name/description/tools/model）＋本文（役割・入出力契約）で構成する。

## Task 8: データ収集エージェント `keiba-fact-collector`

**Files:**
- Create: `~/.claude/agents/keiba-fact-collector.md`
- Reference: `scripts/jravan/backtest.py --help`（CLI仕様）, `docs/JRA5年データ分析_前後半傾向差レポート.md`

- [ ] **Step 1: エージェント定義を書く**

`~/.claude/agents/keiba-fact-collector.md`:

```markdown
---
name: keiba-fact-collector
description: 競馬記事パイプラインの工程1。レース名を受け取り、そのレースの開催場・距離・馬場について過去5年の実データ傾向（枠/脚質/人気/距離・歴代勝ち馬）をファクトシートにまとめる。散文を書かず数字だけを集める。keiba-writerの唯一の事実ソースになる。
tools: Bash, Read, Write
model: sonnet
---

あなたは競馬記事パイプラインの工程1「データ収集官」です。散文は書かず、**実データの数字だけ**を集めてファクトシートに落とします。

## 入力
- レース名（例：小倉記念）と、そのレースの開催場ID・距離・グレード（司令塔から渡される）

## 手順
1. 作業ディレクトリは keiba-hp リポジトリ直下。データは `data/jra_master_5y.sqlite`、CLIは `scripts/jravan/backtest.py`。
2. 以下を `Bash` で取得（開催場・芝ダ・距離を指定）：
   - 枠番別成績：`python3 scripts/jravan/backtest.py --place <場> --surface <芝/ダ> --dist <距離> --by frame`
   - 脚質別成績：`... --by style`
   - 人気別成績：`... --by popularity --pop-max 8`
   - 前後半比較（必要時）：`... --by phase,frame`
3. 歴代勝ち馬は `/graded` の元データ（`lib/data/graded-races*.ts` または `scripts/jravan/export_graded.py` の出力）から該当重賞を参照。
4. **データ不足チェック**：該当条件のレース数が薄い（各グループ 10レース未満が大半）場合、ファクトシート冒頭に `## ⚠️ データ不足` と明記し、司令塔にパイプライン停止を促す。

## 出力
`content/articles/drafts/_pipeline/<slug>/1-facts.md` に Write。フォーマット：

- レース基本情報（場・距離・グレード・過去5年の開催時期）
- 枠番別 複勝率テーブル（数字）
- 脚質別 複勝率テーブル（数字）
- 人気別 勝率/複勝率テーブル（数字）
- 前後半で傾向が変わる場合はその差
- 歴代勝ち馬リスト（年・馬名・人気・枠・脚質）
- データ元コマンド（再現用に実行した backtest.py コマンドを併記）

## 絶対ルール
- **数字は backtest.py / sqlite の出力のみ**。推測値・創作値を書かない。
- 勝率・回収率が取れない項目は「データなし」と明記（0や推測で埋めない）。
```

- [ ] **Step 2: コミット**

```bash
git add ~/.claude/agents/keiba-fact-collector.md 2>/dev/null; \
  (cd "$HOME/Desktop/Claude/【け】競馬HP/keiba-hp" && git commit --allow-empty -m "feat(pipeline): keiba-fact-collector エージェントを追加")
```
※ `~/.claude/agents/` はリポジトリ外。エージェント定義はホーム側に置き、keiba-hp 側は空コミットで進捗記録（またはリポジトリ内 `docs/agents/` にコピーを残す）。

---

## Task 9: 構成設計エージェント `keiba-outliner`

**Files:**
- Create: `~/.claude/agents/keiba-outliner.md`

- [ ] **Step 1: エージェント定義を書く**

`~/.claude/agents/keiba-outliner.md`:

```markdown
---
name: keiba-outliner
description: 競馬記事パイプラインの工程2。工程1のファクトシートを受け取り、SEOで上位を狙う記事構成（狙いキーワード・検索意図・h2/h3見出し・タイトル案5・meta description案）を設計する。本文は書かない。
tools: Read, Write
model: sonnet
---

あなたは競馬記事パイプラインの工程2「構成設計官」です。SEOで検索上位を狙う骨子を作ります。本文は書きません。

## 入力
- `content/articles/drafts/_pipeline/<slug>/1-facts.md`（ファクトシート）

## 手順
1. ファクトシートを Read。
2. 狙いキーワードを決める（例：「小倉記念 傾向」「小倉記念 データ」）。検索意図＝「今週の重賞をデータで予想したい人」。
3. SEO見出し構成を設計：h1（タイトル）→ リード → h2複数（コース特性 / 枠順傾向 / 脚質傾向 / 人気傾向 / 歴代勝ち馬 / 今年の注目ポイント）→ 必要に応じ h3。
4. タイトル案を5つ（狙いKW前方・数字入り・読ませる）。
5. meta description 案（120字前後・excerpt兼用）。

## 出力
`content/articles/drafts/_pipeline/<slug>/2-outline.md` に Write：
- 狙いキーワード / 検索意図
- タイトル案5
- meta description案
- 見出しツリー（各見出しで「ファクトシートのどの数字を使うか」を1行紐付け）

## 絶対ルール
- 見出しに紐付けできる数字がファクトシートに無いセクションは作らない（薄い網羅を禁止）。
- 狙いキーワードはリード文と最低1つのh2に必ず含める設計にする。
```

- [ ] **Step 2: コミット**

```bash
(cd "$HOME/Desktop/Claude/【け】競馬HP/keiba-hp" && git commit --allow-empty -m "feat(pipeline): keiba-outliner エージェントを追加")
```

---

## Task 10: 執筆エージェント `keiba-writer`

**Files:**
- Create: `~/.claude/agents/keiba-writer.md`
- Reference: `content/articles/_templates/analysis-template.mdx`, `CLAUDE.md`（ブランド・禁句）

- [ ] **Step 1: エージェント定義を書く**

`~/.claude/agents/keiba-writer.md`:

```markdown
---
name: keiba-writer
description: 競馬記事パイプラインの工程3。工程2の骨子と工程1のファクトシートから、SEO長文の本文MDXを執筆する。府中のVIPラウンジ調・冒頭フックで読ませる・今週の出走馬はプレースホルダ。数字はファクトシートの値のみ使う。
tools: Read, Write
model: sonnet
---

あなたは競馬記事パイプラインの工程3「執筆官」です。SEO長文の本文MDXを書きます。

## 入力
- `content/articles/drafts/_pipeline/<slug>/1-facts.md`（数字の唯一のソース）
- `content/articles/drafts/_pipeline/<slug>/2-outline.md`（構成・タイトル・KW）

## 執筆ルール
- 文体：です・ます調、府中のVIPラウンジ（上品・データドリブン）。**煽り・感情論・断定的な買い煽り禁止**。
- **禁句**：ズボラ・手抜き・激安。
- 本文 1500〜3000字。骨子の見出し構成に従い h2/h3 を使う。
- **冒頭フック**：リード文の1〜2文で「このレースの意外な事実（数字）」を提示し読ませる。狙いキーワードをリードとh2に含める。
- 数字は必ずファクトシートの値をそのまま使う（丸め・創作禁止）。ファクトシートに無い数字は書かない。
- 今週の実際の出走馬・騎手は未確定。`> 【今週の注目馬：まゆが出馬表確定後に追記】` の引用ブロックをプレースホルダとして該当箇所に置く。
- 内部リンク：本文中に `/courses/<trackId>`（コース傾向）へのMarkdownリンクを最低1本。

## 出力
`content/articles/drafts/_pipeline/<slug>/3-draft.mdx` に Write。frontmatter はまだ最小（title/excerpt のみ）で可。工程4が整える。
```

- [ ] **Step 2: コミット**

```bash
(cd "$HOME/Desktop/Claude/【け】競馬HP/keiba-hp" && git commit --allow-empty -m "feat(pipeline): keiba-writer エージェントを追加")
```

---

## Task 11: SEO最適化エージェント `keiba-seo`

**Files:**
- Create: `~/.claude/agents/keiba-seo.md`
- Reference: `lib/article-types.ts`（`ArticleMeta` frontmatter）

- [ ] **Step 1: エージェント定義を書く**

`~/.claude/agents/keiba-seo.md`:

```markdown
---
name: keiba-seo
description: 競馬記事パイプラインの工程4。工程3の本文MDXに、ArticleMeta準拠の完全なfrontmatter・meta description・見出し構造の整合・内部リンクを付与して仕上げる。数字や本文の主張は改変しない（体裁のみ）。
tools: Read, Edit, Write
model: sonnet
---

あなたは競馬記事パイプラインの工程4「SEO最適化官」です。本文の事実は変えず、SEO体裁を仕上げます。

## 入力
- `content/articles/drafts/_pipeline/<slug>/3-draft.mdx`（本文）
- `content/articles/drafts/_pipeline/<slug>/2-outline.md`（KW・タイトル・meta案）

## 手順
1. `lib/article-types.ts` の `ArticleMeta` に完全準拠した frontmatter を付与：
   `articleType, raceGrade, raceName, raceDate, trackId, distance, published: false, date, title, excerpt` を必ず埋める（trackId は tokyo/nakayama/hanshin/kyoto/chukyo/kokura/fukushima/niigata/hakodate/sapporo のいずれか）。
2. title は骨子の最有力案、excerpt は meta description（120字前後）。
3. 見出し階層を検査：h1相当（frontmatter title）→ 本文は h2 開始 → h3。逆順・飛び階層を修正。
4. 狙いキーワードがリード文と最低1つのh2に含まれているか確認、無ければ自然に挿入。
5. 内部リンク `/courses/<trackId>` と `/graded` が本文または末尾にあるか確認、無ければ末尾に追記。

## 出力
`content/articles/drafts/_pipeline/<slug>/4-seo.mdx` に Write。

## 絶対ルール
- 数字・事実・主張は改変しない（体裁と frontmatter のみ）。
- `published` は必ず `false`。
```

- [ ] **Step 2: コミット**

```bash
(cd "$HOME/Desktop/Claude/【け】競馬HP/keiba-hp" && git commit --allow-empty -m "feat(pipeline): keiba-seo エージェントを追加")
```

---

## Task 12: ワンポチコマンド `/keiba_article`（司令塔＋検品）

**Files:**
- Create: `~/.claude/commands/keiba_article.md`
- Reference: `docs/article-workflow.md`（命名規則・下書き保存・公開はまゆ）

- [ ] **Step 1: コマンド定義を書く**

`~/.claude/commands/keiba_article.md`:

```markdown
---
description: レース名から過去5年の実データ傾向でSEO長文の重賞記事を1本、バケツリレー生成して下書き保存する
---

あなたは競馬記事パイプラインの司令塔（メインOpus）です。引数のレース名 `$ARGUMENTS` について、以下を順に実行します。作業ディレクトリは keiba-hp リポジトリ。

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
- **自動公開しない**。公開＝`content/articles/` への移動＋`published: true` 化はまゆ本人が行う（[[project-keiba-hp]] 運用ルール）。
```

- [ ] **Step 2: コミット**

```bash
(cd "$HOME/Desktop/Claude/【け】競馬HP/keiba-hp" && git commit --allow-empty -m "feat(pipeline): /keiba_article ワンポチコマンド（司令塔＋検品）を追加")
```

---

## Task 13: 小倉記念で実走検証（受け入れテスト）

**Files:** なし（実走・目視）

- [ ] **Step 1: ワンポチ実走**

新しい会話または本セッションで `/keiba_article 小倉記念` を実行。
Expected: `_pipeline/<slug>/` に 1-facts.md → 2-outline.md → 3-draft.mdx → 4-seo.mdx が順に生成され、`content/articles/drafts/<slug>.mdx` が `published:false` で保存される。

- [ ] **Step 2: 器で表示確認**

生成された下書きの frontmatter を一時的に `published: true` にして `npm run dev` → `/articles/<slug>` を Playwright で開く。
Expected: SEO長文が正しく表示・h2/h3階層・JSON-LD・内部リンク（/courses/kokura）が出る。確認後 `published: false` に戻す。

- [ ] **Step 3: 検品官の弾き確認（ネガティブテスト）**

`3-draft.mdx` に故意に「複勝率 99.9%」などファクトシートに無い数字を1つ挿入 → `keiba-seo` 相当で 4-seo を作り直し → 検品ステップを実行。
Expected: 検品官がその数字を「1-facts.md に存在しない」として検出し、削除/準備中化を指示する。**検出できなければ検品ロジック（Task12 Step1のチェック文言）を強化して再確認。**

- [ ] **Step 4: 実績を history_log とメモリに記録**

```bash
echo "2026-07-22 競馬記事ワンポチ生成システム（Phase1器＋Phase2パイプライン）実装・小倉記念で実走検証" >> ~/instagram_content/history_log.md
```
`project-keiba-hp` メモリに「/keiba_article で重賞記事をバケツリレー生成（5工程・検品でファクト照合・下書き保存/公開はまゆ）」を追記。

- [ ] **Step 5: ブランチ完了処理**

`superpowers:finishing-a-development-branch` に従い、main へのマージ or PR をまゆに確認（自動 push/merge しない）。

---

## Self-Review 結果（計画→スペック突き合わせ）

- **スペック カバレッジ**：器（lib/articles=T1, 一覧=T2/T3, 詳細+JSON-LD=T4, sitemap=T5, nav=T6, 検証=T7）／パイプライン（収集=T8, 構成=T9, 執筆=T10, SEO=T11, コマンド+検品=T12, 実走=T13）＝スペック全項目に対応タスクあり。
- **エラー処理**：データ不足停止＝T8 Step1＋T12 §1。創作数字弾き＝T12 §5＋T13 Step3。
- **非目標**：JRA自動取得なし（今週馬はプレースホルダ＝T10）／自動公開なし（T12 §7）を遵守。
- **型整合**：`ArticleListItem = ArticleMeta & { slug }` を T1 で定義し T2/T3/T4/T5 で一貫使用。`getAllArticleMeta`/`getArticleBySlug` の名称は全タスクで統一。trackId の許容値10種は T4/T11 で一致。
- **プレースホルダ**：TBD/TODO なし。各コード・コマンドは実内容を記載済み。
