import type { Tool } from '@/payload-types'
import { ToolCategories, type ToolCategory } from '@/data/ToolCategories'

export type ToolGridItem = {
  id: string
  name: string
  iconPath: string | null
}

export type ToolCategorySection = ToolCategory & {
  tools: ToolGridItem[]
}

const resolveUploadPath = (icon: Tool['icon']): string | null => {
  if (!icon) return null
  if (typeof icon === 'string') return icon

  return icon.url ?? (icon.filename ? `/media/${icon.filename}` : null)
}

export const groupToolsByCategory = (docs: Tool[] = []): ToolCategorySection[] => {
  if (!docs.length) return []

  return ToolCategories.map((category) => {
    const tools = docs
      .filter((tool) => tool.category === category.type)
      .map<ToolGridItem>((tool) => ({
        id: tool.id,
        name: tool.name,
        iconPath: resolveUploadPath(tool.icon),
      }))

    return {
      ...category,
      tools,
    }
  }).filter((section) => section.tools.length > 0)
}
