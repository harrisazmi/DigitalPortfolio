import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import NumazuScraperClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const NumazuScraperPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: numazuScraperInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'NumazuScraper',
      },
    },
    limit: 1,
    depth: 3,
  })

  const numazuScraperProjectDetail = numazuScraperInfo[0]

  return (
    <Suspense>
      <NumazuScraperClientPage numazuScraperProjectDetail={numazuScraperProjectDetail} />
    </Suspense>
  )
}

export default NumazuScraperPage
