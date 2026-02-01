"use client";

import {
  Video,
  Camera,
  Palette,
  Music,
  Globe,
  Smartphone,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const ASHUTTER_ABOUT = "https://www.ashuttermedia.com/about";
const ASHUTTER_APPS_BLOG = "https://www.ashuttermedia.com/blog/3-apps-everyone-needs";
const MIAMI_STUDIOZ_ABOUT = "https://www.miamistudioz.com/about-us";
const HEYTRESE = "https://www.heytrese.com";
const SOLVED_PUZZLE_CASES = "https://solvedpuzzle.com/case-studies/";
const SHUTTERSTOCK_ASHUTTER = "https://www.shutterstock.com/g/ashuttermedia";

const skillKeys = [
  { key: "videoEditing" as const, icon: Video, href: ASHUTTER_ABOUT },
  { key: "photography" as const, icon: Camera, href: ASHUTTER_ABOUT },
  { key: "graphicDesign" as const, icon: Palette, href: ASHUTTER_ABOUT },
  { key: "musicProduction" as const, icon: Music, href: MIAMI_STUDIOZ_ABOUT },
  { key: "webDevelopment" as const, icon: Globe, href: HEYTRESE },
  { key: "appDevelopment" as const, icon: Smartphone, href: ASHUTTER_APPS_BLOG },
  { key: "socialMedia" as const, icon: TrendingUp, href: SOLVED_PUZZLE_CASES },
  { key: "motionGraphics" as const, icon: Sparkles, href: SHUTTERSTOCK_ASHUTTER },
];

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="pt-12 lg:pt-16 pb-12 lg:pb-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("skills.title")}
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {skillKeys.map(({ key, icon: Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block skill-card-outer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <svg
                    className="skill-card-line"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <rect
                      pathLength="100"
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      rx="2.6"
                      ry="2.6"
                      fill="none"
                    />
                  </svg>
                  <div className="skill-card-inner">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {t(`skills.${key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`skills.${key}Desc`)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
