"use client";
import { ProjectDetail } from "@/components/ProjectDetail";
import { HomeServerPortfolio } from "@/data/ProjectInfo";

export default function HomeServer() {
  return (
    <ProjectDetail
      projectImage={HomeServerPortfolio.projectImage}
      projectName={HomeServerPortfolio.projectName}
      overview={HomeServerPortfolio.overview}
      techStacks={[
        {
          title: "Tech Stack (DevOps)",
          tools: HomeServerPortfolio.techstack.devops,
        },
      ]}
      sections={HomeServerPortfolio.sections}
    />
  );
}
