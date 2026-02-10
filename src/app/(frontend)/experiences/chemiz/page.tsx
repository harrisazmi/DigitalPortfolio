import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ChemizPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ChemizPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences-list',
    limit: 3,
    depth: 0,
  })
  const experienceData = experienceDataList[0]

  const { docs: experiences } = await payload.find({
    collection: 'experiences',
    limit: 10,
    depth: 2,
  })

  const experiencesReversed = experiences.reverse()

  return (
    <Suspense>
      <ChemizPageClient experienceData={experienceData} experiences={experiencesReversed} />
    </Suspense>
  )
}

export default ChemizPage
