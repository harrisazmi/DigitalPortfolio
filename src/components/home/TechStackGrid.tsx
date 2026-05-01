import Image from 'next/image'
import type { HomeInfo, Media } from '@/types/payload-types'
import { getMediaUrl } from '@/lib/media'

type TechStackGridProps = {
  items: NonNullable<HomeInfo['techStack']>
}

export default function TechStackGrid({ items = [] }: TechStackGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 xl:grid-cols-3">
      {items.map((stack) => {
        const stackLogo = stack.logo as Media
        const imageSrc = getMediaUrl(stackLogo)
        return (
          <div
            key={stack.name}
            className="flex items-center justify-between rounded-lg border border-blue-110 py-2 pl-2"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl">
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={stack.name}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="h-12 w-12 rounded-lg object-contain"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-base text-black">{stack.name}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
