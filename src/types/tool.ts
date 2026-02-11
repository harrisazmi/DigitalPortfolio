export type ToolItem = {
  name: string
  path: string
  type: string
}

export type ToolCategory = {
  type: string
  label: string
}

export const ToolCategories: ToolCategory[] = [
  { type: 'languages', label: 'Languages' },
  { type: 'fullstack', label: 'FullStack' },
  { type: 'frontend', label: 'Frontend' },
  { type: 'backend', label: 'Backend' },
  { type: 'database', label: 'Database' },
  { type: 'devops', label: 'Dev Ops' },
  { type: 'management', label: 'Management' },
  { type: 'others', label: 'Others' },
]
