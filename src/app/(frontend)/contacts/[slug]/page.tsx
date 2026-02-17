import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ExperiencePageClient from './page-component'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'experiences-list',
    limit: 100,
  })

  return projects.docs.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const payload = await getPayload({ config })

  const { slug } = await params

  const { docs: experienceDataList } = await payload.find({
    collection: 'experiences-list',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 10,
    depth: 3,
  })

  const experienceData = experienceDataList[0]

  const { docs: experiences } = await payload.find({
    collection: 'experiences',
    limit: 10,
    depth: 2,
  })

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
