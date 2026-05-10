"use client";

import { useState } from "react";
import { AppWindowMockup, type PreviewScreen } from "./AppWindowMockup";

const TABS = [
  { id: "home", label: "Home", sidebarLabel: "Home" },
  { id: "feed", label: "Feed", sidebarLabel: "Feed" },
  { id: "favorites", label: "Favorites", sidebarLabel: "Favorites" },
  { id: "library", label: "Library", sidebarLabel: "Library" },
  { id: "files", label: "Files", sidebarLabel: "Files" },
  { id: "profile", label: "Profile", sidebarLabel: "Profile" },
  { id: "settings", label: "Settings", sidebarLabel: "Settings" },
] as const;

export function PreviewTour() {
  const [active, setActive] = useState<PreviewScreen>("home");
  const tab = TABS.find((item) => item.id === active) ?? TABS[0];

  return (
    <div className="space-y-4">
      <div role="tablist" aria-label="Preview screens" className="flex flex-wrap justify-center gap-2">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            onClick={() => setActive(item.id)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition duration-200 ${
              active === item.id
                ? "border-transparent bg-gradient-to-br from-[#FF6B6B] to-[#FF1493] text-white shadow-[0_8px_24px_-8px_rgba(255,107,107,0.5)]"
                : "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.07] hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AppWindowMockup screen={tab.id} sidebarActive={tab.sidebarLabel} />
    </div>
  );
}
