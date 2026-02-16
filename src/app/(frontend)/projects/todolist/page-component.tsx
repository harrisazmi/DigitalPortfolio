'use client'

import ProjectDetails from '@/components/shared/ProjectDetails'
import type { ProjectDetail } from '@/payload-types'

interface ToDoListProjectDetailProps {
  toDoListProjectDetail: ProjectDetail
}

export default function ToDoListClientPage({ toDoListProjectDetail }: ToDoListProjectDetailProps) {
  return <ProjectDetails projectDetails={toDoListProjectDetail} />
}
