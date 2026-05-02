import React from "react";
import * as Lucide from "lucide-react";
import { NeonBadge } from "./NeonBadge";
import { SidebarMockup } from "./SidebarMockup";
import { PLATFORM_ICONS } from "../lib/constants";

interface AppWindowMockupProps {
  variant?: "full" | "hero";
}

export function AppWindowMockup({ variant = "full" }: AppWindowMockupProps) {
  const isHero = variant === "hero";

  return (
    <div className="mac-window w-full max-w-[980px] mx-auto shadow-2xl float-mockup">
      {/* Title Bar */}
      <div className="mac-titlebar">
        <div className="traffic-lights">
          <div className="traffic-light red" />
          <div className="traffic-light yellow" />
          <div className="traffic-light green" />
        </div>
        <div className="flex-1 text-center text-xs text-white/60 font-medium tracking-wide">
          Video Downloader
        </div>
        <div className="w-16" /> {/* spacer */}
      </div>

      <div className="flex h-[520px]">
        {/* Sidebar */}
        <div className="hidden md:block w-[250px] flex-shrink-0 border-r border-white/10">
          <SidebarMockup activeLabel="Home" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 flex flex-col bg-[#0F0F14]">
          {/* Top Header Bar */}
          <div className="h-14 border-b border-white/10 px-5 flex items-center justify-between gap-3 overflow-hidden">
            <div className="flex min-w-0 items-center gap-3">
              <div className="font-semibold text-lg tracking-tight">Home</div>
              <NeonBadge variant="green">YT-DLP READY</NeonBadge>
              <NeonBadge variant="gold">PRO</NeonBadge>
              {!isHero && (
                <div className="hidden xl:block text-[10px] px-2 py-0.5 rounded-full bg-[#7FFF00]/10 border border-[#7FFF00]/30 text-[#7FFF00]">
                  Daily boost
                </div>
              )}
            </div>

            {!isHero && (
              <div className="hidden xl:flex items-center gap-2 text-xs text-white/50">
                <div className="px-2 py-0.5 rounded bg-white/5">1700+ sites</div>
              </div>
            )}
          </div>

          {/* Platform Rail */}
          <div className="px-5 pt-5 pb-3">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="text-xs uppercase tracking-[1px] text-white/40 font-medium">Sources</div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="flex gap-3">
              {PLATFORM_ICONS.map((p, i) => (
                <div
                  key={i}
                  className="platform-icon text-[10px]"
                  style={{ backgroundColor: p.color }}
                >
                  {p.name}
                </div>
              ))}
              <div className="platform-icon bg-white/10 text-[9px] border-white/20">+18</div>
            </div>
          </div>

          {/* Paste Input */}
          <div className="px-5">
            <div className="glass rounded-xl p-1 flex items-center gap-2 border border-white/10">
              <div className="flex-1 px-4 py-3 text-sm text-white/60 flex items-center gap-2">
                <Lucide.Link2 className="w-4 h-4 text-white/40" />
                Paste URLs or drag files here...
              </div>
              <div className="px-3 py-1 text-[10px] rounded-full bg-white/5 border border-white/10 text-white/50 font-mono mr-1">
                ⌘⏎
              </div>
            </div>
          </div>

          {/* Extract Button */}
          <div className="px-5 pt-4">
            <button className="gradient-btn w-full py-3 text-base">
              <Lucide.Zap className="w-4 h-4" />
              Extract All
            </button>
          </div>

          {/* Empty State / Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B20] to-[#B388FF20] flex items-center justify-center border border-white/10">
                <Lucide.Clapperboard className="w-8 h-8 text-white/60" />
              </div>
            </div>
            <div className="text-lg font-medium tracking-tight text-white/90 mb-1">Ready to download</div>
            <div className="text-sm text-white/50 max-w-[260px]">
              Paste a supported video page above or drop multiple links.
            </div>

            <div className="flex gap-2 mt-6">
              <NeonBadge variant="sky">HLS</NeonBadge>
              <NeonBadge variant="coral">4K</NeonBadge>
              <NeonBadge variant="green">MP4</NeonBadge>
            </div>

            {!isHero && (
              <div className="mt-3 text-[10px] flex items-center gap-1 text-white/40">
                <span className="inline-block w-3 h-3 rounded-full bg-[#FF6B6B]/60" /> helper online
              </div>
            )}
          </div>

          {/* Bottom Status */}
          <div className="h-9 border-t border-white/10 px-5 flex items-center text-[11px] text-white/40">
            Queue: 0 • Library: 128 items • Transfers: idle
          </div>
        </div>
      </div>
    </div>
  );
}
