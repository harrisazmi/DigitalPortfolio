import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProjectClientPage from './page-component'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'project-details',
    limit: 100,
  })

  return projects.docs.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const payload = await getPayload({ config })

  const { slug } = await params

  const { docs } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 3,
  })

  const projectDetail = docs[0]
  if (!projectDetail) {
    notFound()
  }

  return (
    <Suspense>
      <ProjectClientPage projectDetail={projectDetail}></ProjectClientPage>
    </Suspense>
  )
}
