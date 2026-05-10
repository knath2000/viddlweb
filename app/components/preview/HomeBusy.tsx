import React from "react";
import * as Lucide from "lucide-react";
import { NeonBadge } from "../NeonBadge";
import { LIBRARY_SAMPLES, PLATFORM_ICONS } from "../../lib/constants";

interface HomeBusyProps {
  isHero?: boolean;
}

export function HomeBusy({ isHero = false }: HomeBusyProps) {
  return (
    <>
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="text-xs uppercase tracking-[1px] text-white/40 font-medium">Sources</div>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="flex gap-3">
          {PLATFORM_ICONS.map((item) => (
            <div
              key={item.name}
              className="platform-icon text-[10px]"
              style={{ backgroundColor: item.color }}
            >
              {item.name}
            </div>
          ))}
          <div className="platform-icon bg-white/10 text-[8px] border-white/20">+1.7K</div>
        </div>
      </div>

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

      <div className="px-5 pt-4">
        <button className="gradient-btn w-full py-3 text-base">
          <Lucide.Zap className="w-4 h-4" />
          Extract Selected
        </button>
      </div>

      {isHero ? <HeroEmptyState /> : <HomeQueue />}
    </>
  );
}

function HeroEmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-4">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B20] to-[#B388FF20] flex items-center justify-center border border-white/10">
          <Lucide.Clapperboard className="w-8 h-8 text-white/60" />
        </div>
      </div>
      <div className="text-lg font-medium tracking-tight text-white/90 mb-1">Ready to download</div>
      <div className="text-sm text-white/50 max-w-[260px]">
        Browse Feed picks, paste a supported page, or drop multiple links.
      </div>

      <div className="flex gap-2 mt-6">
        <NeonBadge variant="sky">Feed</NeonBadge>
        <NeonBadge variant="gold">Native</NeonBadge>
        <NeonBadge variant="coral">4K</NeonBadge>
      </div>
    </div>
  );
}

function HomeQueue() {
  return (
    <div className="flex-1 px-5 py-4 space-y-3 overflow-hidden">
      <DownloadRow
        platform="NAT"
        title={LIBRARY_SAMPLES[0].title}
        meta="Native · MP4"
        progress={62}
        detail="7:42 / 12:34 · native extract · saving locally"
      />
      <DownloadRow
        platform="YT"
        title={LIBRARY_SAMPLES[1].title}
        meta="720p · MP4"
        queued
        detail="Batch item 2 of 5"
      />
      <DownloadRow
        platform="FD"
        title={LIBRARY_SAMPLES[2].title}
        meta="1080p · MP4"
        done
        detail="Saved · 188 MB · synced to seedbox"
      />
    </div>
  );
}

interface DownloadRowProps {
  platform: string;
  title: string;
  meta: string;
  detail: string;
  progress?: number;
  queued?: boolean;
  done?: boolean;
}

function DownloadRow({ platform, title, meta, detail, progress = 0, queued, done }: DownloadRowProps) {
  return (
    <div className="glass rounded-xl border border-white/10 p-3">
      <div className="flex items-start gap-3">
        <div className="platform-icon h-8 w-8 text-[10px] bg-white/10">{platform}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="truncate text-sm font-medium tracking-tight text-white/90">{title}</div>
            <div className="flex-shrink-0 font-mono text-[11px] text-white/45">{meta}</div>
          </div>

          {done ? (
            <div className="mt-2 flex items-center gap-2 text-xs text-[#7FFF00]">
              <Lucide.Check className="h-3.5 w-3.5" />
              {detail}
            </div>
          ) : (
            <>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={queued ? "h-full w-[18%] bg-white/20" : "h-full bg-[#FF6B6B]"}
                  style={{ width: queued ? "18%" : `${progress}%` }}
                />
              </div>
              <div className={`mt-1.5 text-xs ${queued ? "text-white/40" : "text-white/50"}`}>
                {queued ? "Queued · " : `${progress}% · `}
                {detail}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
