'use client'

import { ProjectDetail } from '@/components/shared/ProjectDetail'
import { ExpenseTrackerPortfolio } from '@/data/ProjectInfo'

export default function ExpenseTracker() {
  return (
    <ProjectDetail
      projectImage={ExpenseTrackerPortfolio.projectImage}
      projectName={ExpenseTrackerPortfolio.projectName}
      overview={ExpenseTrackerPortfolio.overview}
      linkGroups={[
        {
          links: [
            {
              label: 'View Live',
              href: ExpenseTrackerPortfolio.livehref,
              iconType: 'live',
            },
            {
              label: 'View Code - GitHub',
              href: ExpenseTrackerPortfolio.githubhref,
              iconType: 'github',
            },
          ],
        },
      ]}
      issues={ExpenseTrackerPortfolio.issues}
      solutionsHeader={ExpenseTrackerPortfolio.solutionsHeader}
      solutionsList={ExpenseTrackerPortfolio.solutionsList}
      solutionsConclusion={ExpenseTrackerPortfolio.solutionsConclusion}
      techStacks={[
        {
          title: 'Tech Stack (Frontend & Backend Stack)',
          tools: ExpenseTrackerPortfolio.techstack.fenbe,
        },
        {
          title: 'Tech Stack (DevOps)',
          tools: ExpenseTrackerPortfolio.techstack.devops,
        },
      ]}
      sections={ExpenseTrackerPortfolio.sections}
    />
  )
}
