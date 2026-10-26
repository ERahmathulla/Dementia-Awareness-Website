// Builds the site search index after `next build` (runs as part of `npm run build`).
//
// Reads every prerendered page in .next/server/app, indexes the content inside
// <main data-pagefind-body>, and writes a static Pagefind bundle to public/pagefind,
// which the browser searches without any server or third-party service.

import { readdir, readFile, rm } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import * as pagefind from 'pagefind'

const APP_DIR = '.next/server/app'
const OUTPUT_DIR = 'public/pagefind'
const SITE_NAME_SUFFIX = ' | Big Bend Brain Health'

// The Studio, API routes, Next internals (_not-found etc.), and the search page itself
const EXCLUDED = [/^\/studio(\/|$)/, /^\/api(\/|$)/, /^\/_/, /^\/directory$/, /\[/]

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* htmlFiles(path)
    else if (entry.name.endsWith('.html')) yield path
  }
}

function toUrl(file) {
  const route = relative(APP_DIR, file).split(sep).join('/').replace(/\.html$/, '')
  return route === 'index' ? '/' : `/${route}`
}

const { index, errors: createErrors } = await pagefind.createIndex({ forceLanguage: 'en' })
if (!index) throw new Error(`Pagefind failed to start: ${createErrors.join(', ')}`)

let count = 0
for await (const file of htmlFiles(APP_DIR)) {
  const url = toUrl(file)
  if (EXCLUDED.some((pattern) => pattern.test(url))) continue

  let html = await readFile(file, 'utf8')
  // Skip redirect-only pages (e.g. /counties) and anything outside the site layout
  if (html.includes('id="__next-page-redirect"') || !html.includes('data-pagefind-body')) continue

  // Next streams each page's content (behind the root loading.tsx) into
  // <div hidden id="S:n"> blocks after <main>, which only holds the loading
  // skeleton. Index those blocks as the page body instead of <main>.
  if (/<div hidden id="S:\d+">/.test(html)) {
    html = html
      .replace(/(<main[^>]*?) data-pagefind-body(="")?/, '$1')
      .replace(/<div hidden id="(S:\d+)">/g, '<div id="$1" data-pagefind-body>')
  }

  // Use the page's <title> (without the site name) as the result title
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(SITE_NAME_SUFFIX, '')
  if (title) {
    html = html.replace(/(<[^>]*data-pagefind-body[^>]*>)/, `$1<span data-pagefind-meta="title" data-pagefind-ignore>${title}</span>`)
  }

  const { errors, file: indexed } = await index.addHTMLFile({ url, content: html })
  if (errors.length) throw new Error(`Pagefind could not index ${url}: ${errors.join(', ')}`)
  if (indexed.uniqueWords < 10) console.warn(`Search index: ${url} has almost no searchable text (${indexed.uniqueWords} words)`)
  count++
}

if (count === 0) throw new Error(`No pages found to index in ${APP_DIR}`)

await rm(OUTPUT_DIR, { recursive: true, force: true })
const { errors: writeErrors } = await index.writeFiles({ outputPath: OUTPUT_DIR })
if (writeErrors.length) throw new Error(`Pagefind could not write the index: ${writeErrors.join(', ')}`)
await pagefind.close()

console.log(`Search index: ${count} pages indexed into ${OUTPUT_DIR}`)
