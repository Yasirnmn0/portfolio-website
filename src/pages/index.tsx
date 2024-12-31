import { HeaderSection } from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import { ProjectSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div>
      <HeaderSection />

      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="projects-section">
        <ProjectSection />
      </div>
      <div id="tape-section">
        <TapeSection />
      </div>
      <div id="testimonials-section">
        <TestimonialsSection />
      </div>
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
