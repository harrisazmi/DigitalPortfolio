import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import HomeserverClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomeserverPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: homeserverInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'Homeserver',
      },
    },
    limit: 1,
    depth: 3,
  })

  const homeserverProjectDetail = homeserverInfo[0]

  return (
    <Suspense>
      <HomeserverClientPage homeserverProjectDetail={homeserverProjectDetail} />
    </Suspense>
  )
}

export default HomeserverPage
