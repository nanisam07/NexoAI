import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <BentoGrid />

      <DashboardPreview />

    </main>
  );
}