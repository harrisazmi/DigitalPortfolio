import type { MetadataRoute } from 'next'
import { cmsFind } from '@/lib/cms'

export const dynamic = 'force-static'

const BASE_URL = 'https://portfoliocf.harrisviewcodes.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/experiences`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const [{ docs: experienceSlugs }, { docs: projectSlugs }] = await Promise.all([
    cmsFind<{ slug: string }>('experiences-list', { limit: 100, depth: 0 }),
    cmsFind<{ slug: string }>('project-details', { limit: 100, depth: 0 }),
  ])

  const experienceRoutes: MetadataRoute.Sitemap = experienceSlugs.map((doc) => ({
    url: `${BASE_URL}/experiences/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const highPriorityProjects = new Set(['myds', 'sekolahku', 'hansard', 'rdmkd'])

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((doc) => ({
    url: `${BASE_URL}/projects/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: highPriorityProjects.has(doc.slug) ? 1.0 : 0.7,
  }))

  return [...staticRoutes, ...experienceRoutes, ...projectRoutes]
}
