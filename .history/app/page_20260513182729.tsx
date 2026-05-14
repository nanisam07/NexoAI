import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AISection from "@/components/AISection";
import BentoGrid from "@/components/BentoGrid";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <Navbar />

      <Hero />

      <AISection />

      <BentoGrid />

      <DashboardPreview />

      <Footer />

    </main>
  );
}