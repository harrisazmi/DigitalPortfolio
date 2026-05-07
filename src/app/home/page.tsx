import { JSX, Suspense } from 'react'
import type { Metadata } from 'next'
import { cmsFind } from '@/lib/cms'
import HomePageClient from './page-component'
import type { Experience, HomeInfo, Project, ContactInfo } from '@/types/payload-types'

export const metadata: Metadata = {
  title: 'Harris Azmi Roswadi | GovTech Malaysia · Mid-Senior Frontend Engineer',
  description:
    'Portfolio of Harris Azmi Roswadi — Mid-Senior Frontend Engineer at GovTech Malaysia (Nucleus Unit). Specialist in React, Next.js, and enterprise-grade government web platforms.',
  keywords: [
    'Harris Azmi Roswadi',
    'GovTech Malaysia',
    'GovTech Malaysia Developer',
    'GovTech Nucleus Unit',
    'Mid-Senior Frontend Engineer Malaysia',
    'Mid-Senior Software Engineer Malaysia',
    'Frontend Lead Malaysia',
    'Full-Stack Developer',
    'Software Engineer',
    'Next.js Developer',
    'React Expert',
    'Government Web Developer Malaysia',
  ],
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/home',
  },
}

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
    sort: 'order',
    where: { category: { equals: 'collaboration' } },
  })
  const { docs: contactInfoDocs } = await cmsFind<ContactInfo>('contact-info', {
    limit: 1,
    depth: 2,
  })

  const experienceInfo = experienceInfoDocs.reverse()
  const homeInfo = homeInfoDocs[0]
  const collaborativeProjectsInfo = collaborativeProjectInfoDocs
  const contactInfo = contactInfoDocs[0]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Harris Azmi Roswadi',
            jobTitle: 'Mid-Senior Frontend Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'GovTech Malaysia',
              url: 'https://govtech.gov.my',
            },
            url: 'https://portfoliocf.harrisviewcodes.uk/home',
            sameAs: [
              'https://www.linkedin.com/in/harris-azmi-roswadi/',
              'https://github.com/harrisazmi',
            ],
            knowsAbout: [
              'React',
              'Next.js',
              'TypeScript',
              'Frontend Engineering',
              'Government Web Platforms',
            ],
          }),
        }}
      />
      <Suspense>
        <HomePageClient
          experienceInfo={experienceInfo}
          homeInfo={homeInfo}
          collaborativeProjectsInfo={collaborativeProjectsInfo}
          contactInfo={contactInfo}
        />
      </Suspense>
    </>
  )
}

export default HomePage
