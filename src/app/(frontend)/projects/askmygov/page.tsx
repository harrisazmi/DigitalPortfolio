import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const AskMyGovPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: askgovmyInfo } = await payload.find({
    collection: 'projects',
    where: {
      path: {
        equals: 'askmygov',
      },
    },
    limit: 1,
    depth: 3,
  })

  return (
    <Suspense>
      <div>hehe</div>
      {/* <HomePageClient ExpInfoDataList={experienceInfoDataList} homeInfoData={homeInfoData} /> */}
    </Suspense>
  )
}

export default AskMyGovPage
