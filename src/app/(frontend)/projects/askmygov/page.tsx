"use client";

import { ProjectDetail } from "@/components/ProjectDetail";
import { askMyGovPortfolio } from "@/data/ProjectInfo";

export default function AskMyGov() {
  return (
    <ProjectDetail
      projectImage={askMyGovPortfolio.projectImage}
      projectName={askMyGovPortfolio.projectName}
      overview={askMyGovPortfolio.overview}
      infoNotes={[
        "Please note that the project has not yet launched. Live access will remain unavailable until the official release.",
      ]}
      linkGroups={[
        {
          links: [
            {
              label: "View Live",
              href: askMyGovPortfolio.livehref,
              iconType: "live",
              disabled: true,
            },
            {
              label: "View Code - GitHub",
              href: askMyGovPortfolio.githubhref,
              iconType: "github",
            },
          ],
        },
      ]}
      techStacks={[
        {
          title: "Tech Stack (FE and DevOps)",
          tools: askMyGovPortfolio.techstack.main,
        },
      ]}
      sections={askMyGovPortfolio.sections}
      heroBorder={false}
    />
  );
}
