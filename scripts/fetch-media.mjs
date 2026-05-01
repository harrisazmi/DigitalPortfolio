/**
 * Pre-build script: downloads all CMS media files to public/cms-media/
 * so they can be served locally in production without runtime CMS requests.
 *
 * Run automatically via `prebuild` npm lifecycle hook.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// Load .env (and .env.local) since plain `node` doesn't do it automatically
for (const envFile of ['.env', '.env.local']) {
  const envPath = path.join(ROOT, envFile)
  if (!fs.existsSync(envPath)) continue
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const raw = trimmed.slice(eqIdx + 1).trim()
    // Strip surrounding quotes if present
    const value = /^(['"`])(.*)\1$/.test(raw) ? raw.slice(1, -1) : raw
    if (!(key in process.env)) process.env[key] = value
  }
}

const CMS_URL = process.env.CMS_URL
const CMS_API_KEY = process.env.CMS_API_KEY
const OUTPUT_DIR = path.join(ROOT, 'public', 'cms-media')

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

async function getAuthHeaders() {
  if (CMS_API_KEY) {
    return { Authorization: `users API-Key ${CMS_API_KEY}` }
  }

  const email = process.env.CMS_EMAIL
  const password = process.env.CMS_PASSWORD

  if (!email || !password) {
    throw new Error('Set CMS_API_KEY or CMS_EMAIL + CMS_PASSWORD to authenticate with the CMS.')
  }

  const res = await fetch(`${CMS_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) throw new Error(`CMS login failed: ${res.status}`)

  const data = await res.json()
  return { Authorization: `JWT ${data.token}` }
}

async function downloadFile(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download failed (${res.status}): ${url}`)
  const buffer = await res.arrayBuffer()
  fs.writeFileSync(dest, Buffer.from(buffer))
}

async function main() {
  console.log('Fetching CMS media list...')

  const headers = await getAuthHeaders()

  let page = 1
  let hasMore = true
  let downloaded = 0
  let skipped = 0

  while (hasMore) {
    const url = `${CMS_URL}/api/media?limit=100&page=${page}&depth=0`
    const res = await fetch(url, { headers })

    if (!res.ok) throw new Error(`Failed to list media (${res.status})`)

    const data = await res.json()

    for (const item of data.docs) {
      if (!item.url) continue

      const fileUrl = item.url.startsWith('/') ? `${CMS_URL}${item.url}` : item.url
      const filename = path.basename(item.url)
      const dest = path.join(OUTPUT_DIR, filename)

      if (fs.existsSync(dest)) {
        skipped++
        continue
      }

      process.stdout.write(`  Downloading ${filename}...`)
      await downloadFile(fileUrl, dest)
      process.stdout.write(' done\n')
      downloaded++
    }

    hasMore = data.hasNextPage ?? page < (data.totalPages ?? 1)
    page++
  }

  console.log(`\nMedia sync complete. Downloaded: ${downloaded}, Already cached: ${skipped}`)
}

main().catch((err) => {
  console.error('fetch-media failed:', err.message)
  process.exit(1)
})
