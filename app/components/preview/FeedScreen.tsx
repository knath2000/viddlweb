import React from "react";
import * as Lucide from "lucide-react";

const FEED_ITEMS = [
  { site: "Native", title: "Featured studio clip", meta: "1080p · 12:34", accent: "#FF6B6B" },
  { site: "Feed source", title: "New provider pick", meta: "HLS · 23:17", accent: "#B388FF" },
  { site: "Saved source", title: "Fresh feed entry", meta: "720p · saved", accent: "#00BFFF" },
  { site: "Direct MP4", title: "Native MP4 result", meta: "360p / 720p / 1080p", accent: "#7FFF00" },
] as const;

export function FeedScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Feed</div>
          <div className="text-xs text-white/40">Built-in sources · native extractors · previews</div>
        </div>
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          {["All sites", "HD", "Recent", "Favorites"].map((item, index) => (
            <div
              key={item}
              className={`rounded-full border px-2.5 py-1 ${
                index === 0
                  ? "border-[#FF6B6B]/40 bg-[#FF6B6B]/15 text-[#FFA3A3]"
                  : "border-white/10 bg-white/5 text-white/45"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-[1fr_auto] gap-2">
        <div className="glass-input flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/60">
          <Lucide.Search className="h-4 w-4 text-white/40" />
          <span>Search feed, tags, studios...</span>
        </div>
        <button type="button" className="secondary-btn !px-3 !py-2 !text-xs">
          <Lucide.RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {FEED_ITEMS.map((item, index) => (
          <div key={`${item.site}-${item.title}`} className="library-card group">
            <div className="thumbnail-placeholder aspect-video">
              <div className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white" style={{ backgroundColor: item.accent }}>
                {item.site}
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="h-1 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full bg-white/70" style={{ width: index === 1 ? "42%" : "68%" }} />
                </div>
              </div>
              <button type="button" aria-label="Favorite feed item" className="absolute right-2 top-2 rounded-full border border-white/15 bg-black/50 p-1.5 text-white/80">
                <Lucide.Heart className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="p-3">
              <div className="truncate text-sm font-medium tracking-tight text-white/90">{item.title}</div>
              <div className="mt-1 flex items-center justify-between gap-2 text-xs text-white/45">
                <span>{item.meta}</span>
                <span className="font-mono">Extract</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
