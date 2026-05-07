import { cmsFind } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProjectClientPage from './page-component'
import type { ProjectDetail } from '@/types/payload-types'
import type { Metadata } from 'next'

export const revalidate = 3600
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { docs } = await cmsFind<ProjectDetail>('project-details', {
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const project = docs[0]
  if (!project) return {}

  const title = `${project.title} | Harris Azmi`
  const description = project.overview
    ? project.overview.slice(0, 155)
    : `Explore the ${project.title} project built by Harris Azmi.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://portfoliocf.harrisviewcodes.uk/projects/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://portfoliocf.harrisviewcodes.uk/projects/${slug}`,
    },
  }
}

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
