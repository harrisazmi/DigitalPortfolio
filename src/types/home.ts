import type { ReactNode } from 'react'

export type HeroInfo = {
  titleHook: string
  descHook: string
}

export type EducationItem = {
  title: string
  major: string
  year: string
  name: string
  path: string
}

export type CertificateItem = {
  title: string
  issuer: string
  year: string
  credID?: string
  path: string
}

export type TestimonialItem = {
  name: string
  position: string
  company: string
  comments: string
  path: string
}

export type GalleryItem = {
  name: string
  path: string
}

export type ConnectItem = {
  title: string
  icon: ReactNode
  details: string
  href: string
}

export type TechStackItem = {
  name: string
  path: string
  proficiency?: string
  category?: string
}

export type HomeInfoShape = HeroInfo & {
  education: EducationItem[]
  certificate: CertificateItem[]
  sayAboutMe: TestimonialItem[]
  gallery: GalleryItem[]
  connect: ConnectItem[]
  techStack: TechStackItem[]
}
