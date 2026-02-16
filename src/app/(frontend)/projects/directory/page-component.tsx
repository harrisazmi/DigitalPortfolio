'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface DirectoryProjectDetailProps {
  directoryProjectDetail: ProjectDetail
}

export default function DirectoryClientPage({
  directoryProjectDetail,
}: DirectoryProjectDetailProps) {
  return <ProjectDetails projectDetails={directoryProjectDetail} />
}
