import React from "react";
import * as Lucide from "lucide-react";
import { Icon } from "../lib/icons";
import { NAV_ITEMS, VERSION } from "../lib/constants";

interface SidebarMockupProps {
  activeLabel?: string;
  compact?: boolean;
}

export function SidebarMockup({ activeLabel = "Home", compact = false }: SidebarMockupProps) {
  return (
    <div className={`sidebar flex flex-col h-full ${compact ? "w-full" : ""}`}>
      {/* Sidebar Header */}
      <div className="px-4 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#FF6B6B] to-[#FF1493] flex items-center justify-center">
            <Lucide.Video className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="font-semibold tracking-tight text-sm">VidDL</div>
            <div className="text-[10px] text-white/40 -mt-0.5">{VERSION}</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 py-3 text-sm">
        {NAV_ITEMS.map((item) => {
          const isActive = item.label === activeLabel;

          return (
            <div
              key={item.label}
              className={`nav-item cursor-default ${isActive ? "active" : ""}`}
            >
              <div
                className="icon-tile"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                <Icon name={item.icon} className="w-3.5 h-3.5" />
              </div>
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/10 text-[10px] text-white/40 px-4">
        Free • Pro available
      </div>
    </div>
  );
}
