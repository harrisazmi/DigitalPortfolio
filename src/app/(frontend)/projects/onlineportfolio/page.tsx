import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import OnlinePortfolioClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const OnlinePortfolioPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: onlinePortfolioInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'OnlinePortfolio',
      },
    },
    limit: 1,
    depth: 3,
  })

  const onlinePortfolioProjectDetail = onlinePortfolioInfo[0]

  return (
    <Suspense>
      <OnlinePortfolioClientPage onlinePortfolioProjectDetail={onlinePortfolioProjectDetail} />
    </Suspense>
  )
}

export default OnlinePortfolioPage
