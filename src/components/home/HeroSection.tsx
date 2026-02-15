'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cardVariants } from '@/lib/motionVariants'

type HeroSectionProps = {
  title: string
  description: string
}

export default function HeroSection({ title, description }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-full border-b border-blue-110 pb-8"
    >
      <h1 className="text-4xl font-extrabold">
        {title.split('\n').map((line, id) => (
          <span key={line.concat(String(id))}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <p className="pt-3 text-gray-140">{description}</p>
    </motion.div>
  )
}
