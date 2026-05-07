import React from "react";
import * as Lucide from "lucide-react";

const REMOTE_ITEMS = [
  { name: "Incoming", kind: "Folder", size: "12 files" },
  { name: "Completed", kind: "Folder", size: "42 files" },
  { name: "hq-native-extract.mp4", kind: "MP4", size: "188 MB" },
  { name: "batch-feed-set.mp4", kind: "MP4", size: "452 MB" },
] as const;

export function FilesScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-semibold tracking-tight">Files</div>
          <div className="text-xs text-white/40">Seedbox browser and transfer handoff</div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-3 py-1 text-xs text-[#FCD34D]">
          <span className="h-2 w-2 rounded-full bg-[#7FFF00]" />
          WebDAV ready
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-white/50">
        <Lucide.Server className="h-3.5 w-3.5 text-[#FFD700]" />
        /downloads/VidDL
      </div>

      <div className="space-y-2">
        {REMOTE_ITEMS.map((item) => (
          <div key={item.name} className="glass rounded-xl border border-white/10 px-3 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/65">
                {item.kind === "Folder" ? <Lucide.Folder className="h-4 w-4" /> : <Lucide.FileVideo className="h-4 w-4" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-white/85">{item.name}</div>
                <div className="text-xs text-white/40">{item.kind} · {item.size}</div>
              </div>
              <Lucide.MoreHorizontal className="h-4 w-4 text-white/35" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
