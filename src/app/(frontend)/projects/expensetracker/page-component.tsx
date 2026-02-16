'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface ExpenseProjectDetailProps {
  expenseProjectDetail: ProjectDetail
}

export default function ExpenseClientPage({ expenseProjectDetail }: ExpenseProjectDetailProps) {
  return <ProjectDetails projectDetails={expenseProjectDetail} />
}
