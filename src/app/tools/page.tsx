import { JSX, Suspense } from 'react'
import type { Metadata } from 'next'
import { cmsFind } from '@/lib/cms'
import ToolsPageClient from './page-component'
import { groupToolsByCategory } from '@/lib/toolAdapter'
import type { Tool } from '@/types/payload-types'

export const metadata: Metadata = {
  title: 'My Tech Stack & Dev Tools | Frontend & DevOps | Harris Azmi',
  description:
    'Discover the technical stack Harris Azmi uses to build high-performance applications, including Next.js, React, TypeScript, AWS, Kubernetes, and Docker.',
  keywords: [
    'Frontend Tech Stack',
    'Frontend Tools',
    'Next.js Developer Tools',
    'Software Engineer Skills',
    'AWS DevOps Tools',
    'React Ecosystem',
    'Web Development Stack',
  ],
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/tools',
  },
}

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
