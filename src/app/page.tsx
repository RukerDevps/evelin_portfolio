import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { Services } from "@/components/sections/Services";
import { Nav } from "@/components/layout/Nav";
import MyBrands from "@/components/sections/MyBrands";
import { MyWorks } from "@/components/sections/MyWorks";
import { ContactSection } from "@/components/sections/ContactSection";

const Page = () => {
  return (
    <main>
      <div className="fixed left-0 right-0 top-0 z-50">
        <Nav className="mb-4" />
      </div>

      <HeroSection />
      <AboutSection />
      <Services />
      <MyBrands/>
      <MyWorks />
      <ContactSection/>
    </main>
  );
};

export default Page;
