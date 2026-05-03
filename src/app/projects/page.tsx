import type { JSX } from 'react'
import { cmsFind } from '@/lib/cms'
import ProjectsPageClient from './page-component'
import type { Project } from '@/types/payload-types'

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
