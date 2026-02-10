import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import GovtechPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const GovTechPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences-list',
    limit: 3,
    depth: 0,
  })
  const experienceData = experienceDataList[2]

  const { docs: experiences } = await payload.find({
    collection: 'experiences',
    limit: 10,
    depth: 2,
  })

  const experiencesReversed = experiences.reverse()

  return (
    <Suspense>
      <GovtechPageClient experienceData={experienceData} experiences={experiencesReversed} />
    </Suspense>
  )
}

export default GovTechPage
