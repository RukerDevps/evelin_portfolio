import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { Nav } from "@/components/layout/Nav";

const Page = () => {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav className="mb-4" />
      </div>

      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default Page;
