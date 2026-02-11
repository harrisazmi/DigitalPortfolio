import { getPayload } from 'payload'
import type { JSX } from 'react'
import config from '@/payload.config'
import type { Project } from '@/payload-types'
import { partitionProjectsByCategory } from '@/lib/projectAdapter'
import ProjectsPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ProjectPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 50,
    depth: 2,
  })

  const { collaborativeProjects, personalProjects } = partitionProjectsByCategory(
    projects as Project[],
  )

  return (
    <ProjectsPageClient
      collaborativeProjects={collaborativeProjects}
      personalProjects={personalProjects}
    />
  )
}

export default ProjectPage
