import { JSX, Suspense } from 'react'
import { cmsFind } from '@/lib/cms'
import ExperiencesPageClient from './page-component'
import type { Experience } from '@/types/payload-types'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ExperiencesPage: FSP = async () => {
  const { docs: experienceDataList } = await cmsFind<Experience>('experiences', {
    limit: 3,
    depth: 2,
  })

  // reverse mutate original array
  const experienceDataListReversed = experienceDataList.reverse()

  return (
    <Suspense>
      <ExperiencesPageClient experiences={experienceDataListReversed} />
    </Suspense>
  )
}

export default ExperiencesPage
