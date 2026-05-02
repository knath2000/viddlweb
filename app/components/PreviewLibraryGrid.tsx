import React from "react";
import * as Lucide from "lucide-react";
import { LIBRARY_SAMPLES } from "../lib/constants";
import { MascotSticker } from "./MascotSticker";

export function PreviewLibraryGrid() {
  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <MascotSticker mascot="libraryArchive" size="tiny" className="hidden sm:block" />
          <div>
            <div className="font-semibold tracking-tight">Library</div>
            <div className="text-xs text-white/40">128 videos • 42.3 GB</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="glass-input flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-white/60 w-56">
            <Lucide.Search className="w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Search library..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
            />
          </div>
          <div className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70">128</div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {LIBRARY_SAMPLES.map((item, index) => (
          <div key={index} className="library-card group">
            {/* Thumbnail */}
            <div className="thumbnail-placeholder aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center">
                  <Lucide.Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="video-chip">VIDEO</div>
                {index % 3 === 0 && <div className="promo-sticker text-[8px] px-1 py-0 bg-[#FFD700]/20 border-[#FFD700]/40 text-[#FCD34D]">HD</div>}
                {index % 2 === 0 && <div className="promo-sticker text-[8px] px-1 py-0 bg-[#7FFF00]/20 border-[#7FFF00]/40 text-[#7FFF00]">Saved</div>}
              </div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/70 px-1.5 rounded text-white/80">
                {item.duration}
              </div>
            </div>

            {/* Meta */}
            <div className="p-3">
              <div className="font-medium text-sm tracking-tight line-clamp-1 group-hover:text-[#FF6B6B] transition-colors">
                {item.title}
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-white/50">
                <span>{item.date}</span>
                <span className="font-mono">MP4 • 1080p</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
