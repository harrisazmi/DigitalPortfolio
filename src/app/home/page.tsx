import { JSX, Suspense } from 'react'
import { cmsFind } from '@/lib/cms'
import HomePageClient from './page-component'
import type { Experience, HomeInfo, Project, ContactInfo } from '@/types/payload-types'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomePage: FSP = async () => {
  const { docs: experienceInfoDocs } = await cmsFind<Experience>('experiences', {
    limit: 5,
    depth: 3,
  })
  const { docs: homeInfoDocs } = await cmsFind<HomeInfo>('home-info', { limit: 1, depth: 2 })
  const { docs: collaborativeProjectInfoDocs } = await cmsFind<Project>('projects', {
    limit: 3,
    depth: 2,
    where: { category: { equals: 'collaboration' } },
  })
  const { docs: contactInfoDocs } = await cmsFind<ContactInfo>('contact-info', {
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
