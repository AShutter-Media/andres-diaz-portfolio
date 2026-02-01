"use client";

import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import { ResumePrintContent } from "@/components/resume-print-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

function ResumePageActions() {
  const { t } = useLanguage();
  return (
    <div className="no-print flex flex-wrap items-center gap-4 max-w-3xl mx-auto px-6 py-6 border-b border-border bg-background/95 sticky top-0 z-10">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t("backToSite")}
        </Link>
      </Button>
      <Button
        size="sm"
        onClick={() => window.print()}
        className="gap-2 ml-auto"
        aria-label={t("downloadPdf")}
      >
        <Download className="h-4 w-4" />
        {t("downloadPdf")}
      </Button>
    </div>
  );
}

export default function ResumePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>
        <div className="resume-print-page min-h-screen bg-background">
          <ResumePageActions />
          <main>
            <ResumePrintContent />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
