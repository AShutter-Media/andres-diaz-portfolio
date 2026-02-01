"use client";

import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <a href="https://www.ashuttermedia.com" target="_blank" rel="noopener noreferrer" className="text-foreground tools-focus-glow hover:opacity-90 transition-opacity">
              © {currentYear} Andres Diaz.
            </a>{" "}{t("footer.rights")}
          </p>
          <a
            href="https://www.ashuttermedia.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            {t("footer.checkPortfolio")}
          </a>
          <p className="text-sm text-muted-foreground">
            Designed & Built by{" "}
            <a href="https://www.heytrese.com" target="_blank" rel="noopener noreferrer" className="text-foreground tools-focus-glow hover:opacity-90 transition-opacity">
              Andres Diaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
