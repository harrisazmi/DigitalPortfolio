import Image from 'next/image'
import Link from 'next/link'
import type { Experience } from '@/payload-types'

type ExperienceListProps = {
  experiences: Experience[]
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (!experiences.length) {
    return <p className="text-sm text-gray-140">No experiences found.</p>
  }

  return (
    <div className="flex w-full flex-col gap-8 py-8 ">
      {experiences.map((experience) => {
        const companyImage = experience.companyImage
        const imageSrc = typeof companyImage === 'string' ? companyImage : companyImage?.url
        const imageAlt =
          typeof companyImage === 'string' ? experience.name : companyImage?.alt || experience.name

        return (
          <Link
            key={experience.id}
            href={experience.ctaHref}
            className="flex w-full items-center rounded-2xl transition-colors hover:bg-blue-20"
          >
            <div className="pr-4">
              <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-110 bg-white">
                {imageSrc ? (
                  <Image src={imageSrc} alt={imageAlt} width={64} height={64} quality={100} />
                ) : (
                  <span className="text-xs font-semibold text-gray-140">{experience.name}</span>
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
