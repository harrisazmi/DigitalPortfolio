import type { Tool } from '@/types/payload-types'
import { ToolCategories, type ToolCategory } from '@/types/tool'
import { getMediaUrl } from '@/lib/media'

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
  return getMediaUrl(icon)
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
