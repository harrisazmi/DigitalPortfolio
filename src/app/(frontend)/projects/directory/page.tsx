"use client";

import { ProjectDetail } from "@/components/ProjectDetail";
import { directoryPortfolio } from "@/data/ProjectInfo";

export default function Directory() {
  return (
    <ProjectDetail
      projectImage={directoryPortfolio.projectImage}
      projectName={directoryPortfolio.projectName}
      overview={directoryPortfolio.overview}
      infoNotes={[
        "Please note that the project has not yet launched. Live access and source code will remain unavailable until the official release.",
      ]}
      linkGroups={[
        {
          links: [
            {
              label: "View Live",
              href: directoryPortfolio.livehref,
              iconType: "live",
              disabled: true,
            },
            {
              label: "View Code - GitHub",
              href: directoryPortfolio.githubhref,
              iconType: "github",
            },
          ],
        },
      ]}
      techStacks={[
        {
          title: "Tech Stack (FE and DevOps)",
          tools: directoryPortfolio.techstack.main,
        },
      ]}
      sections={directoryPortfolio.sections}
    />
  );
}
