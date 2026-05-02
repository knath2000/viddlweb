import React from "react";
import * as Lucide from "lucide-react";
import { LIBRARY_SAMPLES } from "../../lib/constants";

const RECENT = [
  { title: LIBRARY_SAMPLES[2].title, size: "188 MB", destination: "Mega" },
  { title: LIBRARY_SAMPLES[3].title, size: "1.2 GB", destination: "Local" },
  { title: LIBRARY_SAMPLES[4].title, size: "452 MB", destination: "Drive" },
  { title: LIBRARY_SAMPLES[5].title, size: "820 MB", destination: "Local" },
];

export function DownloadsScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Downloads</div>
          <div className="text-xs text-white/40">2 active · 4 completed today</div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["All", "Active", "Completed", "Failed"].map((item, index) => (
            <div
              key={item}
              className={`rounded-full border px-2.5 py-1 text-[11px] ${
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

      <div className="space-y-4">
        <section>
          <div className="mb-2 text-xs font-medium uppercase tracking-[1px] text-white/40">Active (2)</div>
          <div className="space-y-2">
            <ActiveDownload title={LIBRARY_SAMPLES[0].title} platform="YT" progress={62} speed="4.2 MB/s" />
            <ActiveDownload title={LIBRARY_SAMPLES[1].title} platform="IG" progress={28} speed="1.8 MB/s" />
          </div>
        </section>

        <section>
          <div className="mb-2 text-xs font-medium uppercase tracking-[1px] text-white/40">Recent (4)</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {RECENT.map((item) => (
              <div key={item.title} className="glass rounded-xl border border-white/10 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Lucide.Check className="h-3.5 w-3.5 text-[#7FFF00]" />
                  <div className="min-w-0 flex-1 truncate text-xs font-medium text-white/80">{item.title}</div>
                </div>
                <div className="mt-1 pl-5 text-[11px] text-white/40">
                  Saved · {item.size} · {item.destination}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

interface ActiveDownloadProps {
  title: string;
  platform: string;
  progress: number;
  speed: string;
}

function ActiveDownload({ title, platform, progress, speed }: ActiveDownloadProps) {
  return (
    <div className="glass rounded-xl border border-white/10 p-3">
      <div className="flex items-start gap-3">
        <div className="platform-icon h-8 w-8 text-[10px] bg-white/10">{platform}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="truncate text-sm font-medium tracking-tight text-white/90">{title}</div>
            <div className="flex gap-1">
              <button type="button" aria-label="Pause download" className="rounded-md border border-white/10 bg-white/5 p-1 text-white/45">
                <Lucide.Pause className="h-3.5 w-3.5" />
              </button>
              <button type="button" aria-label="Cancel download" className="rounded-md border border-white/10 bg-white/5 p-1 text-white/45">
                <Lucide.X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-[#FF6B6B]" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-1.5 text-xs text-white/50">{progress}% · {speed} · MP4</div>
        </div>
      </div>
    </div>
  );
}
