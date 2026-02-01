"use client";

import {
  Zap,
  MessageSquare,
  RefreshCw,
  Heart,
  MapPin,
  Globe2,
  Languages,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const PHILOSOPHY_ANIM_CLASSES: Record<string, string> = {
  zap: "philosophy-icon-anim philosophy-icon-anim-zap",
  message: "philosophy-icon-anim philosophy-icon-anim-message",
  refresh: "philosophy-icon-anim philosophy-icon-anim-refresh",
  heart: "philosophy-icon-anim philosophy-icon-anim-heart",
};

const valueKeys = [
  { key: "precisionTitle" as const, descKey: "precisionDesc" as const, icon: Zap, iconAnim: "zap" },
  { key: "collaborationTitle" as const, descKey: "collaborationDesc" as const, icon: MessageSquare, iconAnim: "message" },
  { key: "innovationTitle" as const, descKey: "innovationDesc" as const, icon: RefreshCw, iconAnim: "refresh" },
  { key: "integrityTitle" as const, descKey: "integrityDesc" as const, icon: Heart, iconAnim: "heart" },
] as const;

const philosophySkillKeys = ["punctual", "teamPlayer", "quickLearner", "workEthic", "problemSolver", "detailOriented", "adaptable", "selfMotivated", "creativeThinker", "leadership", "timeManagement", "clientRelations"] as const;
const moreAboutKeys = ["bornDate", "bornVenezuela", "usCitizen", "loveTravel", "contentCreator", "musicProducer", "youtubeChannels", "italianFood", "languageLearner", "loveDriving", "networking", "lifelongLearner"] as const;

export function PhilosophySection() {
  const { t } = useLanguage();
  const details = [
    { icon: MapPin, labelKey: "Based in", value: "Houston, TX", sublabel: "& Miami, FL" },
    { icon: Globe2, labelKey: "workPreferences", value: `${t("philosophy.remote")} / ${t("philosophy.hybrid")} / ${t("philosophy.onSite")}`, sublabel: null },
    { icon: Languages, labelKey: "languages", value: "English / Spanish", sublabel: "Fully bilingual" },
  ];
  return (
    <section id="philosophy" className="pt-12 lg:pt-16 pb-12 lg:pb-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("philosophy.title")}
            </p>
          </div>
          <div className="lg:col-span-2 space-y-16">
            <div className="grid sm:grid-cols-2 gap-8">
              {valueKeys.map(({ key, descKey, icon: Icon, iconAnim }) => (
                <div key={key} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center overflow-visible">
                      <span className={PHILOSOPHY_ANIM_CLASSES[iconAnim]}>
                        <Icon className="h-4 w-4 text-foreground" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground mb-1">
                      {t(`philosophy.${key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`philosophy.${descKey}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-12 border-t border-border">
              <div className="grid sm:grid-cols-3 gap-8">
                {details.map((d) => (
                  <div key={d.labelKey} className="flex gap-3">
                    <d.icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {d.labelKey === "Based in" ? "Based in" : t(`philosophy.${d.labelKey}`)}
                      </p>
                      <p className="text-foreground font-medium">{d.value}</p>
                      {d.sublabel && (
                        <p className="text-sm text-muted-foreground mt-0.5">{d.sublabel}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-5 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
                {t("philosophy.professionalSkills")}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {philosophySkillKeys.map((k) => (
                  <span key={k} className="px-3 py-1.5 bg-background border border-border rounded-full">
                    {t(`philosophy.${k}`)}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-5 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
                {t("philosophy.moreAboutMe")}
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {moreAboutKeys.map((k) => (
                  <span key={k} className="px-3 py-1.5 bg-background border border-border rounded-full">
                    {t(`philosophy.${k}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
