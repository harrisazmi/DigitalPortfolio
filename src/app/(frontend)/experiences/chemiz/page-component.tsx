'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import * as Icons from '@/Icons'
import { Button } from '@/components/shared/Button'
import { RichTextContent } from '@/components/shared/RichTextContent'
import PreviousExperience from '@/components/shared/PreviousExperience'
import { getIconComponent } from '@/lib/iconRegistry'
import { cardVariants } from '@/lib/motionVariants'
import type { ExperiencesList } from '@/types/experience'
import type { Experience } from '@/payload-types'
import { clx } from '@/lib/utils'
import WebsiteChecker from '@/components/shared/WebsiteChecker'

type ChemizPageClientProps = {
  experienceData: ExperiencesList
  experiences?: Experience[]
}

export default function ChemizPageClient({
  experienceData,
  experiences = [],
}: ChemizPageClientProps) {
  const expRef = useRef(null)
  const isExpRefInView = useInView(expRef, { once: true })
  return (
    <div className="pb-4">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isExpRefInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div ref={expRef}>
          <Link href="/experiences">
            <Button className="flex gap-4 bg-white border border-gray-110 hover:cursor-pointer">
              <Icons.ArrowLeftIcon />
              All Experiences
            </Button>
          </Link>
          <div className="py-8 flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-5xl pb-1">{experienceData.name}</h1>
              <div className="flex gap-2">
                <div>{experienceData.position} : </div>
                <div>{experienceData.yearRange}</div>
              </div>
            </div>
            <section>
              <h2 className="font-bold text-4xl pb-4">{experienceData.overviewTitle}</h2>
              <RichTextContent
                field={experienceData.overview}
                className="space-y-3 leading-relaxed "
              />
            </section>
            {experienceData && experienceData.projects && experienceData.projects.length > 0 && (
              <section className="flex flex-col gap-3.5">
                <h2 className="font-bold text-4xl pb-4">{experienceData.projectsHeader}</h2>
                <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start">
                  {experienceData.projects.map((project) => {
                    const IconComponent = getIconComponent(project.iconKey)

                    return (
                      <Link href={project.href} key={project.id}>
                        <div
                          className={clx(
                            'w-37.5 h-17.5 rounded-xl flex items-center justify-center gap-3 px-6',
                            'border border-blue-110 hover:bg-orange-101 hover:border-orange-140',
                          )}
                        >
                          <IconComponent className="shrink-0" />
                          <div className="font-semibold">{project.title}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}
            <section>
              <h2 className="font-bold text-4xl pb-4">{experienceData.roleHeader}</h2>
              <RichTextContent field={experienceData.role} className="space-y-3 leading-relaxed " />
            </section>
            {experienceData.keyAchievements?.length && (
              <section>
                <h2 className="font-bold text-4xl pb-6">{experienceData.keyAchievementsHeader}</h2>
                <div className="space-y-6">
                  {experienceData.keyAchievements.map(({ heading, content, id }) => (
                    <article key={id}>
                      <h3 className="font-semibold text-xl">{heading}</h3>
                      <RichTextContent field={content} className="mt-3 space-y-3 leading-relaxed" />
                    </article>
                  ))}
                </div>
              </section>
            )}
            {experienceData.impact?.length && (
              <section>
                <h2 className="font-bold text-4xl pb-4">{experienceData.impactHeader}</h2>
                <div className="space-y-6">
                  {experienceData.impact.map(({ heading, content, id }) => (
                    <article key={id}>
                      <h3 className="font-semibold text-xl">{heading}</h3>
                      <RichTextContent field={content} className="leading-relaxed" />
                    </article>
                  ))}
                </div>
              </section>
            )}
            <WebsiteChecker
              href={experienceData.companyWebsite}
              isLive={experienceData.companyWebsiteLive}
            />
          </div>
        </div>
      </motion.div>
      <div>
        <PreviousExperience experiences={experiences} />
      </div>
    </div>
  )
}
