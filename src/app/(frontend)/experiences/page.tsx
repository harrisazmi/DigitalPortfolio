"use client";

import PreviousExperience from "@/components/PreviousExperience";

export default function ExperiencesPage() {
  return (
    <div className="pb-8">
      <h1 className="text-4xl font-bold pb-8">Experiences</h1>
      <PreviousExperience sub={false} />
    </div>
  );
}
