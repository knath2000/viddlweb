import React from "react";
import { NeonBadge } from "./NeonBadge";
import { SidebarMockup } from "./SidebarMockup";
import { HomeBusy } from "./preview/HomeBusy";
import { FeedScreen } from "./preview/FeedScreen";
import { FavoritesScreen } from "./preview/FavoritesScreen";
import { LibraryScreen } from "./preview/LibraryScreen";
import { FilesScreen } from "./preview/FilesScreen";
import { SettingsScreen } from "./preview/SettingsScreen";

export type PreviewScreen = "home" | "feed" | "favorites" | "library" | "files" | "settings";

interface AppWindowMockupProps {
  variant?: "full" | "hero";
  screen?: PreviewScreen;
  sidebarActive?: string;
}

export function AppWindowMockup({
  variant = "full",
  screen = "home",
  sidebarActive = "Home",
}: AppWindowMockupProps) {
  const isHero = variant === "hero";

  return (
    <div className="mac-window w-full max-w-[980px] mx-auto shadow-2xl float-mockup">
      {/* Title Bar */}
      <div className="mac-titlebar">
        <div className="traffic-lights">
          <div className="traffic-light red" />
          <div className="traffic-light yellow" />
          <div className="traffic-light green" />
        </div>
        <div className="flex-1 text-center text-xs text-white/60 font-medium tracking-wide">
          Video Downloader
        </div>
        <div className="w-16" /> {/* spacer */}
      </div>

      <div className={`flex ${isHero ? "h-[520px]" : "h-[640px]"}`}>
        <div className="hidden md:block w-[250px] flex-shrink-0 border-r border-white/10">
          <SidebarMockup activeLabel={sidebarActive} />
        </div>

        <div className="flex-1 min-w-0 flex flex-col bg-[#0F0F14]">
          <div className="h-14 border-b border-white/10 px-5 flex items-center justify-between gap-3 overflow-hidden">
            <div className="flex min-w-0 items-center gap-3">
              <div className="font-semibold text-lg tracking-tight">{sidebarActive}</div>
              <NeonBadge variant="green">NATIVE EXTRACTORS</NeonBadge>
              <NeonBadge variant="sky">YT-DLP 1700+</NeonBadge>
              <NeonBadge variant="gold">PRO</NeonBadge>
            </div>

            {!isHero && (
              <div className="hidden xl:flex items-center gap-2 text-xs text-white/50">
                <div className="px-2 py-0.5 rounded bg-white/5">Feed sources: APS / HQ / OF</div>
              </div>
            )}
          </div>

          {screen === "home" && <HomeBusy isHero={isHero} />}
          {screen === "feed" && <FeedScreen />}
          {screen === "favorites" && <FavoritesScreen />}
          {screen === "library" && <LibraryScreen />}
          {screen === "files" && <FilesScreen />}
          {screen === "settings" && <SettingsScreen />}

          <div className="h-9 border-t border-white/10 px-5 flex items-center overflow-hidden whitespace-nowrap text-[11px] text-white/40">
            {isHero ? (
              "Feed: 3 sources • Queue: 0 • Ready"
            ) : (
              <>
                Feed: 3 sources • Queue: 3 active • Library: 128 •
                <span className="ml-1.5 inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#7FFF00]" />
                  Helper online
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
