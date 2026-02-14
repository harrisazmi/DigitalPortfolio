import type { Media } from '@/payload-types'

const getMediaUrl = (media?: Media | string | null): string | null => {
  if (typeof media === 'string') {
    return media
  }

  return media?.url ?? null
}

export { getMediaUrl }
