import { JSX, Suspense } from 'react'
import type { Metadata } from 'next'
import { cmsFind } from '@/lib/cms'
import ExperiencesPageClient from './page-component'
import type { Experience } from '@/types/payload-types'

export const metadata: Metadata = {
  title: 'GovTech Malaysia Engineer · Experience & Resume | Harris Azmi Roswadi',
  description:
    "Harris Azmi Roswadi is a Frontend Engineer at GovTech Malaysia's Nucleus Unit, building national digital platforms. Previously Production Manager — a unique cross-industry journey.",
  keywords: [
    'Harris Azmi Resume',
    'GovTech Malaysia Engineer',
    'GovTech Malaysia Frontend Developer',
    'GovTech Nucleus Unit Malaysia',
    'Mid-Senior Frontend Engineer Experience',
    'Mid-Senior Software Engineer Experience',
    'Frontend Lead Experience',
    'Full-Stack Developer Career',
    'Tech Career Transition',
  ],
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/experiences',
  },
}

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ExperiencesPage: FSP = async () => {
  const { docs: experienceDataList } = await cmsFind<Experience>('experiences', {
    limit: 3,
    depth: 2,
  })

  // reverse mutate original array
  const experienceDataListReversed = experienceDataList.reverse()

  return (
    <Suspense>
      <ExperiencesPageClient experiences={experienceDataListReversed} />
    </Suspense>
  )
}

export default ExperiencesPage
