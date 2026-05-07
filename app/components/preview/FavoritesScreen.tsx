import React from "react";
import * as Lucide from "lucide-react";
import { LIBRARY_SAMPLES } from "../../lib/constants";

const FAVORITES = [
  { title: LIBRARY_SAMPLES[1].title, site: "OnlyFan420", age: "Saved today" },
  { title: LIBRARY_SAMPLES[0].title, site: "HQPorner", age: "Saved yesterday" },
  { title: LIBRARY_SAMPLES[4].title, site: "AllPornStream", age: "Saved Mar 8" },
] as const;

export function FavoritesScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Favorites</div>
          <div className="text-xs text-white/40">Feed items saved before extraction</div>
        </div>
        <div className="rounded-full border border-[#FF1493]/35 bg-[#FF1493]/15 px-3 py-1 text-xs text-[#FF9BD0]">
          18 saved
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {["Newest", "Title A-Z", "Most viewed", "Site"].map((item, index) => (
          <div
            key={item}
            className={`rounded-full border px-2.5 py-1 text-[11px] ${
              index === 0
                ? "border-[#FF1493]/40 bg-[#FF1493]/15 text-[#FF9BD0]"
                : "border-white/10 bg-white/5 text-white/45"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {FAVORITES.map((item) => (
          <div key={item.title} className="glass rounded-xl border border-white/10 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF1493]/25 bg-[#FF1493]/15 text-[#FF9BD0]">
                <Lucide.Heart className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-white/90">{item.title}</div>
                <div className="mt-1 text-xs text-white/45">{item.site} · {item.age}</div>
              </div>
              <button type="button" className="secondary-btn !px-3 !py-1.5 !text-xs">
                Extract
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
