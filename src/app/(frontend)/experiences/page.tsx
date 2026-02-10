import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ExperiencesPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ExperiencesPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences',
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
