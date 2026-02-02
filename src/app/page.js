import AboutSection from "./components/AboutSection";
import AvatarSection from "./components/AvatarSection";
import BottomSection from "./components/BottomSection";
import AboutSkills from "./components/AboutSkills";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto px-12 py-4">
        <AvatarSection />
        <AboutSection />
        <AboutSkills></AboutSkills>
        <ProjectsSection></ProjectsSection>
        <BottomSection></BottomSection>
      </div>
    </main>
  );
}
