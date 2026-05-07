import { cmsFind } from '@/lib/cms'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProjectClientPage from './page-component'
import type { ProjectDetail } from '@/types/payload-types'
import type { Metadata } from 'next'

export const revalidate = 3600
export const dynamicParams = false

// Per-project keyword map — boosts branded search for each project
const PROJECT_KEYWORDS: Record<string, string[]> = {
  myds: [
    'MYDS Malaysia Design System',
    'Malaysia Design System developer',
    'MYDS contributor Harris Azmi',
    'Malaysia government design system',
    'MYDS Frontend Developer',
    'MYDS Frontend Maintainer',
    'MYDS Next.js',
  ],
  mygov: [
    'MyGov Portal Malaysia',
    'MyGov Harris Azmi',
    'Malaysia government portal developer',
    'MyGov Next.js',
    'MyGov Portal Frontend Developer',
  ],
  rdmkd: [
    'RDMKD Malaysia',
    'RDMKD Harris Azmi',
    'RDMKD government portal',
    'RDMKD Frontend Developer',
  ],
  sekolahku: [
    'Sekolahku Frontend Developer Harris Azmi',
    'SekolahKu Malaysia',
    'SekolahKu Harris Azmi',
    'SekolahKu school portal developer',
  ],
  hansard: [
    'Hansard Parliament Malaysia',
    'Hansard Parliament Maintainer Harris Azmi',
    'Malaysia Parliament Hansard system',
    'Hansard Govtech Maintainer Harris Azmi',
    'Hansard Next.js',
  ],
  kdportal: [
    'KD Portal Malaysia',
    'KD Portal Maintainer Harris Azmi',
    'KD Portal GovTech Maintainer',
  ],
  askmygov: [
    'AskMyGov Malaysia',
    'AskMyGov Harris Azmi',
    'AskMyGov GovTech Frontend Developer',
    'AskMyGov Next.js',
  ],
}

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

  const title = `${project.title} | Harris Azmi Roswadi`
  const description = project.overview
    ? project.overview
    : `Explore the ${project.title} project built by Harris Azmi, a Mid-Senior Software Engineer / Frontend Engineer from Malaysia.`

  const keywords = [
    project.title,
    `${project.title} Harris Azmi`,
    `${project.title} developer`,
    ...(PROJECT_KEYWORDS[slug] ?? []),
    'Harris Azmi Roswadi',
    'Frontend Developer for GovTech Malaysia',
    'Software Engineer',
  ]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://portfoliocf.harrisviewcodes.uk/projects/${slug}`,
      type: 'article',
      images: [
        {
          url: 'https://portfoliocf.harrisviewcodes.uk/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://portfoliocf.harrisviewcodes.uk/og-image.png'],
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
