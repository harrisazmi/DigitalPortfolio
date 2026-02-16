import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import DirectoryClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const DirectoryPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: directoryInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'Directory',
      },
    },
    limit: 1,
    depth: 3,
  })

  const directoryProjectDetail = directoryInfo[0]

  return (
    <Suspense>
      <DirectoryClientPage directoryProjectDetail={directoryProjectDetail} />
    </Suspense>
  )
}

export default DirectoryPage
