import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import TerraformAWSClientPage from './page-component'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const TerraformAWSPage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: terraformAWSInfo } = await payload.find({
    collection: 'project-details',
    where: {
      slug: {
        equals: 'TerraformAWS',
      },
    },
    limit: 1,
    depth: 3,
  })

  const terraformAWSProjectDetail = terraformAWSInfo[0]

  return (
    <Suspense>
      <TerraformAWSClientPage terraformAWSProjectDetail={terraformAWSProjectDetail} />
    </Suspense>
  )
}

export default TerraformAWSPage
