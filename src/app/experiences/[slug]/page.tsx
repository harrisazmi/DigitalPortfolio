import { cmsFind } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ExperiencePageClient from './page-component'
import type { ExperiencesList, Experience } from '@/types/payload-types'
import type { Metadata } from 'next'

export const revalidate = 3600
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { docs } = await cmsFind<ExperiencesList>('experiences-list', {
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const experience = docs[0]
  if (!experience) return {}

  const title = `${experience.position} at ${experience.name} | Harris Azmi`
  const description = `${experience.position} at ${experience.name} (${experience.yearRange}). Explore Harris Azmi's experience and responsibilities in this role.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://portfoliocf.harrisviewcodes.uk/experiences/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://portfoliocf.harrisviewcodes.uk/experiences/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const { docs } = await cmsFind<{ slug: string }>('experiences-list', { limit: 100 })
  return docs.map((doc) => ({ slug: doc.slug }))
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { docs: experienceDataList } = await cmsFind<ExperiencesList>('experiences-list', {
    where: { slug: { equals: slug } },
    limit: 10,
    depth: 3,
  })

  const experienceData = experienceDataList[0]

  const { docs: experiences } = await cmsFind<Experience>('experiences', { limit: 10, depth: 2 })

  const experiencesReversed = experiences.reverse()

  if (!experienceData) {
    notFound()
  }

  return (
    <Suspense>
      <ExperiencePageClient experienceData={experienceData} experiences={experiencesReversed} />
    </Suspense>
  )
}
