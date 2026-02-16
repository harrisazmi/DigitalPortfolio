'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface OnlinePortfolioProjectDetailProps {
  onlinePortfolioProjectDetail: ProjectDetail
}

export default function OnlinePortfolioClientPage({
  onlinePortfolioProjectDetail,
}: OnlinePortfolioProjectDetailProps) {
  return <ProjectDetails projectDetails={onlinePortfolioProjectDetail} />
}
