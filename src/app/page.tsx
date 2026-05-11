import { AboutSection } from "@/components/sections/AboutSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Page;
