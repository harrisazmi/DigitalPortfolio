'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface HomeserverProjectDetailProps {
  homeserverProjectDetail: ProjectDetail
}

export default function HomeserverClientPage({
  homeserverProjectDetail,
}: HomeserverProjectDetailProps) {
  return <ProjectDetails projectDetails={homeserverProjectDetail} />
}
