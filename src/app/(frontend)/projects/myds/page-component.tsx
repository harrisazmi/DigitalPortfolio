'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface MydsProjectDetailProps {
  mydsProjectDetail: ProjectDetail
}

export default function MydsClientPage({ mydsProjectDetail }: MydsProjectDetailProps) {
  return <ProjectDetails projectDetails={mydsProjectDetail} />
}
