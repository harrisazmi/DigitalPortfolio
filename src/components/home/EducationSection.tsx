import Image from 'next/image'
import type { EducationItem } from '@/types/home'

type EducationSectionProps = {
  items: EducationItem[]
}

export function EducationSection({ items }: EducationSectionProps) {
  if (!items.length) return null

  return (
    <div className="flex w-full flex-col gap-6 py-8">
      {items.map((edu) => (
        <div key={edu.title.concat(edu.year)} className="flex items-start justify-between gap-6">
          <div>
            <div className="text-xl font-medium">{edu.title}</div>
            <div className="text-sm font-light text-gray-140">{edu.major}</div>
            <div className="text-sm font-light text-gray-140">{edu.year}</div>
          </div>
          <div className="shrink-0">
            <Image src={edu.path} alt={edu.name} width={120} height={60} quality={100} />
          </div>
        </div>
      ))}
    </div>
  )
}
