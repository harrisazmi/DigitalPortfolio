'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RichTextContent } from '@/components/shared/RichTextContent'
import { Button } from '@/components/shared/Button'
import ProjectLinks from '@/components/shared/ProjectLinks'
import TechStack from '@/components/shared/TechStack'
import { ArrowLeftIcon } from '@/Icons'
import { cardVariants } from '@/lib/motionVariants'
import { getMediaUrl } from '@/lib/media'
import { clx } from '@/lib/utils'
import type { ProjectDetail } from '@/types/payload-types'

interface ProjectDetailsProps {
  projectDetails: ProjectDetail
}

export default function ProjectDetails({ projectDetails }: ProjectDetailsProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const heroImageSrc = getMediaUrl(projectDetails.hero?.image)

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div ref={ref} className="max-w-3xl mx-auto p-6 lg:pt-0 space-y-6">
        <Link href="/projects">
          <Button className="flex gap-4 bg-white border border-gray-110 hover:cursor-pointer">
            <ArrowLeftIcon />
            All Projects
          </Button>
        </Link>

        {heroImageSrc && (
          <div
            className={clx(
              'relative w-full mt-4',
              'aspect-325/202 border-2 border-gray-110 rounded-3xl overflow-clip',
            )}
          >
            <Image
              src={heroImageSrc}
              alt={projectDetails.title}
              width={3000}
              height={2000}
              quality={100}
            />
          </div>
        )}

        <h1 className="font-bold text-5xl">{projectDetails.title}</h1>
        {projectDetails.overview && (
          <p className="text-lg text-gray-140">{projectDetails.overview}</p>
        )}

        {projectDetails.links && projectDetails.links.website && projectDetails.links.githubs && (
          <ProjectLinks
            website={projectDetails.links.website}
            githubs={projectDetails.links.githubs}
            others={projectDetails.links?.others}
          />
        )}

        {projectDetails.problemStatement && projectDetails.problemStatement.issueRichText && (
          <section>
            <h2 className="font-bold text-2xl">{projectDetails.problemStatement.issuesHeader}</h2>
            <div className="text-lg text-gray-140 pt-2">
              <RichTextContent
                className="flex flex-col prose gap-7"
                field={projectDetails.problemStatement.issueRichText}
              />
            </div>
          </section>
        )}

        {projectDetails.problemStatement && projectDetails.problemStatement.solutionsRichText && (
          <section>
            <h2 className="font-bold text-2xl">
              {projectDetails.problemStatement.solutionsHeader}
            </h2>
            <div className="text-lg text-gray-140 pt-2">
              <RichTextContent
                className="flex flex-col prose gap-7"
                field={projectDetails.problemStatement.solutionsRichText}
              />
            </div>
          </section>
        )}

        {projectDetails.techstack && projectDetails.techstack.length > 0 && (
          <TechStack techstackdata={projectDetails.techstack} />
        )}

        {projectDetails.sections && projectDetails.sections.length > 0 && (
          <section>
            {projectDetails.sections.map((section) => (
              <div key={section.id} className="pt-6">
                <h3 className="font-semibold text-2xl pb-6 pt-6">{section.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items?.map((item, index) => (
                    <div
                      key={`${section.title}-${index}`}
                      className="flex flex-col gap-4 bg-gray-110 rounded-lg p-4"
                    >
                      <div>
                        <h4 className="text-xl font-semibold pb-4">{item.heading}</h4>
                        {item.details?.map((detail, detailIndex) => (
                          <div
                            key={`${section.title}-${index}-${detailIndex}`}
                            className="space-y-2  text-gray-140"
                          >
                            <RichTextContent
                              className="flex flex-col prose gap-7"
                              field={detail.line}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </motion.div>
  )
}
