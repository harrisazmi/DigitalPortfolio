import Image from 'next/image'
import Link from 'next/link'
import { getMediaUrl } from '@/lib/media'
import type { Experience, Media } from '@/payload-types'

type ExperienceListProps = {
  experiences: Experience[]
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="flex w-full flex-col gap-8 py-8 ">
      {experiences.map((experience) => {
        const companyImage = experience.companyImage as Media
        const imageSrc = getMediaUrl(companyImage)

        return (
          <Link
            key={experience.id}
            href={experience.ctaHref}
            className="flex w-full items-center rounded-2xl transition-colors hover:bg-blue-20"
          >
            <div className="pr-4">
              <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-110 bg-white">
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={companyImage.alt}
                    width={64}
                    height={64}
                    quality={100}
                  />
                )}
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold">{experience.name}</div>
              <div className="text-sm font-light text-gray-140">{experience.position}</div>
              <div className="text-sm font-light text-gray-140">{experience.yearRange}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
