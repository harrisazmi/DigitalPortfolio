import { getPayload } from 'payload'
import type { JSX } from 'react'
import config from '@/payload.config'
import ProjectsPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ProjectPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: collaborativeProjectsDocs } = await payload.find({
    collection: 'projects',
    limit: 50,
    depth: 2,
    where: {
      category: {
        equals: 'collaboration',
      },
    },
  })

  const { docs: personalProjectsDocs } = await payload.find({
    collection: 'projects',
    limit: 50,
    depth: 2,
    where: {
      category: {
        equals: 'personal',
      },
    },
  })

  const collaborativeProjects = collaborativeProjectsDocs.reverse()
  const personalProjects = personalProjectsDocs.reverse()

  return (
    <ProjectsPageClient
      collaborativeProjects={collaborativeProjects}
      personalProjects={personalProjects}
    />
  )
}

export default ProjectPage
