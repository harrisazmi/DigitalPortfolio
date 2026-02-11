import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ToolsPageClient from './page-component'
import { groupToolsByCategory } from '@/lib/toolAdapter'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ToolsPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: tools } = await payload.find({
    collection: 'tools',
    depth: 2,
    limit: 100,
    sort: 'name',
  })

  const categorizedTools = groupToolsByCategory(tools)

  return (
    <Suspense>
      <ToolsPageClient sections={categorizedTools} />
    </Suspense>
  )
}

export default ToolsPage
