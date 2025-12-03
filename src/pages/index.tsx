"use client";

import { HeaderSection } from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectSection from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

import { useRef } from "react";
import { ResumeSection } from "@/sections/Resume";
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
  // Create a reference for the projects section
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  // Scroll handler function
  const scrollToProjects = () => {
    console.log("scrollToProjects called");
    if (projectsRef.current) {
      console.log("Scrolling to: ", projectsRef.current);
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("projectsRef is null");
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeaderSection />

      <div id="hero-section">
        <HeroSection
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />
      </div>
      <div
        id="projects-section"
        ref={projectsRef}
        className="scroll-mt-24 min-h-[500px]"
      >
        <ProjectSection />
      </div>
      <div>
        <ResumeSection />
      </div>
      <div id="tape-section">
        <TapeSection />
      </div>
      {/* <div id="testimonials-section">
        <TestimonialsSection />
      </div> */}
      <div id="about-section">
        <AboutSection />
      </div>
      <div id="contact-section" ref={contactRef} className="scroll-mt-24">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
