'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface AskMyGovProjectDetailProps {
  askgovProjectDetail: ProjectDetail
}

export default function AskMyGovClientPage({ askgovProjectDetail }: AskMyGovProjectDetailProps) {
  return <ProjectDetails projectDetails={askgovProjectDetail} />
}
