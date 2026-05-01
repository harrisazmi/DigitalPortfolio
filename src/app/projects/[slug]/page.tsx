import { cmsFind } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProjectClientPage from './page-component'
import type { ProjectDetail } from '@/types/payload-types'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  const { docs } = await cmsFind<{ slug: string }>('project-details', { limit: 100 })
  return docs.map((doc) => ({ slug: doc.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { docs } = await cmsFind<ProjectDetail>('project-details', {
    where: { slug: { equals: slug } },
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
