'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface ProjectDetailProps {
  projectDetail: ProjectDetail
}

export default function ProjectClientPage({ projectDetail }: ProjectDetailProps) {
  return <ProjectDetails projectDetails={projectDetail} />
}
