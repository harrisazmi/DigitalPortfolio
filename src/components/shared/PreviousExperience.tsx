'use client'

import type { Experience } from '@/types/payload-types'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useMemo, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { clx } from '@/lib/utils'
import { getIconComponent } from '@/lib/iconRegistry'
import { Button } from './Button'
import { ArrowRightIcon } from '@/Icons'
import { getMediaUrl } from '@/lib/media'

type PreviousExperienceProps = {
  sub?: boolean
  experiences?: Experience[]
}

const stripSlashes = (value: string) => value.replace(/^\/+|\/+$/g, '')

const deriveExperienceSlug = (value?: string) => {
  if (!value) return ''
  const normalized = stripSlashes(value).toLowerCase()
  if (!normalized) return ''
  const segments = normalized.split('/')
  if (segments[0] === 'experiences') {
    return segments[1] ?? ''
  }
  return segments[segments.length - 1] ?? ''
}

type LexicalNode = {
  text?: string
  children?: LexicalNode[]
  [key: string]: unknown
}

const richTextToPlainText = (details?: Experience['details']) => {
  const walkNodes = (nodes?: LexicalNode[]): string => {
    if (!Array.isArray(nodes)) return ''
    return nodes
      .map((node) => {
        if (typeof node.text === 'string') return node.text
        if (Array.isArray(node.children)) return walkNodes(node.children)
        return ''
      })
      .join(' ')
  }

  const rawText = walkNodes(details?.root?.children)
  return rawText.replace(/\s+/g, ' ').trim()
}

export default function PreviousExperience({
  sub = true,
  experiences = [],
}: PreviousExperienceProps) {
  const pathname = usePathname()
  const router = useRouter()
  const currentSlug = useMemo(() => deriveExperienceSlug(pathname), [pathname])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filteredExperiences = useMemo(() => {
    if (!currentSlug) return experiences

    const hasSlugMatch = experiences.some(
      (exp) => deriveExperienceSlug(exp.ctaHref) === currentSlug,
    )

    if (!hasSlugMatch) return experiences

    return experiences.filter((exp) => deriveExperienceSlug(exp.ctaHref) !== currentSlug)
  }, [currentSlug, experiences])

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {sub && <h1 className="font-bold text-5xl">Previous Experiences</h1>}
        <div ref={ref} className="gap-4 flex flex-col py-8">
          {filteredExperiences.length === 0 ? (
            <p className="text-sm text-gray-140">No experiences available.</p>
          ) : (
            filteredExperiences.map((exp) => {
              const companyImage = exp.companyImage
              const imageSrc = getMediaUrl(companyImage) ?? undefined
              const imageAlt =
                typeof companyImage === 'string'
                  ? exp.name
                  : (companyImage as { alt?: string } | null)?.alt || exp.name
              const projects = Array.isArray(exp.projects) ? exp.projects : []
              const detailText = richTextToPlainText(exp.details)

              return (
                <div
                  key={exp.id}
                  className="bg-white h-auto rounded-2xl flex flex-col justify-between p-6 border border-blue-110 gap-11 hover:cursor-pointer  hover:bg-orange-101 hover:border-orange-140"
                  role="link"
                  tabIndex={0}
                  onClick={() => exp.ctaHref && router.push(exp.ctaHref)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && exp.ctaHref) {
                      router.push(exp.ctaHref)
                    }
                  }}
                >
                  <div className="flex flex-col gap-7">
                    <div className="sm:flex sm:justify-between sm:items-center">
                      <div className="flex items-center justify-center gap-4.5 max-sm:gap-2 ">
                        <div className="rounded-full size-16 overflow-hidden shrink-0 border border-gray-110">
                          {imageSrc ? (
                            <Image
                              src={imageSrc}
                              alt={imageAlt}
                              width={64}
                              height={64}
                              quality={100}
                            />
                          ) : (
                            <span className="text-xs font-semibold text-gray-140">{exp.name}</span>
                          )}
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{exp.name}</div>
                          <div className="text-sm text-gray-140">{exp.position}</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-140 max-sm:pt-2">{exp.yearRange}</div>
                    </div>
                    {detailText && <div className="text-base text-gray-140">{detailText}</div>}
                    {projects.length > 0 && (
                      <div className="flex flex-col gap-3.5">
                        <h2 className="tracking-[2px] text-gray-140 text-xs font-medium">
                          PROJECTS INVOLVED
                        </h2>
                        <div className="flex flex-wrap gap-2 items-center justify-center ">
                          {projects.map((project) => {
                            const Icon = getIconComponent(project.iconKey)
                            return (
                              <Link href={project.href} key={project.id ?? project.title}>
                                <div
                                  className={clx(
                                    'w-37.5 h-17.5 rounded-xl flex items-center justify-center gap-3 px-6',
                                    'border border-blue-110 hover:bg-orange-101 hover:border-orange-140',
                                  )}
                                >
                                  <Icon className="shrink-0" aria-hidden="true" />
                                  <div className="font-semibold">{project.title}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  <Link href={exp.ctaHref}>
                    <Button className="flex items-center gap-2 shrink-0 text-white hover:cursor-pointer ">
                      More Info
                      <ArrowRightIcon />
                    </Button>
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </motion.div>
    </>
  )
}
