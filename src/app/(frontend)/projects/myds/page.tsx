'use client'
import { ProjectDetail } from '@/components/shared/ProjectDetail'
import { mydsPortfolio } from '@/data/ProjectInfo'

export default function Myds() {
  return (
    <ProjectDetail
      projectImage={mydsPortfolio.projectImage}
      projectName={mydsPortfolio.projectName}
      overview={mydsPortfolio.overview}
      linkGroups={[
        {
          links: [
            {
              label: 'View Live',
              href: mydsPortfolio.livehref,
              iconType: 'live',
            },
            {
              label: 'View Code - GitHub',
              href: mydsPortfolio.githubhref,
              iconType: 'github',
            },
          ],
        },
      ]}
      techStacks={[
        {
          title: 'Tech Stack (FE and DevOps)',
          tools: mydsPortfolio.techstack.main,
        },
      ]}
      sections={mydsPortfolio.sections}
    />
  )
}
