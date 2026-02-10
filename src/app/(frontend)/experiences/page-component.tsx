'use client'

import type { Experience } from '@/payload-types'
import PreviousExperience from '@/components/shared/PreviousExperience'

type ExperiencesPageClientProps = {
  experiences?: Experience[]
}

export default function ExperiencesPageClient({ experiences = [] }: ExperiencesPageClientProps) {
  return (
    <div className="pb-8">
      <h1 className="text-4xl font-bold">Experiences</h1>
      <PreviousExperience sub={false} experiences={experiences} />
    </div>
  )
}
