import { getPayload } from 'payload'
import { JSX, ReactNode, Suspense } from 'react'
import config from '@/payload.config'
import GovtechPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const GovTechPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences-list',
    limit: 1,
    depth: 0,
  })
  const experienceData = experienceDataList[0]
  console.log(JSON.stringify(experienceData))

  return (
    <Suspense>
      <GovtechPageClient experienceData={experienceData} />
    </Suspense>
  )
}

export default GovTechPage
