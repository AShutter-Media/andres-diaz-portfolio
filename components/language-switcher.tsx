"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage, languages } from "@/lib/language-context";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".language-switcher")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  if (!mounted) return null;

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="language-switcher fixed bottom-6 left-6 z-50">
      {/* Language Menu */}
      <div
        className={`absolute bottom-14 left-0 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-2 min-w-[160px]">
          <p className="text-xs text-muted-foreground px-3 py-2 uppercase tracking-wide">
            {t("language")}
          </p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                language === lang.code
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant="outline"
        className="h-12 w-12 rounded-full shadow-lg bg-background/80 backdrop-blur-md border-border hover:bg-muted transition-all duration-300"
        aria-label={t("language")}
      >
        <span className="text-lg">{currentLang?.flag || "🌐"}</span>
      </Button>
    </div>
  );
}
