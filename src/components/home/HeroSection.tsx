'use client'

import { ExperienceRichTextField } from '@/types/experience'
import { RichTextContent } from '../shared/RichTextContent'

type HeroSectionProps = {
  title: ExperienceRichTextField
  description: ExperienceRichTextField
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <>
      <h1 className="text-4xl font-extrabold">
        <RichTextContent field={title} className="" />
      </h1>
      <RichTextContent
        field={description}
        className="pt-3 space-y-3 leading-relaxed text-gray-140"
      />
    </>
  )
}
