import Image from 'next/image'
import HorizontalCard from '@/components/shared/HorizontalCard'
import type { GalleryItem } from '@/types/home'

type GalleryStripProps = {
  items: GalleryItem[]
}

export function GalleryStrip({ items }: GalleryStripProps) {
  if (!items.length) return null

  return (
    <HorizontalCard title="WORKING WITH  KEMENTERIAN DIGITAL AND MYDIGITAL CORP">
      {items.map((item) => (
        <div
          key={item.path}
          className="flex h-75 w-100 shrink-0 snap-start flex-col items-start gap-2.5 overflow-hidden rounded-lg border border-blue-110 bg-white"
        >
          <Image src={item.path} alt={item.name} width={400} height={300} quality={100} />
        </div>
      ))}
    </HorizontalCard>
  )
}
