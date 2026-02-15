'use client'

import type { Experience, HomeInfo, ContactInfo, Project } from '@/payload-types'
import HeroSection from '@/components/home/HeroSection'
import ExperienceList from '@/components/home/ExperienceList'
import SectionCard from '@/components/home/SectionCard'
import CertificateCarousel from '@/components/home/CertificateCarousel'
import EducationSection from '@/components/home/EducationSection'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import ProjectsShowcase from '@/components/home/ProjectsShowcase'
import GalleryStrip from '@/components/home/GalleryStrip'
import Testimonials from '@/components/home/Testimonials'
import Contacts from '@/components/shared/Contact'
import TechStackGrid from '@/components/home/TechStackGrid'

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
  return (
    <>
      {homeInfo && (
        <div className="flex flex-col gap-6">
          <HeroSection title={homeInfo.titleHook} description={homeInfo.descHook} />
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

          {homeInfo.education && (
            <SectionCard label="EDUCATION">
              <EducationSection items={homeInfo.education} />
            </SectionCard>
          )}

          {homeInfo.techStack && (
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
          )}

          {homeInfo.certificate && <CertificateCarousel items={homeInfo.certificate} />}

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

          {homeInfo.gallery && <GalleryStrip items={homeInfo.gallery} />}

          {homeInfo.sayAboutMe && <Testimonials items={homeInfo.sayAboutMe} />}

          {contactInfo.label && contactInfo.connect && (
            <Contacts title={contactInfo.label.toUpperCase()} contactItems={contactInfo.connect} />
          )}
        </div>
      )}
    </>
  )
}
