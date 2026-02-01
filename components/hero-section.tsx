"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const HERO_GLOW_PHRASES = [
  "cinematic storytelling",
  "increase sales",
  "gain exposure",
  "stand out",
  "applications",
  "film",
  "photography",
  "graphic design",
  "music",
  "code",
];

function descriptionWithGlow(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let bestStart = remaining.length;
    let bestPhrase = "";

    for (const phrase of HERO_GLOW_PHRASES) {
      const i = remaining.indexOf(phrase);
      if (i !== -1 && i < bestStart) {
        bestStart = i;
        bestPhrase = phrase;
      }
    }

    if (bestPhrase === "") {
      parts.push(remaining);
      break;
    }
    if (bestStart > 0) {
      parts.push(remaining.slice(0, bestStart));
    }
    parts.push(
      <span key={`${bestPhrase}-${parts.length}`} className="text-foreground tools-focus-glow">
        {bestPhrase}
      </span>
    );
    remaining = remaining.slice(bestStart + bestPhrase.length);
  }
  return parts;
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRef.current.offsetHeight;
        // Calculate scroll progress within this section (0 to 1)
        const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
        setScrollY(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle parallax and fade based on scroll
  const imageOpacity = Math.max(0.3, 1 - scrollY * 1.2);
  const imageTranslateY = scrollY * 40;
  const imageScale = 1 - scrollY * 0.1;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          {/* Profile Image - Mobile: Top, Desktop: Right */}
          <div
            className="order-1 lg:order-2 flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end"
            style={{
              opacity: imageOpacity,
              transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <a
              href="https://www.ashuttermedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className="group relative opacity-0 animate-fade-in-up animate-delay-100 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[28rem] xl:h-[28rem] overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-muted/30 to-transparent shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06)] transition-[box-shadow] duration-500 ease-out hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04),0_0_50px_rgba(255,255,255,0.14)] dark:hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.06),0_0_60px_rgba(255,255,255,0.1)]">
                {/* Shine sweep on hover: light mode = subtle dark sweep, dark mode = white sweep */}
                <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] overflow-hidden">
                  <div className="absolute inset-y-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[350%] dark:opacity-0" />
                  <div className="absolute inset-y-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[350%] dark:opacity-100" />
                </div>
                <Image
                  src="/images/ad%20photo.png"
                  alt={t("hero.subtitle")}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 352px, 448px"
                />
              </div>
            </a>
          </div>

          {/* Content - Mobile: Bottom, Desktop: Left */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left">
            {/* Name & Role */}
            <div className="opacity-0 animate-fade-in-up">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                {t("hero.subtitle")}
              </p>
              <h1 className="mb-6">
                <a
                  href="https://www.heytrese.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-name-gradient text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  {t("hero.name")}
                </a>
              </h1>
              <p className="hero-name-gradient text-lg sm:text-xl font-light mb-8 text-pretty">
                {t("hero.roles")}
              </p>
            </div>

            {/* Description & CTAs */}
            <div className="opacity-0 animate-fade-in-up animate-delay-200">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty max-w-xl mx-auto lg:mx-0">
                {descriptionWithGlow(t("hero.description"))}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="group">
                  <a href="#about">
                    {t("hero.viewWork")}
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    {t("hero.contact")}
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    {t("hero.resume")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block opacity-0 animate-fade-in-up animate-delay-400">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
            <div className="w-px h-12 bg-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
