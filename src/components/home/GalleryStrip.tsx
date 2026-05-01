import Image from 'next/image'
import HorizontalCard from '@/components/shared/HorizontalCard'
import { getMediaUrl } from '@/lib/media'
import type { HomeInfo, Media } from '@/types/payload-types'

type GalleryStripProps = {
  items: NonNullable<HomeInfo['gallery']>
}

export default function GalleryStrip({ items }: GalleryStripProps) {
  return (
    <HorizontalCard title="WORKING WITH  KEMENTERIAN DIGITAL AND MYDIGITAL CORP">
      {items.map((item) => {
        const imageSource = item.image as Media
        const imageSrc = getMediaUrl(imageSource)

        return (
          <div
            key={item.name}
            className="flex h-75 w-100 shrink-0 snap-start flex-col items-start gap-2.5 overflow-hidden rounded-lg border border-blue-110 bg-white"
          >
            {imageSrc && (
              <Image src={imageSrc} alt={item.name} width={400} height={300} quality={100} />
            )}
          </div>
        )
      })}
    </HorizontalCard>
  )
}
