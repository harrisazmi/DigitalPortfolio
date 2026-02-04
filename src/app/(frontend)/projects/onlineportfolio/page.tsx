"use client";
import { ProjectDetail } from "@/components/ProjectDetail";
import { OnlinePortfolio } from "@/data/ProjectInfo";

export default function OnlinePortfolios() {
  return (
    <ProjectDetail
      projectImage={OnlinePortfolio.projectImage}
      projectName={OnlinePortfolio.projectName}
      overview={OnlinePortfolio.overview}
      linkGroups={[
        {
          title: "Online Portfolio V2",
          links: [
            {
              label: "View Live",
              href: OnlinePortfolio.livehref,
              iconType: "live",
            },
            {
              label: "View Code - GitHub",
              href: OnlinePortfolio.githubhref,
              iconType: "github",
            },
          ],
        },
        {
          title: "Online Portfolio Legacy",
          links: [
            {
              label: "View Live",
              href: OnlinePortfolio.livelhref,
              iconType: "live",
            },
            {
              label: "View Code - GitHub",
              href: OnlinePortfolio.githublhref,
              iconType: "github",
            },
          ],
        },
      ]}
      issues={OnlinePortfolio.issues}
      solutionsHeader={OnlinePortfolio.solutionsHeader}
      solutionsList={OnlinePortfolio.solutionsList}
      solutionsConclusion={OnlinePortfolio.solutionsConclusion}
      techStacks={[
        {
          title: "Tech Stack (Frontend & Backend Stack)",
          tools: OnlinePortfolio.techstack.fenbe,
        },
        {
          title: "Tech Stack (DevOps)",
          tools: OnlinePortfolio.techstack.devops,
        },
      ]}
      sections={OnlinePortfolio.sections}
    />
  );
}
