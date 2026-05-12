import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { Nav } from "@/components/layout/Nav";

const Page = () => {
  return (
    <main>
      <div className="fixed left-0 right-0 top-0 z-50">
        <Nav className="mb-4" />
      </div>

      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
};

export default Page;
