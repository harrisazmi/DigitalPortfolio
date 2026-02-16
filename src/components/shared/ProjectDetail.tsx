import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import AskMyGovClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const AskMyGovPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: askmygovInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'AskMyGov',
      },
    },
    limit: 1,
    depth: 3,
  })

  const askgovProjectDetail = askmygovInfo[0]

  return (
    <Suspense>
      <AskMyGovClientPage askgovProjectDetail={askgovProjectDetail} />
    </Suspense>
  )
}

export default AskMyGovPage
