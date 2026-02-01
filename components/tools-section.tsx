"use client";

import { useLanguage } from "@/lib/language-context";

type ToolItem = { name: string; desc: string };

const toolCategories: { key: "creativeSoftware" | "workflowAutomation" | "osPlatforms" | "hardware" | "musicInstruments"; tools: ToolItem[] }[] = [
  {
    key: "creativeSoftware",
    tools: [
      { name: "Premiere Pro", desc: "Edit & color grade video." },
      { name: "After Effects", desc: "Motion graphics & VFX." },
      { name: "Photoshop", desc: "Photo edit & compositing." },
      { name: "Lightroom", desc: "Catalog & color." },
      { name: "Illustrator", desc: "Vector graphics & branding." },
      { name: "InDesign", desc: "Layout & publishing." },
      { name: "Acrobat Pro", desc: "PDFs & documents." },
      { name: "DaVinci Resolve", desc: "Edit & color in one." },
      { name: "Final Cut Pro", desc: "Fast narrative editing." },
      { name: "Motion", desc: "Titles & motion for FCP." },
      { name: "Compressor", desc: "Encode & deliver." },
      { name: "Logic Pro X", desc: "Music production & scoring." },
      { name: "Avid Pro Tools", desc: "Audio post & mixing." },
      { name: "Adobe Audition", desc: "Audio edit & cleanup." },
      { name: "Blender", desc: "3D & motion graphics." },
      { name: "CapCut", desc: "Quick social edits." },
      { name: "Insta360 Studio", desc: "360° workflow." },
      { name: "DJI Studio", desc: "Drone footage." },
      { name: "GoPro Quik", desc: "Action cams." },
      { name: "Luminar", desc: "Photo enhancement." },
      { name: "Canva", desc: "Quick visuals & social." },
      { name: "Keynote", desc: "Presentations." },
      { name: "Freeform", desc: "Boards & ideation." },
      { name: "PowerPoint", desc: "Decks & slides." },
      { name: "Microsoft Office Suite", desc: "Docs, sheets, collaboration." },
      { name: "Professional AI Tools & Agents", desc: "Automate & enhance." },
    ],
  },
  {
    key: "workflowAutomation",
    tools: [
      { name: "Advanced Plugins", desc: "Extend apps, save time." },
      { name: "Media Reformatting", desc: "Transcode & adapt." },
      { name: "Dynamic Captions", desc: "Auto captions & subs." },
      { name: "Batch Processing", desc: "Bulk export & jobs." },
    ],
  },
  {
    key: "osPlatforms",
    tools: [
      { name: "macOS", desc: "Daily driver." },
      { name: "Windows", desc: "Cross-platform work." },
      { name: "Linux", desc: "Servers & dev." },
    ],
  },
  {
    key: "hardware",
    tools: [
      { name: "High-End Workstations", desc: "Heavy edits & render." },
      { name: "Professional Cameras", desc: "Shoot & capture." },
      { name: "Studio Microphones", desc: "Voice & instruments." },
      { name: "TourBox Elite Plus", desc: "Shortcuts & control." },
      { name: "DaVinci Speed Editor", desc: "Cut on hardware." },
      { name: "Multi-Monitor Setup", desc: "Timeline & preview." },
      { name: "Audio Monitors", desc: "Mix & master." },
    ],
  },
  {
    key: "musicInstruments",
    tools: [
      { name: "Drums", desc: "Play & compose." },
      { name: "Guitars", desc: "Play & compose." },
      { name: "Bass", desc: "Play & compose." },
      { name: "Keyboards", desc: "Play & compose." },
      { name: "Synthesizers", desc: "Sound design." },
      { name: "Professional Audio Interfaces", desc: "Record & monitor." },
      { name: "Studio Microphones", desc: "Capture & overdubs." },
      { name: "Orchestral Instruments", desc: "Arrange & score." },
    ],
  },
];

export function ToolsSection() {
  const { t } = useLanguage();
  return (
    <section id="tools" className="pt-12 lg:pt-16 pb-12 lg:pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground sticky top-24">
              {t("tools.title")}
            </p>
          </div>
          <div className="lg:col-span-2 space-y-12">
            {toolCategories.map((category) => (
              <div key={category.key}>
                <h3 className="hero-name-gradient text-sm font-medium mb-4 uppercase tracking-wide">
                  {t(`tools.${category.key}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="tool-pill-wrapper group/pill relative">
                      <span className="tool-pill px-3 py-1.5 text-sm text-secondary-foreground rounded-full inline-block">
                        {tool.name}
                      </span>
                      <span
                        className="tool-pill-tooltip absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2 py-1 text-xs text-muted-foreground bg-popover border border-border rounded shadow-sm opacity-0 pointer-events-none transition-opacity duration-150 max-w-[180px] text-center z-10 group-hover/pill:opacity-100"
                        role="tooltip"
                      >
                        {tool.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Work Environment Note */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground leading-relaxed">
                Equipped with a dedicated private office, high-speed internet,
                and years of experience knowing how to use each tool to its full
                potential. My focus is always on{" "}
                <span className="text-foreground tools-focus-glow">speed</span>,{" "}
                <span className="text-foreground tools-focus-glow">quality</span>, and{" "}
                <span className="text-foreground tools-focus-glow">reliability</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
