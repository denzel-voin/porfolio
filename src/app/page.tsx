'use client'
import { HeroSection } from "@/app/components/HeroSection";
import { Navbar } from "@/app/components/Navbar";
import { AboutSection } from "@/app/components/AboutSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { EmailSection } from "@/app/components/EmailSection";
import { useRef } from "react";

export default function Home() {
    const scrollToRef = useRef(null);

    const handleScroll = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="flex min-h-screen flex-col bg-[#0E100D]" >
            <Navbar />
            <div className="container mt-12 md:mt-24 mx-auto py-12 px-12">
                <HeroSection onScrollToContact={handleScroll} />
                <AboutSection />
                <ProjectsSection />
                <EmailSection ref={scrollToRef} />
            </div>
        </main>
    );
}
