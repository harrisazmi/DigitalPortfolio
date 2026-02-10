'use client'

import type { Experience } from '@/payload-types'
import type { HomeInfoShape } from '@/types/home'
import { HeroSection } from '@/components/home/HeroSection'
import { ExperienceList } from '@/components/home/ExperienceList'
import { SectionCard } from '@/components/home/SectionCard'
import { CertificateCarousel } from '@/components/home/CertificateCarousel'
import { EducationSection } from '@/components/home/EducationSection'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import { ProjectsShowcase } from '@/components/home/ProjectsShowcase'
import { collabProjectsData } from '@/data/ProjectsData'
import { GalleryStrip } from '@/components/home/GalleryStrip'
import { Testimonials } from '@/components/home/Testimonials'
import Contacts from '@/components/shared/Contact'
import { TechStackGrid } from '@/components/home/TechStackGrid'

type HomePageClientProps = {
  ExpInfoDataList: Experience[]
  homeInfoData?: HomeInfoShape
}

export default function HomePageClient({ ExpInfoDataList, homeInfoData }: HomePageClientProps) {
  const experiences = Array.isArray(ExpInfoDataList) ? ExpInfoDataList : []

  return (
    <>
      {homeInfoData && (
        <div className="flex flex-col gap-6">
          <HeroSection title={homeInfoData.titleHook} description={homeInfoData.descHook} />
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
            <ExperienceList experiences={experiences} />
          </SectionCard>
          <SectionCard label="EDUCATION">
            <EducationSection items={homeInfoData.education} />
          </SectionCard>
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
            <TechStackGrid items={homeInfoData.techStack} />
          </SectionCard>
          <CertificateCarousel items={homeInfoData.certificate} />
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
            <ProjectsShowcase projects={collabProjectsData} />
          </SectionCard>
          <GalleryStrip items={homeInfoData.gallery} />
          <Testimonials items={homeInfoData.sayAboutMe} />
          <Contacts title={"LET'S CONNECT WITH ME!"} contactItems={homeInfoData.connect} />
        </div>
      )}
    </>
  )
}
