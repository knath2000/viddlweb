import React from "react";
import * as Lucide from "lucide-react";

export function SettingsScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4">
        <div className="font-semibold tracking-tight">Settings</div>
        <div className="text-xs text-white/40">Cloud handoff, quality, and save defaults</div>
      </div>

      <div className="space-y-4">
        <section>
          <div className="mb-2 text-xs font-medium uppercase tracking-[1px] text-white/40">Cloud connections</div>
          <div className="grid gap-3 sm:grid-cols-2">
            <ConnectionCard
              title="Mega"
              detail="Connected as user@example.com"
              icon={<Lucide.Cloud className="h-4 w-4" />}
              color="#FFD700"
            />
            <ConnectionCard
              title="Google Drive"
              detail="Connected · Personal"
              icon={<Lucide.FolderOpen className="h-4 w-4" />}
              color="#7FFF00"
            />
          </div>
        </section>

        <section className="glass-card rounded-xl p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-white/85">Default quality</div>
              <div className="text-xs text-white/40">Used when a source has multiple variants.</div>
            </div>
          </div>
          <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {["Auto", "720p", "1080p", "4K"].map((item) => (
              <div
                key={item}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  item === "1080p"
                    ? "bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20"
                    : "text-white/45"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-xl p-4">
          <div className="mb-2 text-sm font-medium text-white/85">Save folder</div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1F1F26] p-1">
            <div className="min-w-0 flex-1 truncate px-3 font-mono text-xs text-white/60">~/Downloads/VidDL</div>
            <button type="button" className="secondary-btn !px-3 !py-1.5 !text-xs">Change...</button>
          </div>
        </section>
      </div>
    </div>
  );
}

interface ConnectionCardProps {
  title: string;
  detail: string;
  icon: React.ReactNode;
  color: string;
}

function ConnectionCard({ title, detail, icon, color }: ConnectionCardProps) {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {icon}
          </div>
          <div>
            <div className="text-sm font-medium text-white/85">{title}</div>
            <div className="text-xs text-white/45">{detail}</div>
          </div>
        </div>
        <Lucide.Check className="mt-1 h-4 w-4 text-[#7FFF00]" />
      </div>
      <button type="button" className="secondary-btn !px-3 !py-1.5 !text-xs">Disconnect</button>
    </div>
  );
}
