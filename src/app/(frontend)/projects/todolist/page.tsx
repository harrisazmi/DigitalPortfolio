"use client";
import { ProjectDetail } from "@/components/ProjectDetail";
import { ToDoListPortfolio } from "@/data/ProjectInfo";

export default function ToDoList() {
  return (
    <ProjectDetail
      projectImage={ToDoListPortfolio.projectImage}
      projectName={ToDoListPortfolio.projectName}
      overview={ToDoListPortfolio.overview}
      infoNotes={[
        "Note: This project may take a few moments to load as the backend and frontend services are hosted on free-tier infrastructure that sleeps when inactive. This may also cause delays in initial requests until the services are fully awake.",
      ]}
      linkGroups={[
        {
          className: "lg:justify-center",
          links: [
            {
              label: "View Live",
              href: ToDoListPortfolio.livehref,
              iconType: "live",
            },
            {
              label: "View Code FE - GitHub",
              href: ToDoListPortfolio.githubhreffe,
              iconType: "github",
            },
            {
              label: "View Code BE - GitHub",
              href: ToDoListPortfolio.githubhrefbe,
              iconType: "github",
            },
          ],
        },
      ]}
      issues={ToDoListPortfolio.issues}
      solutionsHeader={ToDoListPortfolio.solutionsHeader}
      solutionsList={ToDoListPortfolio.solutionsList}
      solutionsConclusion={ToDoListPortfolio.solutionsConclusion}
      techStacks={[
        {
          title: "Tech Stack (Frontend & Backend Stack)",
          tools: ToDoListPortfolio.techstack.fenbe,
        },
        {
          title: "Tech Stack (DevOps)",
          tools: ToDoListPortfolio.techstack.devops,
        },
      ]}
      sections={ToDoListPortfolio.sections}
    />
  );
}
