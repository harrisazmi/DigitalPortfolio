'use client'

import ExperienceList from '@/components/home/ExperienceList'
import GalleryStrip from '@/components/home/GalleryStrip'
import HeroSection from '@/components/home/HeroSection'
import TechStackGrid from '@/components/home/TechStackGrid'
import { Button } from '@/components/shared/Button'
import SectionCard from '@/components/home/SectionCard'
import CertificateCarousel from '@/components/home/CertificateCarousel'
import EducationSection from '@/components/home/EducationSection'
import ProjectsShowcase from '@/components/home/ProjectsShowcase'
import Testimonials from '@/components/home/Testimonials'
import Contacts from '@/components/shared/Contact'
import type { Experience, HomeInfo, ContactInfo, Project } from '@/types/payload-types'
import Link from 'next/link'
import { cardVariants } from '@/lib/motionVariants'
import { useInView, motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type HomePageClientProps = {
  experienceInfo: Experience[]
  homeInfo: HomeInfo
  collaborativeProjectsInfo: Project[]
  contactInfo: ContactInfo
}

export default function HomePageClient({
  contactInfo,
  experienceInfo,
  homeInfo,
  collaborativeProjectsInfo,
}: HomePageClientProps) {
  if (!homeInfo) return null

  return (
    <div className="flex flex-col gap-6">
      <AnimatedSection>
        <SectionCard className="pb-6">
          <HeroSection title={homeInfo.titleHook} description={homeInfo.descHook} />
        </SectionCard>
      </AnimatedSection>

      <AnimatedSection>
        <SectionCard
          label="WORK EXPERIENCE"
          action={
            <Link href="/experiences">
              <Button className="text-sm bg-linear-to-r from-orange-110 to-orange-120 border-orange-120 border-from bg-clip-text text-transparent hover:cursor-pointer">
                More Info
              </Button>
            </Link>
          }
        >
          <ExperienceList experiences={experienceInfo} />
        </SectionCard>
      </AnimatedSection>

      {homeInfo.education && (
        <AnimatedSection>
          <SectionCard label="EDUCATION">
            <EducationSection items={homeInfo.education} />
          </SectionCard>
        </AnimatedSection>
      )}

      {homeInfo.techStack && (
        <AnimatedSection>
          <SectionCard
            label="MAIN TECHSTACK"
            action={
              <Link href="/tools">
                <Button className="text-sm bg-linear-to-r from-orange-110 to-orange-120 border-orange-120 border-from bg-clip-text text-transparent hover:cursor-pointer">
                  View All
                </Button>
              </Link>
            }
          >
            <TechStackGrid items={homeInfo.techStack} />
          </SectionCard>
        </AnimatedSection>
      )}

      {homeInfo.certificate && (
        <AnimatedSection>
          <CertificateCarousel items={homeInfo.certificate} />
        </AnimatedSection>
      )}

      <AnimatedSection>
        <SectionCard
          label="RECENT PROJECTS"
          action={
            <Link href="/projects">
              <Button className="text-sm bg-linear-to-r from-orange-110 to-orange-120 border-orange-120 border-from bg-clip-text text-transparent hover:cursor-pointer">
                View All
              </Button>
            </Link>
          }
        >
          <ProjectsShowcase projects={collaborativeProjectsInfo} />
        </SectionCard>
      </AnimatedSection>

      {homeInfo.gallery && (
        <AnimatedSection>
          <GalleryStrip items={homeInfo.gallery} />
        </AnimatedSection>
      )}

      {homeInfo.sayAboutMe && (
        <AnimatedSection>
          <Testimonials items={homeInfo.sayAboutMe} />
        </AnimatedSection>
      )}

      {contactInfo.label && contactInfo.connect && (
        <AnimatedSection>
          <Contacts title={contactInfo.label.toUpperCase()} contactItems={contactInfo.connect} />
        </AnimatedSection>
      )}
    </div>
  )
}

function AnimatedSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
