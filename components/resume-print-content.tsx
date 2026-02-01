"use client";

import { useLanguage } from "@/lib/language-context";

const skillKeys = [
  "videoEditing",
  "photography",
  "graphicDesign",
  "musicProduction",
  "webDevelopment",
  "appDevelopment",
  "socialMedia",
  "motionGraphics",
] as const;

const toolCategoryKeys = [
  "creativeSoftware",
  "workflowAutomation",
  "osPlatforms",
  "hardware",
  "musicInstruments",
] as const;

const philosophyValueKeys = [
  { key: "precisionTitle" as const, descKey: "precisionDesc" as const },
  { key: "collaborationTitle" as const, descKey: "collaborationDesc" as const },
  { key: "innovationTitle" as const, descKey: "innovationDesc" as const },
  { key: "integrityTitle" as const, descKey: "integrityDesc" as const },
] as const;

const philosophySkillKeys = [
  "punctual",
  "teamPlayer",
  "quickLearner",
  "workEthic",
  "problemSolver",
  "detailOriented",
  "adaptable",
  "selfMotivated",
  "creativeThinker",
  "leadership",
  "timeManagement",
  "clientRelations",
] as const;

const moreAboutKeys = [
  "bornDate",
  "bornVenezuela",
  "usCitizen",
  "loveTravel",
  "contentCreator",
  "musicProducer",
  "youtubeChannels",
  "italianFood",
  "languageLearner",
  "loveDriving",
  "networking",
  "lifelongLearner",
] as const;

const educationKeys = [
  { key: "highSchool" as const, yearKey: "highSchoolYear" as const, instKey: "highSchoolInst" as const, locKey: "highSchoolLoc" as const, descKey: "highSchoolDesc" as const },
  { key: "internationalStudies" as const, yearKey: "internationalYear" as const, instKey: "internationalInst" as const, locKey: "internationalLoc" as const, descKey: "internationalDesc" as const },
  { key: "continuingEd" as const, yearKey: "continuingYear" as const, instKey: "continuingInst" as const, locKey: "continuingLoc" as const, descKey: null },
] as const;

const continuingTrainingKeys = [
  { titleKey: "creativeTools" as const, descKey: "creativeToolsDesc" as const },
  { titleKey: "photographyTraining" as const, descKey: "photographyTrainingDesc" as const },
  { titleKey: "audioProduction" as const, descKey: "audioProductionDesc" as const },
  { titleKey: "marketingBusiness" as const, descKey: "marketingBusinessDesc" as const },
  { titleKey: "webAppDev" as const, descKey: "webAppDevDesc" as const },
  { titleKey: "leadershipSoftSkills" as const, descKey: "leadershipSoftSkillsDesc" as const },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andresdiazwork" },
  { label: "GitHub", href: "https://github.com/AShutter-Media" },
  { label: "Instagram", href: "https://www.instagram.com/imandresdiaz" },
  { label: "Threads", href: "https://www.threads.com/@imandresdiaz" },
];

export function ResumePrintContent() {
  const { t } = useLanguage();

  return (
    <div className="resume-print-content max-w-3xl mx-auto px-6 py-8 text-foreground print:py-0 print:px-0 print:max-w-full">
      {/* Header con barra inferior — más presencia visual */}
      <header className="resume-print-header resume-print-header-bar mb-8 print:mb-4">
        <h1 className="resume-print-name text-3xl font-bold tracking-tight text-foreground print:text-black print:text-2xl">
          {t("hero.name")}
        </h1>
        <p className="resume-print-subtitle text-sm uppercase tracking-[0.2em] text-muted-foreground mt-2 print:text-gray-600 print:mt-1 print:text-xs">
          {t("hero.subtitle")}
        </p>
        <div className="resume-print-contact-strip mt-6 py-4 px-4 rounded-lg bg-muted/50 border border-border print:bg-gray-100 print:border-gray-300 print:rounded print:mt-3 print:py-2 print:px-3">
          <p className="text-sm text-muted-foreground print:text-gray-700">
            Houston, TX & Miami, FL · {t("philosophy.remote")} / {t("philosophy.hybrid")} / {t("philosophy.onSite")} · English / Spanish
          </p>
          <p className="text-sm mt-1 print:text-gray-800">
            andresdiazwork@gmail.com · +1 (346) 280-9564 · ashuttermedia.com
          </p>
          <p className="text-xs text-muted-foreground mt-1 print:text-gray-600">
            {socialLinks.map((l) => l.label).join(" · ")}
          </p>
        </div>
      </header>

      {/* About — título con barra lateral */}
      <section className="resume-print-section mb-6 print:mb-4">
        <h2 className="resume-print-section-title">
          {t("about.title")}
        </h2>
        <div className="resume-print-body pl-5">
          <p className="text-sm leading-relaxed print:text-black">{t("about.p1")}</p>
          <p className="text-sm leading-relaxed mt-3 print:text-black">{t("about.p2")}</p>
          <p className="text-sm leading-relaxed mt-3 print:text-black">{t("about.p3")}</p>
        </div>
      </section>

      {/* Skills — dos columnas, más compacto */}
      <section className="resume-print-section mb-6 print:mb-4">
        <h2 className="resume-print-section-title">
          {t("skills.title")}
        </h2>
        <ul className="resume-print-body resume-print-two-cols pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {skillKeys.map((key) => (
            <li key={key} className="flex gap-2">
              <span className="resume-print-bullet text-muted-foreground print:text-gray-500">—</span>
              <span>
                <strong className="text-sm font-medium print:text-black">{t(`skills.${key}`)}</strong>
                <span className="text-sm text-muted-foreground print:text-gray-700"> — {t(`skills.${key}Desc`)}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tools */}
      <section className="resume-print-section mb-6 print:mb-4">
        <h2 className="resume-print-section-title">
          {t("tools.title")}
        </h2>
        <div className="resume-print-body pl-5">
          <p className="text-sm text-muted-foreground print:text-gray-700">
            {toolCategoryKeys.map((k) => t(`tools.${k}`)).join(" · ")}
          </p>
          <p className="text-xs text-muted-foreground mt-2 print:text-gray-600">
            Adobe Creative Suite, DaVinci Resolve, Final Cut Pro, Logic Pro, React, Next.js, macOS, Windows.
          </p>
        </div>
      </section>

      {/* Philosophy — puede partir entre páginas */}
      <section className="resume-print-section mb-6 print:mb-4">
        <h2 className="resume-print-section-title">
          {t("philosophy.title")}
        </h2>
        <div className="resume-print-body pl-5 space-y-4 print:space-y-2">
          <ul className="space-y-2 print:space-y-1">
            {philosophyValueKeys.map(({ key, descKey }) => (
              <li key={key} className="flex gap-2">
                <span className="resume-print-bullet text-muted-foreground print:text-gray-500">—</span>
                <span>
                  <strong className="text-sm font-medium print:text-black">{t(`philosophy.${key}`)}</strong>
                  <span className="text-sm text-muted-foreground print:text-gray-700"> — {t(`philosophy.${descKey}`)}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="resume-print-highlight-box py-3 px-4 rounded-md bg-muted/30 border border-border print:bg-gray-50 print:border-gray-200 print:rounded print:py-2 print:px-3">
            <p className="text-sm text-muted-foreground print:text-gray-700">
              <strong className="print:text-black">Based in:</strong> Houston, TX & Miami, FL ·{" "}
              <strong className="print:text-black">{t("philosophy.workPreferences")}:</strong> {t("philosophy.remote")} / {t("philosophy.hybrid")} / {t("philosophy.onSite")} ·{" "}
              <strong className="print:text-black">{t("philosophy.languages")}:</strong> English / Spanish (Fully bilingual)
            </p>
          </div>
          <p className="text-xs text-muted-foreground print:text-gray-600">
            <strong className="print:text-black">{t("philosophy.professionalSkills")}:</strong>{" "}
            {philosophySkillKeys.map((k) => t(`philosophy.${k}`)).join(", ")}
          </p>
          <p className="text-xs text-muted-foreground print:text-gray-600">
            <strong className="print:text-black">{t("philosophy.moreAboutMe")}:</strong>{" "}
            {moreAboutKeys.map((k) => t(`philosophy.${k}`)).join(", ")}
          </p>
        </div>
      </section>

      {/* Education — puede partir entre páginas */}
      <section className="resume-print-section mb-6 print:mb-4">
        <h2 className="resume-print-section-title">
          {t("education.title")}
        </h2>
        <div className="resume-print-body pl-5 space-y-6 print:space-y-3">
          {educationKeys.map(({ key, yearKey, instKey, locKey, descKey }) => (
            <div key={key} className="resume-print-edu-item border-l-2 border-border pl-4 print:border-gray-300">
              <div className="flex justify-between items-start gap-2">
                <strong className="text-sm font-medium print:text-black">{t(`education.${key}`)}</strong>
                <span className="text-xs text-muted-foreground whitespace-nowrap print:text-gray-600">{t(`education.${yearKey}`)}</span>
              </div>
              <p className="text-xs text-muted-foreground print:text-gray-700 mt-0.5">{t(`education.${instKey}`)}</p>
              <p className="text-xs text-muted-foreground print:text-gray-700">{t(`education.${locKey}`)}</p>
              {descKey && (
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed print:text-gray-700">{t(`education.${descKey}`)}</p>
              )}
            </div>
          ))}
          <div className="pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2 print:text-black">
              {t("education.areasOfTraining")}
            </h3>
            <ul className="space-y-1 text-xs text-muted-foreground print:text-gray-700">
              {continuingTrainingKeys.map(({ titleKey, descKey }) => (
                <li key={titleKey}>
                  <strong className="print:text-black">{t(`education.${titleKey}`)}:</strong> {t(`education.${descKey}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact — fluye al final de pág 2 */}
      <section className="resume-print-section mb-0">
        <h2 className="resume-print-section-title">
          {t("contact.title")}
        </h2>
        <div className="resume-print-body pl-5">
          <p className="text-sm leading-relaxed print:text-black">{t("contact.description")}</p>
        </div>
      </section>
    </div>
  );
}
