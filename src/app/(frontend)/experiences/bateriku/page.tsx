import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import BaterikuPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ChemizPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences-list',
    limit: 3,
    depth: 0,
  })
  const experienceData = experienceDataList[1]

  return (
    <Suspense>
      <BaterikuPageClient experienceData={experienceData} />
    </Suspense>
  )
}

export default ChemizPage
