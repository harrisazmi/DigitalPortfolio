import Image from 'next/image'
import Link from 'next/link'
import { getMediaUrl } from '@/lib/media'
import type { Experience, Media } from '@/types/payload-types'
import { clx } from '@/lib/utils'
import { ArrowRightShortIcon } from '@/Icons/ArrowRightShortIcon'

type ExperienceListProps = {
  experiences: Experience[]
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="flex w-full flex-col gap-2 py-8 ">
      {experiences.map((experience) => {
        const companyImage = experience.companyImage as Media
        const imageSrc = getMediaUrl(companyImage)

        return (
          <Link
            key={experience.id}
            href={experience.ctaHref}
            className="flex w-full items-center rounded-2xl transition-colors hover:bg-blue-20"
          >
            <div
              className={clx(
                'rounded-lg border border-blue-110 bg-white p-3 flex justify-between items-center shrink-0 w-full',
                'hover:bg-orange-101 hover:border-orange-140',
                'max-sm:justify-center',
              )}
            >
              <div className="flex items-center gap-2.5 justify-start">
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
              </div>
              <div className="max-sm:hidden">
                <ArrowRightShortIcon className="size-4"></ArrowRightShortIcon>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
