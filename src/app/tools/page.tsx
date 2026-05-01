import { JSX, Suspense } from 'react'
import { cmsFind } from '@/lib/cms'
import ToolsPageClient from './page-component'
import { groupToolsByCategory } from '@/lib/toolAdapter'
import type { Tool } from '@/types/payload-types'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ToolsPage: FSP = async () => {
  const { docs: tools } = await cmsFind<Tool>('tools', { depth: 2, limit: 100, sort: 'name' })

  const categorizedTools = groupToolsByCategory(tools)

  return (
    <Suspense>
      <ToolsPageClient sections={categorizedTools} />
    </Suspense>
  )
}

export default ToolsPage
