import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ToolsSection } from "@/components/tools-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
      <Navigation />
      <main>
        <HeroSection />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><SkillsSection /></ScrollReveal>
        <ScrollReveal><ToolsSection /></ScrollReveal>
        <ScrollReveal><PhilosophySection /></ScrollReveal>
        <ScrollReveal><EducationSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>
      <Footer />
      <ScrollToTop />
      </LanguageProvider>
    </ThemeProvider>
  );
}
