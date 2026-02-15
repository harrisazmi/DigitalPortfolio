import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import ContactsPageClient from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const BaterikuPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: contactInfoDocs } = await payload.find({
    collection: 'contact-info',
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

export default BaterikuPage
