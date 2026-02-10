import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import HomePageClient from './page-component'
import { normalizeHomeInfo } from '@/lib/homeInfoAdapter'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomePage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceInfoDataList } = await payload.find({
    collection: 'experiences',
    limit: 5,
    depth: 3,
  })

  const { docs: homeInfoDocs } = await payload.find({
    collection: 'home-info',
    limit: 1,
    depth: 2,
  })

  const homeInfoData = normalizeHomeInfo(homeInfoDocs.at(0) ?? null)

  return (
    <Suspense>
      <HomePageClient ExpInfoDataList={experienceInfoDataList} homeInfoData={homeInfoData} />
    </Suspense>
  )
}

export default HomePage
