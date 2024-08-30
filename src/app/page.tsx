import Image from "next/image";
import {HeroSection} from "@/app/components/HeroSection";
import {Navbar} from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className='container mt-12 md:mt-24 mx-auto py-12 px-12'>
            <HeroSection />
        </div>
    </main>
  );
}
