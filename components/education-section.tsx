"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const educationKeys = [
  { key: "highSchool" as const, icon: GraduationCap },
  { key: "internationalStudies" as const, icon: BookOpen },
  { key: "continuingEd" as const, icon: Award },
] as const;

const continuingKeys = [
  { titleKey: "creativeTools" as const, descKey: "creativeToolsDesc" as const },
  { titleKey: "photographyTraining" as const, descKey: "photographyTrainingDesc" as const },
  { titleKey: "audioProduction" as const, descKey: "audioProductionDesc" as const },
  { titleKey: "marketingBusiness" as const, descKey: "marketingBusinessDesc" as const },
  { titleKey: "webAppDev" as const, descKey: "webAppDevDesc" as const },
  { titleKey: "leadershipSoftSkills" as const, descKey: "leadershipSoftSkillsDesc" as const },
] as const;

export function EducationSection() {
  const { t } = useLanguage();
  return (
    <section id="education" className="pt-12 lg:pt-16 pb-12 lg:pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("education.title")}
            </p>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {educationKeys.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={`flex gap-6 ${index !== educationKeys.length - 1 ? "pb-12 border-b border-border" : ""}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {t(`education.${key}`)}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {t(`education.${key === "highSchool" ? "highSchoolYear" : key === "internationalStudies" ? "internationalYear" : "continuingYear"}`)}
                    </span>
                  </div>
                  <p className="text-foreground">{t(`education.${key === "highSchool" ? "highSchoolInst" : key === "internationalStudies" ? "internationalInst" : "continuingInst"}`)}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(`education.${key === "highSchool" ? "highSchoolLoc" : key === "internationalStudies" ? "internationalLoc" : "continuingLoc"}`)}
                  </p>
                  {key === "highSchool" && (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t("education.highSchoolDesc")}
                    </p>
                  )}
                  {key === "internationalStudies" && (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t("education.internationalDesc")}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium mb-6 uppercase tracking-wide">
                <span className="text-foreground tools-focus-glow">{t("education.areasOfTraining")}</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {continuingKeys.map(({ titleKey, descKey }) => (
                  <div key={titleKey}>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      {t(`education.${titleKey}`)}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`education.${descKey}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
