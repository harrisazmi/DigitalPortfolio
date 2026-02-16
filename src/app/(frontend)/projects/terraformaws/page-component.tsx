'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface TerraformAWSProjectDetailProps {
  terraformAWSProjectDetail: ProjectDetail
}

export default function TerraformAWSClientPage({
  terraformAWSProjectDetail,
}: TerraformAWSProjectDetailProps) {
  return <ProjectDetails projectDetails={terraformAWSProjectDetail} />
}
