import { AchievementsSection } from "@/components/home/AchievementsSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ProductsOverviewSection } from "@/components/home/ProductsOverviewSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { WhyGooyaSection } from "@/components/home/WhyGooyaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProductsOverviewSection />
      <WhyGooyaSection />
      <TechnologySection />
      <EcosystemSection />
      <ProjectsSection />
      <AchievementsSection />
      <FinalCtaSection />
    </>
  );
}
