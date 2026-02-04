"use client";
import { ProjectDetail } from "@/components/ProjectDetail";
import { TerraformAWSPortfolio } from "@/data/ProjectInfo";

export default function TerraformAWS() {
  return (
    <ProjectDetail
      projectImage={TerraformAWSPortfolio.projectImage}
      projectName={TerraformAWSPortfolio.projectName}
      overview={TerraformAWSPortfolio.overview}
      linkGroups={[
        {
          links: [
            {
              label: "View Code - GitHub",
              href: TerraformAWSPortfolio.githubhref,
              iconType: "github",
            },
          ],
        },
      ]}
      issues={TerraformAWSPortfolio.issues}
      solutionsHeader={TerraformAWSPortfolio.solutionsHeader}
      solutionsList={TerraformAWSPortfolio.solutionsList}
      solutionsConclusion={TerraformAWSPortfolio.solutionsConclusion}
      techStacks={[
        {
          title: "Tech Stack (DevOps)",
          tools: TerraformAWSPortfolio.techstack.devops,
        },
      ]}
      sections={TerraformAWSPortfolio.sections}
    />
  );
}
