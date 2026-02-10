import type { HomeInfo as HomeInfoDocument } from '@/payload-types'
import type { HomeInfoShape } from '@/types/home'

type GalleryShapeItem = HomeInfoShape['gallery'][number]
type ConnectShapeItem = HomeInfoShape['connect'][number]

type GalleryField = HomeInfoDocument['gallery']
type ConnectField = HomeInfoDocument['connect']

type TechStackField = HomeInfoDocument['techStack']
type EducationField = HomeInfoDocument['education']
type CertificateField = HomeInfoDocument['certificate']
type TestimonialsField = HomeInfoDocument['sayAboutMe']

const mapGalleryItems = (gallery?: GalleryField): HomeInfoShape['gallery'] => {
  if (!gallery?.length) return []

  return gallery
    .map<GalleryShapeItem | null>((item) => {
      if (!item) return null
      if (!item.image || typeof item.image === 'string') return null

      const path = item.image.url ?? (item.image.filename ? `/media/${item.image.filename}` : null)
      if (!path) return null

      return {
        name: item.name,
        path,
      }
    })
    .filter((entry): entry is GalleryShapeItem => Boolean(entry))
}

const mapConnectItems = (connect?: ConnectField): HomeInfoShape['connect'] => {
  if (!connect?.length) return []

  return connect
    .map<ConnectShapeItem | null>((item) => {
      if (!item) return null

      return {
        title: item.title,
        details: item.details,
        href: item.href,
        iconKey: item.iconKey ?? undefined,
      }
    })
    .filter((entry): entry is ConnectShapeItem => Boolean(entry))
}

const mapTechStack = (techStack?: TechStackField): HomeInfoShape['techStack'] =>
  techStack?.map((tech) => ({
    name: tech.name,
    path: tech.path,
    proficiency: tech.proficiency ?? undefined,
    category: tech.category ?? undefined,
  })) ?? []

const mapEducation = (education?: EducationField): HomeInfoShape['education'] =>
  education?.map((item) => ({
    title: item.title,
    major: item.major,
    year: item.year,
    name: item.name,
    path: item.path,
  })) ?? []

const mapCertificates = (certificates?: CertificateField): HomeInfoShape['certificate'] =>
  certificates?.map((item) => ({
    title: item.title,
    issuer: item.issuer,
    year: item.year,
    credID: item.credID ?? undefined,
    path: item.path,
  })) ?? []

const mapTestimonials = (testimonials?: TestimonialsField): HomeInfoShape['sayAboutMe'] =>
  testimonials?.map((item) => ({
    name: item.name,
    position: item.position,
    company: item.company,
    comments: item.comments,
    path: item.path,
  })) ?? []

export const normalizeHomeInfo = (doc?: HomeInfoDocument | null): HomeInfoShape => {
  if (!doc) {
    throw new Error('Home info document not found')
  }

  const techStack = mapTechStack(doc.techStack)
  const education = mapEducation(doc.education)
  const certificate = mapCertificates(doc.certificate)
  const sayAboutMe = mapTestimonials(doc.sayAboutMe)
  const gallery = mapGalleryItems(doc.gallery)
  const connect = mapConnectItems(doc.connect)

  return {
    titleHook: doc.titleHook,
    descHook: doc.descHook,
    techStack,
    education,
    certificate,
    sayAboutMe,
    gallery,
    connect,
  }
}
