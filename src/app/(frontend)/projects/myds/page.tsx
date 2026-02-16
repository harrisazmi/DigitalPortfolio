import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import MydsClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const MydsPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: mydsInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'MYDS',
      },
    },
    limit: 1,
    depth: 3,
  })

  const mydsProjectDetail = mydsInfo[0]

  return (
    <Suspense>
      <MydsClientPage mydsProjectDetail={mydsProjectDetail} />
    </Suspense>
  )
}

export default MydsPage
