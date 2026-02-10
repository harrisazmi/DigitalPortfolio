'use client'
import Contact from '@/components/shared/Contact'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cardVariants } from '@/lib/motionVariants'

export default function ContactsPage() {
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
        <h1 className="text-4xl font-bold">Let’s Connect and Collaborate!</h1>
        <Contact />
      </motion.div>
    </div>
  )
}
