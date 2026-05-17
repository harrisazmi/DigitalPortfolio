import { JSX, Suspense } from 'react'
import type { Metadata } from 'next'

export const revalidate = false
import { cmsFind } from '@/lib/cms'
import ContactsPageClient from './page-component'
import type { ContactInfo } from '@/types/payload-types'

export const metadata: Metadata = {
  title: 'Contact Harris Azmi | Hire a Mid-Senior Frontend Engineer',
  description:
    'Looking for an experienced Mid-Senior Frontend Engineer or Full-Stack Developer? Contact Harris Azmi Roswadi to discuss job opportunities, technical consultations, or collaborations.',
  keywords: [
    'Contact Harris Azmi',
    'Hire Frontend Engineer Malaysia',
    'Hire Mid-Senior Frontend Engineer',
    'Hire Full-Stack Developer Malaysia',
    'Frontend Senior for Hire',
    'Contact Mid-Senior Frontend Developer',
    'Collaborate with Developer',
    'Hire Frontend Engineer Govtech Malaysia',
  ],
  openGraph: {
    title: 'Contact Harris Azmi | Hire a Mid-Senior Frontend Engineer',
    description:
      'Looking for an experienced Mid-Senior Frontend Engineer or Full-Stack Developer? Contact Harris Azmi Roswadi to discuss job opportunities, technical consultations, or collaborations.',
    url: 'https://portfoliocf.harrisviewcodes.uk/contacts',
    siteName: 'Harris Azmi Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://portfoliocf.harrisviewcodes.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Harris Azmi Roswadi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Harris Azmi | Hire a Mid-Senior Frontend Engineer',
    description:
      'Looking for an experienced Mid-Senior Frontend Engineer or Full-Stack Developer? Contact Harris Azmi Roswadi to discuss job opportunities, technical consultations, or collaborations.',
    images: ['https://portfoliocf.harrisviewcodes.uk/og-image.png'],
  },
  alternates: {
    canonical: 'https://portfoliocf.harrisviewcodes.uk/contacts',
  },
}

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const ContactPage: FSP = async () => {
  const { docs: contactInfoDocs } = await cmsFind<ContactInfo>('contact-info', {
    limit: 1,
    depth: 2,
  })

  const contactInfo = contactInfoDocs[0]

  return (
    <Suspense>
      <ContactsPageClient contactInfo={contactInfo} />
    </Suspense>
  )
}

export default ContactPage
