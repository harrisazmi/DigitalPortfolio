import type { Media } from '@/types/payload-types'

const resolveUrl = (url: string | null | undefined): string | null => {
  if (!url) return null

  const filename = url.split('/').pop()
  if (!filename) return null

  // Always serve from locally-downloaded files (public/cms-media/)
  // fetch-media.mjs downloads all CMS media before both dev and build
  return `/cms-media/${filename}`
}

const getMediaUrl = (media?: Media | string | null): string | null => {
  if (typeof media === 'string') {
    return resolveUrl(media)
  }

  return resolveUrl(media?.url)
}

export { getMediaUrl }
