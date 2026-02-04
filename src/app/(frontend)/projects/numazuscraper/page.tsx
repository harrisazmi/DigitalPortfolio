"use client";
import { ProjectDetail } from "@/components/ProjectDetail";
import { NumazuScraperPortfolio } from "@/data/ProjectInfo";

export default function NumazuScraper() {
  return (
    <ProjectDetail
      projectImage={NumazuScraperPortfolio.projectImage}
      projectName={NumazuScraperPortfolio.projectName}
      overview={NumazuScraperPortfolio.overview}
      infoNotes={[
        "Note: This project may take a few moments to load as the backend and frontend services are hosted on free-tier infrastructure that sleeps when inactive. This may also cause delays in initial requests until the services are fully awake.",
      ]}
      linkGroups={[
        {
          links: [
            {
              label: "View Live",
              href: NumazuScraperPortfolio.livehref,
              iconType: "live",
            },
            {
              label: "View Code - GitHub",
              href: NumazuScraperPortfolio.githubhref,
              iconType: "github",
            },
          ],
        },
      ]}
      issues={NumazuScraperPortfolio.issues}
      solutionsHeader={NumazuScraperPortfolio.solutionsHeader}
      solutionsList={NumazuScraperPortfolio.solutionsList}
      solutionsConclusion={NumazuScraperPortfolio.solutionsConclusion}
      techStacks={[
        {
          title: "Tech Stack (Frontend & Backend Stack)",
          tools: NumazuScraperPortfolio.techstack.fenbe,
        },
        {
          title: "Tech Stack (DevOps)",
          tools: NumazuScraperPortfolio.techstack.devops,
        },
      ]}
      sections={NumazuScraperPortfolio.sections}
    />
  );
}
