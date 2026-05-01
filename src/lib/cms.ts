import { getCmsAuthHeaders } from './cmsAuth'

const CMS_URL = process.env.CMS_URL

interface WhereClause {
  [field: string]: { equals?: string | number }
}

interface FindOptions {
  limit?: number
  depth?: number
  sort?: string
  where?: WhereClause
}

export async function cmsFind<T>(
  collection: string,
  options: FindOptions = {},
): Promise<{ docs: T[] }> {
  const params = new URLSearchParams()

  if (options.limit !== undefined) params.set('limit', String(options.limit))
  if (options.depth !== undefined) params.set('depth', String(options.depth))
  if (options.sort !== undefined) params.set('sort', options.sort)

  if (options.where) {
    for (const [field, condition] of Object.entries(options.where)) {
      if (condition.equals !== undefined) {
        params.set(`where[${field}][equals]`, String(condition.equals))
      }
    }
  }

  const url = `${CMS_URL}/api/${collection}?${params.toString()}`

  const headers = await getCmsAuthHeaders()

  const res = await fetch(url, { headers, next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error(`CMS fetch failed: ${res.status} for collection '${collection}'`)
  }

  return res.json() as Promise<{ docs: T[] }>
}
