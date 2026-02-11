import type { Project } from '@/payload-types'

export type ProjectGridItem = {
  id: string
  path: string
  image: string
  title: string
  description: string
  shortDescription?: string | null
  gitHubUrl?: string | null
  previewUrl?: string | null
}

export type PartitionedProjects = {
  collaborativeProjects: ProjectGridItem[]
  personalProjects: ProjectGridItem[]
}

const resolveUploadPath = (image: Project['image']): string | null => {
  if (!image || typeof image === 'string') return null

  return image.url ?? (image.filename ? `/media/${image.filename}` : null)
}

export const toProjectGridItem = (project: Project): ProjectGridItem | null => {
  const imagePath = resolveUploadPath(project.image)
  if (!imagePath) return null

  return {
    id: project.id,
    title: project.title,
    path: project.path,
    description: project.description,
    shortDescription: project.shortDescription ?? null,
    image: imagePath,
    gitHubUrl: project.gitHubUrl ?? null,
    previewUrl: project.previewUrl ?? null,
  }
}

export const partitionProjectsByCategory = (projects: Project[]): PartitionedProjects => {
  const result: PartitionedProjects = {
    collaborativeProjects: [],
    personalProjects: [],
  }

  projects.forEach((project) => {
    const item = toProjectGridItem(project)
    if (!item) return

    if (project.category === 'collaboration') {
      result.collaborativeProjects.push(item)
      return
    }

    result.personalProjects.push(item)
  })

  return result
}
