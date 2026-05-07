import type { JSX } from 'react'
import type { Metadata } from 'next'
import { cmsFind } from '@/lib/cms'
import ProjectsPageClient from './page-component'
import type { Project } from '@/types/payload-types'

export const metadata: Metadata = {
  title: 'Software Engineering Projects & Case Studies | Harris Azmi Roswadi',
  description:
    'Explore enterprise-level software engineering projects by Harris Azmi — including MYDS, AskMyGov, Hansard Parliament, KD Portal, SekolahKu, RDMKD, and MyGov Portal.',
  keywords: [
    'MYDS Malaysia Design System',
    'AskMyGov Harris Azmi',
    'Hansard Parliament Malaysia',
    'KD Portal',
    'SekolahKu',
    'RDMKD',
    'Repositori Digital dan Maklumat Kementerian Digital',
    'MyGov Portal Malaysia',
    'GovTech Malaysia Projects',
    'Harris Azmi Projects',
    'Software Engineering Portfolio',
    'Frontend Development Projects',
    'Next.js Case Studies',
    'Enterprise React Architecture',
    'Tech Portfolio',
  ],
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/projects',
  },
}

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ProjectPage: FSP = async () => {
  const { docs: collaborativeProjectsDocs } = await cmsFind<Project>('projects', {
    limit: 50,
    depth: 2,
    sort: 'order',
    where: { category: { equals: 'collaboration' } },
  })

  const { docs: personalProjectsDocs } = await cmsFind<Project>('projects', {
    limit: 50,
    depth: 2,
    sort: 'order',
    where: { category: { equals: 'personal' } },
  })

  const collaborativeProjects = collaborativeProjectsDocs
  const personalProjects = personalProjectsDocs

  return (
    <ProjectsPageClient
      collaborativeProjects={collaborativeProjects}
      personalProjects={personalProjects}
    />
  )
}

export default ProjectPage
