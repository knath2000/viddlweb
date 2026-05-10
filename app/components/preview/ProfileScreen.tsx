import React from "react";
import * as Lucide from "lucide-react";
import { NeonBadge } from "../NeonBadge";

const PROFILE_SIGNALS = [
  { label: "Top performers", value: "12 recurring", color: "#FCD34D" },
  { label: "Categories", value: "8 ranked", color: "#FF1493" },
  { label: "Quality", value: "1080p preferred", color: "#7FFF00" },
] as const;

const PROFILE_SECTIONS = [
  "Taste summary",
  "Top performers",
  "Category mix",
  "How this profile was built",
] as const;

export function ProfileScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Profile</div>
          <div className="text-xs text-white/40">AI analysis from favorites, Feed evidence, and Library history</div>
        </div>
        <NeonBadge variant="gold">PRO</NeonBadge>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <section className="glass-card min-h-[360px] rounded-xl p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FCD34D]/15 text-[#FCD34D]">
              <Lucide.WandSparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-white/85">AI Profile analysis</div>
              <div className="text-xs text-white/40">Formatted into readable sections</div>
            </div>
          </div>

          <div className="space-y-3">
            {PROFILE_SECTIONS.map((section, index) => (
              <div key={section} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-[#FCD34D]">
                  {section}
                </div>
                <div className="space-y-1.5">
                  <div className={`h-2 rounded-full bg-white/15 ${index === 0 ? "w-11/12" : "w-9/12"}`} />
                  <div className={`h-2 rounded-full bg-white/10 ${index === 3 ? "w-7/12" : "w-10/12"}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-3">
          {PROFILE_SIGNALS.map((signal) => (
            <div key={signal.label} className="glass-card rounded-xl p-4">
              <div className="mb-2 text-xs text-white/40">{signal.label}</div>
              <div className="text-lg font-semibold tracking-tight" style={{ color: signal.color }}>
                {signal.value}
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-[#FCD34D]/20 bg-[#FCD34D]/[0.05] p-4 text-xs leading-relaxed text-white/55">
            Regenerate after new favorites or Library history to refresh the profile evidence bundle.
          </div>
        </aside>
      </div>
    </div>
  );
}
