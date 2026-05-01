import type { Media } from '@/types/payload-types'

const CMS_URL = process.env.CMS_URL

const resolveUrl = (url: string | null | undefined): string | null => {
  if (!url) return null

  const filename = url.split('/').pop()
  if (!filename) return null

  // In production, serve from locally-downloaded files (public/cms-media/)
  if (process.env.NODE_ENV === 'production') {
    return `/cms-media/${filename}`
  }

  // In dev, proxy directly from CMS
  if (url.startsWith('/')) return `${CMS_URL}${url}`
  return url
}

const getMediaUrl = (media?: Media | string | null): string | null => {
  if (typeof media === 'string') {
    return resolveUrl(media)
  }

  return resolveUrl(media?.url)
}

export { getMediaUrl }
