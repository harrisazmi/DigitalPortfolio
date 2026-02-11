'use client'

import Image from 'next/image'
import { cardVariants } from '@/lib/motionVariants'
import type { ToolCategorySection } from '@/lib/toolAdapter'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type ToolsPageClientProps = {
  sections?: ToolCategorySection[]
}

export default function ToolsPageClient({ sections = [] }: ToolsPageClientProps) {
  if (sections.length === 0) {
    return (
      <div className="py-16 text-center text-gray-400">
        Published tools will appear here once available.
      </div>
    )
  }

  return (
    <div>
      {sections.map(({ type, label, tools }) => (
        <ToolsSection key={type} label={label} tools={tools} />
      ))}
    </div>
  )
}

interface ToolSectionProps {
  label: string
  tools: ToolCategorySection['tools']
}

function ToolsSection({ label, tools }: ToolSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold pb-8 text-center lg:text-left">{label}</h1>
        <div className="grid grid-cols-[300px] sm:grid-cols-[300px_300px] gap-4 pb-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-gray-110 rounded-lg flex items-center">
              <div className="p-4">
                {tool.iconPath ? (
                  <Image
                    src={tool.iconPath}
                    alt={tool.name}
                    width={60}
                    height={60}
                    quality={100}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-gray-200 text-lg font-semibold text-gray-600">
                    {tool.name.charAt(0)}
                  </div>
                )}
              </div>
              {tool.name}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
