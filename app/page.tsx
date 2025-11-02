import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Sponsors from "@/components/Sponsors";
import { EventTimeline } from "@/components/EventTimeline";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <Sponsors />
        <EventTimeline />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
