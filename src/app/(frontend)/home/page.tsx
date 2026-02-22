import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import HomePageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomePage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceInfoDocs } = await payload.find({
    collection: 'experiences',
    limit: 5,
    depth: 3,
  })

  const { docs: homeInfoDocs } = await payload.find({
    collection: 'home-info',
    limit: 1,
    depth: 2,
  })

  const { docs: collaborativeProjectInfoDocs } = await payload.find({
    collection: 'projects',
    limit: 3,
    depth: 2,
    where: {
      category: {
        equals: 'collaboration',
      },
    },
  })

  const { docs: contactInfoDocs } = await payload.find({
    collection: 'contact-info',
    limit: 1,
    depth: 2,
  })

  const experienceInfo = experienceInfoDocs.reverse()
  const homeInfo = homeInfoDocs[0]
  const collaborativeProjectsInfo = collaborativeProjectInfoDocs.reverse()
  const contactInfo = contactInfoDocs[0]

  return (
    <Suspense>
      <HomePageClient
        experienceInfo={experienceInfo}
        homeInfo={homeInfo}
        collaborativeProjectsInfo={collaborativeProjectsInfo}
        contactInfo={contactInfo}
      />
    </Suspense>
  )
}

export default HomePage
