import Image from 'next/image'
import HorizontalCard from '@/components/shared/HorizontalCard'
import { HomeInfo, Media } from '@/payload-types'
import { getMediaUrl } from '@/lib/media'

type TestimonialsProps = {
  items: NonNullable<HomeInfo['sayAboutMe']>
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <HorizontalCard title="WHAT PEOPLE SAY ABOUT ME">
      {items.map((item) => {
        const avatardataImage = item.avatarImage as Media
        const imageSrc = getMediaUrl(avatardataImage)
        return (
          <div
            key={item.name.concat(item.company)}
            className="flex w-77.5 shrink-0 snap-start flex-col gap-2.5 rounded-lg border border-blue-110 bg-white p-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="size-8 shrink-0 overflow-hidden rounded-full">
                {imageSrc && (
                  <Image src={imageSrc} alt={item.name} width={32} height={32} quality={100} />
                )}
              </div>
              <div>
                <div className="font-medium" style={{ maxWidth: '20ch', wordWrap: 'break-word' }}>
                  {item.name}
                </div>
                <div className="text-xs text-gray-140">
                  {item.position}, {item.company}
                </div>
              </div>
            </div>
            <p className="text-xs font-light text-gray-140">{item.comments}</p>
          </div>
        )
      })}
    </HorizontalCard>
  )
}
