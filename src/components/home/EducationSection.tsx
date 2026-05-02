import Image from 'next/image'
import type { HomeInfo, Media } from '@/types/payload-types'
import { getMediaUrl } from '@/lib/media'

type EducationSectionProps = {
  items: NonNullable<HomeInfo['education']>
}

export default function EducationSection({ items }: EducationSectionProps) {
  return (
    <div className="flex w-full flex-col gap-6 py-8">
      {items.map((edu) => {
        const eduImage = edu.logo as Media
        const imageSrc = getMediaUrl(eduImage)
        return (
          <div key={edu.id} className="flex items-start justify-between gap-6">
            <div>
              <div className="text-xl font-medium">{edu.title}</div>
              <div className="text-sm font-light text-gray-140">{edu.major}</div>
              <div className="text-sm font-light text-gray-140">{edu.year}</div>
            </div>
            <div className="shrink-0">
              {imageSrc && (
                <Image src={imageSrc} alt={edu.name} width={120} height={60} quality={100} />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
