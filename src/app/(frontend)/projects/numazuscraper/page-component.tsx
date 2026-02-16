'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface NumazuScraperProjectDetailProps {
  numazuScraperProjectDetail: ProjectDetail
}

export default function NumazuScraperClientPage({
  numazuScraperProjectDetail,
}: NumazuScraperProjectDetailProps) {
  return <ProjectDetails projectDetails={numazuScraperProjectDetail} />
}
