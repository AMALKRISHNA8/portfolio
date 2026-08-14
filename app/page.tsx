import StarfieldCanvas from '@/components/StarfieldCanvas';
import DragonCursor from '@/components/DragonCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import GithubSection from '@/components/GithubSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <StarfieldCanvas />
      <DragonCursor />
      <Navbar />
      <HeroSection />

      <ScrollReveal animation="slide-right" duration={0.9}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" duration={0.85}>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal animation="zoom-in" duration={0.9}>
        <ProjectsSection />
      </ScrollReveal>

      <ScrollReveal animation="flip-up" duration={1}>
        <GithubSection />
      </ScrollReveal>

      <ScrollReveal animation="blur-in" duration={0.9}>
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" duration={0.6}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
