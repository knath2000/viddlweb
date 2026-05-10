import * as Lucide from "lucide-react";

export function SettingsScreen() {
  return (
    <div className="flex-1 overflow-hidden px-5 py-5">
      <div className="mb-4">
        <div className="font-semibold tracking-tight">Settings</div>
        <div className="text-xs text-white/40">Cloud destinations, AI Profile, quality, and save defaults</div>
      </div>

      <div className="space-y-4">
        <section className="glass-card rounded-xl p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-white/85">Cloud Destinations</div>
              <div className="text-xs text-white/40">Choose one destination to configure its setup fields.</div>
            </div>
            <Lucide.Server className="h-4 w-4 text-[#FFD700]" />
          </div>

          <div className="mb-3 inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {["Mega", "Drive", "Seedbox"].map((item) => (
              <div
                key={item}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  item === "Seedbox"
                    ? "bg-[#FFD700] text-black shadow-lg shadow-[#FFD700]/20"
                    : "text-white/45"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-2 rounded-xl border border-white/10 bg-[#1F1F26] p-3">
            <SettingsRow label="Mode" value="WebDAV" />
            <SettingsRow label="Status" value="Ready for uploads" accent="#7FFF00" />
            <SettingsRow label="Path" value="/Incoming/VidDL" />
          </div>
        </section>

        <section className="glass-card rounded-xl p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-white/85">AI Profile</div>
              <div className="text-xs text-white/40">xAI key and model for profile analysis.</div>
            </div>
            <div className="rounded-full border border-[#FCD34D]/30 bg-[#FCD34D]/10 px-2 py-1 text-[10px] font-semibold text-[#FCD34D]">
              PRO
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1F1F26] p-1">
            <div className="min-w-0 flex-1 truncate px-3 font-mono text-xs text-white/60">Grok profile model</div>
            <button type="button" className="secondary-btn !px-3 !py-1.5 !text-xs">Generate</button>
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

interface SettingsRowProps {
  label: string;
  value: string;
  accent?: string;
}

function SettingsRow({ label, value, accent }: SettingsRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <div className="text-white/40">{label}</div>
      <div className="truncate font-mono text-white/65" style={accent ? { color: accent } : undefined}>
        {value}
      </div>
    </div>
  );
}
