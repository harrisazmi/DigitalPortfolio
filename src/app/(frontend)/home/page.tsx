import { getPayload } from 'payload'
import { JSX, Suspense } from 'react'
import config from '@/payload.config'
import HomePageClient from './page-component'
import { normalizeHomeInfo } from '@/lib/homeInfoAdapter'
import { toProjectGridItem, type ProjectGridItem } from '@/lib/projectAdapter'
import type { Project } from '@/payload-types'

// Async-friendly server component type alias
type FSP = () => Promise<JSX.Element>

const HomePage: FSP = async () => {
  const payload = await getPayload({ config })

  const { docs: experienceInfoDataList } = await payload.find({
    collection: 'experiences',
    limit: 5,
    depth: 3,
  })

  const { docs: homeInfoDocs } = await payload.find({
    collection: 'home-info',
    limit: 1,
    depth: 2,
  })

  const { docs: collaborativeProjectDocs } = await payload.find({
    collection: 'projects',
    limit: 3,
    depth: 2,
    where: {
      category: {
        equals: 'collaboration',
      },
    },
  })

  const collaborativeProjects = (collaborativeProjectDocs as Project[])
    .map(toProjectGridItem)
    .filter((project): project is ProjectGridItem => Boolean(project))

  const collaborativeProjectsReversed = collaborativeProjects.reverse()
  const experienceInfoDataListReversed = experienceInfoDataList.reverse()

  // normalize instead of destructure one by one
  const homeInfoData = normalizeHomeInfo(homeInfoDocs.at(0) ?? null)

  return (
    <Suspense>
      <HomePageClient
        ExpInfoDataList={experienceInfoDataListReversed}
        homeInfoData={homeInfoData}
        collaborativeProjects={collaborativeProjectsReversed}
      />
    </Suspense>
  )
}

export default HomePage
