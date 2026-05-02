import React from "react";
import * as Lucide from "lucide-react";
import { LIBRARY_SAMPLES } from "../../lib/constants";

export function LibraryScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Library</div>
          <div className="text-xs text-white/40">128 videos · 42.3 GB</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="glass-input flex w-52 items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-white/60">
            <Lucide.Search className="h-3.5 w-3.5" />
            <input
              type="text"
              placeholder="Search library..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
            />
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">128</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {LIBRARY_SAMPLES.map((item, index) => (
          <div key={item.title} className="library-card group">
            <div className="thumbnail-placeholder aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60">
                  <Lucide.Play className="ml-0.5 h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute right-2 top-2 flex gap-1">
                <div className="video-chip">VIDEO</div>
                {index % 3 === 0 && <div className="promo-sticker bg-[#FFD700]/20 px-1 py-0 text-[8px] text-[#FCD34D]">HD</div>}
                {index % 2 === 0 && <div className="promo-sticker bg-[#7FFF00]/20 px-1 py-0 text-[8px] text-[#7FFF00]">Saved</div>}
              </div>
              <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 font-mono text-[10px] text-white/80">
                {item.duration}
              </div>
            </div>

            <div className="p-3">
              <div className="truncate text-sm font-medium tracking-tight transition-colors group-hover:text-[#FF6B6B]">
                {item.title}
              </div>
              <div className="mt-1 flex items-center justify-between gap-2 text-xs text-white/50">
                <span>{item.date}</span>
                <span className="font-mono">MP4 · 1080p</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
