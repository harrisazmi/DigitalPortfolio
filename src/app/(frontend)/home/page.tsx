import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import HomePageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomePage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceInfoDataList } = await payload.find({
    collection: 'experiences',
    limit: 5,
    depth: 3,
  })

  return (
    <Suspense>
      <HomePageClient ExpInfoDataList={experienceInfoDataList} />
    </Suspense>
  )
}

export default HomePage
