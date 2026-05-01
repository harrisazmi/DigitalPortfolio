import { JSX, Suspense } from 'react'
import { cmsFind } from '@/lib/cms'
import ContactsPageClient from './page-component'
import type { ContactInfo } from '@/types/payload-types'

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
