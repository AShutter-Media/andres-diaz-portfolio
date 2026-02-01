"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

function descriptionWithGlow(
  text: string,
  phrases: [string, string, string]
): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  const validPhrases = phrases.filter((p) => p && p.length > 0);

  while (remaining.length > 0) {
    let bestStart = remaining.length;
    let bestPhrase = "";

    for (const phrase of validPhrases) {
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

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andresdiazwork" },
  { label: "GitHub", href: "https://github.com/AShutter-Media" },
  { label: "Instagram", href: "https://www.instagram.com/imandresdiaz" },
  { label: "Threads", href: "https://www.threads.com/@imandresdiaz" },
];

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="pt-12 lg:pt-16 pb-8 lg:pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("nav.contact")}
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="hero-name-gradient contact-title-glow text-3xl lg:text-4xl font-bold mb-6 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {descriptionWithGlow(t("contact.description"), [
                t("contact.glowDedication"),
                t("contact.glowReliability"),
                t("contact.glowGrow"),
              ])}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
              <Button size="lg" asChild>
                <a href="mailto:andresdiazwork@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("contact.emailMe")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+13462809564">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("contact.callText")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.ashuttermedia.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.visitPortfolio")}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {t("contact.findOnline")}
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
