import Image from "next/image";
import {HeroSection} from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className='container mx-auto py-12 px-12'>
            <HeroSection />
        </div>
    </main>
  );
}
