'use client'

import type { Experience } from '@/payload-types'
import { HeroSection } from '@/components/home/HeroSection'
import { ExperienceList } from '@/components/home/ExperienceList'
import { SectionCard } from '@/components/home/SectionCard'
import { HomeInfo } from '@/data/HomeInfo'
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
}

export default function HomePageClient({ ExpInfoDataList }: HomePageClientProps) {
  const experiences = Array.isArray(ExpInfoDataList) ? ExpInfoDataList : []
  const techStackItems = HomeInfo.techStack ?? []

  return (
    <div className="flex flex-col gap-6">
      <HeroSection title={HomeInfo.titleHook} description={HomeInfo.descHook} />
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
        <EducationSection items={HomeInfo.education} />
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
        <TechStackGrid items={techStackItems} />
      </SectionCard>
      <CertificateCarousel items={HomeInfo.certificate} />
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
      <GalleryStrip items={HomeInfo.gallery} />
      <Testimonials items={HomeInfo.sayAboutMe} />
      <Contacts title={"LET'S CONNECT WITH ME!"} />
    </div>
  )
}
