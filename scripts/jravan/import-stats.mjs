#!/usr/bin/env node
// このスクリプトは Node 標準ライブラリのみを使用します（外部依存なし）
// 使い方:
//   node scripts/jravan/import-stats.mjs \
//     --frame <frame_stats.csv> \
//     --style <style_stats.csv> \
//     [--source "JRA-VAN DataLab 自社集計"] \
//     [--period "2023-2025"] \
//     [--dry-run]

import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ─── 定数 ──────────────────────────────────────────────
const VALID_TRACKS = new Set([
  'tokyo', 'nakayama', 'hanshin', 'kyoto',
  'chukyo', 'kokura', 'fukushima', 'niigata',
  'hakodate', 'sapporo',
])
const VALID_SURFACES = new Set(['turf', 'dirt'])
const VALID_STYLES = new Set(['逃げ', '先行', '差し', '追込'])
const VALID_PHASES = new Set(['early', 'late', 'all'])

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// lib/data/course-stats.ts は scripts/jravan/ から ../../lib/data/ に位置する
const OUT_PATH = resolve(__dirname, '../../lib/data/course-stats.ts')

// ─── 引数パース ────────────────────────────────────────
function parseArgs(args) {
  const result = { frame: null, style: null, source: null, period: null, dryRun: false }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--frame')   result.frame   = args[++i]
    else if (args[i] === '--style')  result.style   = args[++i]
    else if (args[i] === '--source') result.source  = args[++i]
    else if (args[i] === '--period') result.period  = args[++i]
    else if (args[i] === '--dry-run') result.dryRun = true
  }
  return result
}

// ─── CSV パーサ（ヘッダ行を返す） ─────────────────────
function parseCSV(filePath) {
  const abs = resolve(process.cwd(), filePath)
  if (!existsSync(abs)) {
    console.error(`[ERROR] ファイルが見つかりません: ${abs}`)
    process.exit(1)
  }
  const lines = readFileSync(abs, 'utf8').split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length < 2) {
    console.error(`[ERROR] ${filePath}: データ行がありません（ヘッダのみ）`)
    process.exit(1)
  }
  const headers = lines[0].split(',').map(h => h.trim())
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim())
    const obj = {}
    headers.forEach((h, idx) => { obj[h] = values[idx] ?? '' })
    obj.__lineNo = i + 1  // 1-based（ヘッダ=1行目）
    rows.push(obj)
  }
  return rows
}

// ─── phase 値の正規化（列なし・空 → 'all'） ──────────
function normalizePhase(rawPhase, warn) {
  if (!rawPhase || rawPhase.trim() === '' || rawPhase === undefined) return 'all'
  const p = rawPhase.trim()
  if (!VALID_PHASES.has(p)) {
    warn(`不正な phase "${p}"（early / late / all のみ有効）`)
    return null // null = 行スキップ
  }
  return p
}

// ─── バリデーション：frame_stats ──────────────────────
function validateFrameRows(rows) {
  const valid = []
  let warnCount = 0
  for (const row of rows) {
    const { track_id, surface, distance, frame, win_rate, place_rate, __lineNo } = row
    const rawPhase = row['phase']
    const warn = (msg) => {
      console.warn(`[WARN] frame_stats.csv 行${__lineNo}: ${msg} → スキップ`)
      warnCount++
    }

    if (!VALID_TRACKS.has(track_id))   { warn(`不正な track_id "${track_id}"`); continue }
    if (!VALID_SURFACES.has(surface))  { warn(`不正な surface "${surface}"`); continue }
    const dist = parseInt(distance, 10)
    if (isNaN(dist) || dist <= 0)      { warn(`不正な distance "${distance}"`); continue }
    const fr = parseInt(frame, 10)
    if (isNaN(fr) || fr < 1 || fr > 8) { warn(`枠番は1〜8の整数 "${frame}"`); continue }
    const wr = parseFloat(win_rate)
    const pr = parseFloat(place_rate)
    if (isNaN(wr) || wr < 0 || wr > 100) { warn(`win_rate が範囲外 "${win_rate}"`); continue }
    if (isNaN(pr) || pr < 0 || pr > 100) { warn(`place_rate が範囲外 "${place_rate}"`); continue }

    const phase = normalizePhase(rawPhase, (msg) => { warn(msg); warnCount++ })
    if (phase === null) continue

    // races 列（任意：無い・空なら undefined、正の整数のみ有効）
    const rawRaces = row['races']
    let races = undefined
    if (rawRaces !== undefined && rawRaces !== '') {
      const r = parseInt(rawRaces, 10)
      if (isNaN(r) || r <= 0) {
        warn(`races は正の整数である必要があります "${rawRaces}"`)
        continue
      }
      races = r
    }

    valid.push({ track_id, surface, distance: dist, frame: fr, win_rate: wr, place_rate: pr, phase, races })
  }
  return { valid, warnCount }
}

// ─── バリデーション：style_stats ──────────────────────
function validateStyleRows(rows) {
  const valid = []
  let warnCount = 0
  for (const row of rows) {
    const { track_id, surface, distance, style, win_rate, place_rate, __lineNo } = row
    const rawPhase = row['phase']
    const warn = (msg) => {
      console.warn(`[WARN] style_stats.csv 行${__lineNo}: ${msg} → スキップ`)
      warnCount++
    }

    if (!VALID_TRACKS.has(track_id))   { warn(`不正な track_id "${track_id}"`); continue }
    if (!VALID_SURFACES.has(surface))  { warn(`不正な surface "${surface}"`); continue }
    const dist = parseInt(distance, 10)
    if (isNaN(dist) || dist <= 0)      { warn(`不正な distance "${distance}"`); continue }
    if (!VALID_STYLES.has(style))      { warn(`不正な style "${style}"`); continue }
    const wr = parseFloat(win_rate)
    const pr = parseFloat(place_rate)
    if (isNaN(wr) || wr < 0 || wr > 100) { warn(`win_rate が範囲外 "${win_rate}"`); continue }
    if (isNaN(pr) || pr < 0 || pr > 100) { warn(`place_rate が範囲外 "${place_rate}"`); continue }

    const phase = normalizePhase(rawPhase, (msg) => { warn(msg); warnCount++ })
    if (phase === null) continue

    valid.push({ track_id, surface, distance: dist, style, win_rate: wr, place_rate: pr, phase })
  }
  return { valid, warnCount }
}

// ─── フルキー生成（phase を含む） ────────────────────
function makeFullKey(r) {
  const base = `${r.track_id}-${r.surface}-${r.distance}`
  return r.phase === 'all' ? base : `${base}-${r.phase}`
}

// ─── 整合性チェック（フルキー単位で両方揃っているか） ─
function mergeAndCheck(frameValid, styleValid) {
  const frameKeys = new Set(frameValid.map(makeFullKey))
  const styleKeys = new Set(styleValid.map(makeFullKey))

  // frameのみのキー
  const frameOnly = [...frameKeys].filter(k => !styleKeys.has(k))
  // styleのみのキー
  const styleOnly = [...styleKeys].filter(k => !frameKeys.has(k))

  if (frameOnly.length > 0 || styleOnly.length > 0) {
    console.error('[ERROR] frame_stats と style_stats の両方が揃っていないキーがあります。')
    console.error('  片方しかないキーはデータ不整合のため中断します。')
    if (frameOnly.length > 0) {
      console.error('  frame_stats にのみ存在: ' + frameOnly.join(', '))
    }
    if (styleOnly.length > 0) {
      console.error('  style_stats にのみ存在: ' + styleOnly.join(', '))
    }
    console.error('→ 両ファイルに同じ「競馬場×芝/ダ×距離×phase」が揃っているか確認してください。')
    process.exit(1)
  }

  return [...frameKeys].sort()
}

// ─── TypeScript ソース生成 ─────────────────────────────
function buildTS(frameValid, styleValid, source, period) {
  // フルキーごとにデータをグループ化
  const grouped = {}
  for (const r of frameValid) {
    const key = makeFullKey(r)
    if (!grouped[key]) grouped[key] = { frameStats: [], runningStyleStats: [], races: undefined }
    grouped[key].frameStats.push({ frame: r.frame, winRate: r.win_rate, placeRate: r.place_rate })
    // races は frame 側の最初の値を採用（全行同じはず）
    if (grouped[key].races === undefined && r.races !== undefined) {
      grouped[key].races = r.races
    }
  }
  for (const r of styleValid) {
    const key = makeFullKey(r)
    if (!grouped[key]) grouped[key] = { frameStats: [], runningStyleStats: [], races: undefined }
    grouped[key].runningStyleStats.push({ style: r.style, winRate: r.win_rate, placeRate: r.place_rate })
  }

  // 枠番でソート
  for (const key of Object.keys(grouped)) {
    grouped[key].frameStats.sort((a, b) => a.frame - b.frame)
  }

  const now = new Date().toISOString()
  const sourceStr = source ?? '（未指定）'
  const periodStr = period ?? '（未指定）'

  const entries = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, val]) => {
      const fs = val.frameStats
        .map(f => `      { frame: ${f.frame}, winRate: ${f.winRate.toFixed(1)}, placeRate: ${f.placeRate.toFixed(1)} }`)
        .join(',\n')
      const rs = val.runningStyleStats
        .map(r => `      { style: '${r.style}', winRate: ${r.winRate.toFixed(1)}, placeRate: ${r.placeRate.toFixed(1)} }`)
        .join(',\n')
      const racesLine = (val.races !== undefined) ? `\n    races: ${val.races},` : ''
      const srcLine = source ? `\n    source: '${sourceStr}',` : ''
      const perLine = period ? `\n    period: '${periodStr}',` : ''
      return `  '${key}': {\n    frameStats: [\n${fs},\n    ],\n    runningStyleStats: [\n${rs},\n    ],${racesLine}${srcLine}${perLine}\n  }`
    })
    .join(',\n')

  return `// このファイルは scripts/jravan/import-stats.mjs により生成されます（手動編集は上書きされます）
// source : ${sourceStr}
// period : ${periodStr}
// generated: ${now}
import type { FrameStat, RunningStyleStat } from '@/lib/types'

export type StatsPhase = 'early' | 'late' | 'all'

export interface CourseStats {
  frameStats: FrameStat[]
  runningStyleStats: RunningStyleStat[]
  races?: number
  source?: string
  period?: string
}

/**
 * キー体系：
 *   開催全体（all）: \`\${trackId}-\${surface}-\${distance}\`          例 'tokyo-turf-2400'
 *   開幕前半（early）: \`\${trackId}-\${surface}-\${distance}-early\`  例 'tokyo-turf-2400-early'
 *   開催後半（late）:  \`\${trackId}-\${surface}-\${distance}-late\`   例 'tokyo-turf-2400-late'
 */
export const courseStats: Record<string, CourseStats> = {
${entries},
}

/**
 * コース統計を取得する。
 * phase を指定した場合：phase 別キーを優先して返し、該当キーが存在しなければ開催全体キーにフォールバックする。
 * phase を省略した場合（または 'all'）：従来の開催全体キーのみを参照する。
 * 既存呼び出し（phase 無し）の挙動は不変。
 */
export function getCourseStats(
  trackId: string,
  surface: string,
  distance: number,
  phase?: 'early' | 'late',
): CourseStats | undefined {
  const baseKey = \`\${trackId}-\${surface}-\${distance}\`
  if (phase) {
    const phaseKey = \`\${baseKey}-\${phase}\`
    return courseStats[phaseKey] ?? courseStats[baseKey]
  }
  return courseStats[baseKey]
}
`
}

// ─── メイン ───────────────────────────────────────────
const args = parseArgs(process.argv.slice(2))

if (!args.frame || !args.style) {
  console.error('使い方: node scripts/jravan/import-stats.mjs --frame <CSV> --style <CSV> [--source "..."] [--period "..."] [--dry-run]')
  process.exit(1)
}

console.log(`\n[INFO] frame_stats: ${args.frame}`)
console.log(`[INFO] style_stats : ${args.style}`)
console.log(`[INFO] dry-run     : ${args.dryRun}`)
if (args.source) console.log(`[INFO] source      : ${args.source}`)
if (args.period) console.log(`[INFO] period      : ${args.period}`)
console.log()

// CSV 読み込み・バリデーション
const frameRows  = parseCSV(args.frame)
const styleRows  = parseCSV(args.style)
const { valid: frameValid, warnCount: fw } = validateFrameRows(frameRows)
const { valid: styleValid, warnCount: sw } = validateStyleRows(styleRows)

console.log(`[INFO] frame_stats: ${frameRows.length} 行読み込み → ${frameValid.length} 件有効 / ${fw} 件スキップ`)
console.log(`[INFO] style_stats: ${styleRows.length} 行読み込み → ${styleValid.length} 件有効 / ${sw} 件スキップ`)

// 両ファイル揃い確認（不一致ならここで中断）
const validKeys = mergeAndCheck(frameValid, styleValid)
console.log(`[INFO] 有効コースキー数: ${validKeys.length} 件`)
console.log(`       キー一覧: ${validKeys.sort().join(', ')}`)

// TypeScript ソース生成
const tsContent = buildTS(frameValid, styleValid, args.source, args.period)

if (args.dryRun) {
  // dry-run: 差分件数のみ表示
  const existingContent = existsSync(OUT_PATH) ? readFileSync(OUT_PATH, 'utf8') : null
  if (existingContent === null) {
    console.log('\n[DRY-RUN] lib/data/course-stats.ts は存在しません → 新規生成になります')
  } else if (existingContent === tsContent) {
    console.log('\n[DRY-RUN] 内容に差分はありません（上書きなし）')
  } else {
    // 行単位の差分件数を簡易計算
    const oldLines = existingContent.split('\n')
    const newLines = tsContent.split('\n')
    const changed  = newLines.filter((l, i) => l !== oldLines[i]).length
    const added    = Math.max(0, newLines.length - oldLines.length)
    console.log(`\n[DRY-RUN] 差分あり: 変更行 ${changed} 行, 追加行 ${added} 行（書き込みはスキップ）`)
    console.log(`[DRY-RUN] 出力予定先: ${OUT_PATH}`)
  }
  console.log('\n[DRY-RUN] 完了。--dry-run を外すと実際に書き込みます。')
  process.exit(0)
}

// バックアップ
if (existsSync(OUT_PATH)) {
  // .ts のままだと tsc のコンパイル対象に入るため拡張子は .bak にする
  const bakPath = OUT_PATH.replace(/\.ts$/, `.bak`)
  copyFileSync(OUT_PATH, bakPath)
  console.log(`\n[INFO] バックアップ作成: ${bakPath}`)
}

// 書き込み
writeFileSync(OUT_PATH, tsContent, 'utf8')
console.log(`\n[SUCCESS] 書き込み完了: ${OUT_PATH}`)
console.log('次のステップ: npm test && npm run build で動作確認 → git commit')
