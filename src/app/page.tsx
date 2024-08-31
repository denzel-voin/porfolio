import {HeroSection} from "@/app/components/HeroSection";
import {Navbar} from "@/app/components/Navbar";
import {AboutSection} from "@/app/components/AboutSection";
import {ProjectsSection} from "@/app/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0E100D]">
        <Navbar />
        <div className='container mt-12 md:mt-24 mx-auto py-12 px-12'>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
        </div>
    </main>
  );
}
