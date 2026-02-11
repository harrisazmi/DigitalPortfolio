'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, type RefObject } from 'react'
import { clx } from '@/lib/utils'
import { cardVariants } from '@/lib/motionVariants'
import type { ProjectGridItem } from '@/lib/projectAdapter'

type ProjectSectionProps = {
  title: string
  projects: ProjectGridItem[]
  sectionRef: RefObject<HTMLDivElement | null>
  isInView: boolean
}

export type ProjectsPageClientProps = {
  collaborativeProjects: ProjectGridItem[]
  personalProjects: ProjectGridItem[]
}

function ProjectSection({ title, projects, sectionRef, isInView }: ProjectSectionProps) {
  return (
    <section className="w-full" ref={sectionRef}>
      <h2 className="text-4xl font-bold py-8 text-center pt-0 lg:text-left">{title}</h2>

      <div
        className={clx(
          'grid grid-cols-1 gap-6 items-center justify-items-center',
          ' sm:grid-cols-2 lg:grid-cols-2 pb-8',
        )}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Link href={`/projects/${project.path}`}>
              <div className="h-72.5 w-70 bg-gray-110 rounded-3xl overflow-clip cursor-pointer border border-gray-110">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={310}
                  height={230}
                  quality={100}
                />
                <div className="flex flex-col w-full items-start justify-start text-start p-4 pl-6">
                  <h3 className="font-bold text-2xl">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function ProjectsPageClient({
  collaborativeProjects,
  personalProjects,
}: ProjectsPageClientProps) {
  const collabRef = useRef<HTMLDivElement | null>(null)
  const personalRef = useRef<HTMLDivElement | null>(null)

  const isCollabInView = useInView(collabRef, { once: true })
  const isPersonalInView = useInView(personalRef, { once: true })
  return (
    <main className={clx('flex flex-col items-center justify-center w-full h-full px-4', '')}>
      <ProjectSection
        title="Collaborative Projects"
        projects={collaborativeProjects}
        sectionRef={collabRef}
        isInView={isCollabInView}
      />

      <ProjectSection
        title="Personal Projects"
        projects={personalProjects}
        sectionRef={personalRef}
        isInView={isPersonalInView}
      />
    </main>
  )
}
