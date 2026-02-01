"use client";

import { useLanguage } from "@/lib/language-context";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("about.title")}
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <p className="about-text-gradient text-lg lg:text-xl leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="about-text-gradient text-lg lg:text-xl leading-relaxed">
              {t("about.p2")}
            </p>
            <p className="about-text-gradient text-lg lg:text-xl leading-relaxed">
              {t("about.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
