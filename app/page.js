import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ChatBot from "./components/ChatBot";
import CursorGlow from "./components/CursorGlow";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import AISection from "./components/AISection";
import FloatingCTA from "./components/FloatingCTA";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AISection />
      <Certifications />
	  <ContactSection />
      <ChatBot />
      <FloatingCTA />

    </>
  );
}