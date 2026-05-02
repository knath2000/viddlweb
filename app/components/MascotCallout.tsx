import React from "react";
import { MascotSticker } from "./MascotSticker";

export function MascotCallout() {
  return (
    <div className="mascot-callout hidden xl:block absolute -bottom-10 -right-6 xl:-right-10 z-30 pointer-events-none overflow-visible">
      <div className="relative flex items-end gap-2">
        <MascotSticker mascot="hero" size="section" floating decorative={false} className="relative z-10 flex-shrink-0" />

        <div className="speech-bubble relative z-20 -mb-4 max-w-[148px] rounded-2xl bg-white px-3.5 py-2.5 text-[11px] leading-tight text-[#0A0A0F] shadow-xl border border-white/80">
          Drag links in.<br />I’ll sort the magic.
          <div className="absolute -left-1.5 bottom-5 w-3 h-3 rotate-45 bg-white border-l border-b border-white/80" />
        </div>
      </div>
    </div>
  );
}
