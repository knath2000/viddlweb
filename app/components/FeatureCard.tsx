import React from "react";
import { Icon } from "../lib/icons";
import { GlassCard } from "./GlassCard";
import { type MascotKey } from "../lib/constants";
import { MascotSticker } from "./MascotSticker";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  badge?: string;
  mascot?: MascotKey;
}

export function FeatureCard({ title, description, icon, color, badge, mascot }: FeatureCardProps) {
  return (
    <GlassCard className="feature-card-pop group relative min-h-[220px] overflow-hidden">
      {/* Colored top accent */}
      <div className="h-1 w-full -mx-6 -mt-6 mb-4" style={{ backgroundColor: color }} />

      <div className="relative z-10">
        <div
          className="icon-tile w-9 h-9 mb-4"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon name={icon} className="w-4.5 h-4.5" />
        </div>

        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold tracking-tight text-[15px] pr-2">{title}</h3>
          {badge && (
            <span className="promo-sticker text-[9px] px-1.5 py-0.5 rounded-full self-start" style={{ backgroundColor: `${color}25`, color }}>
              {badge}
            </span>
          )}
        </div>

        <p className="max-w-[92%] text-sm text-white/60 leading-snug">{description}</p>

        {mascot && (
          <div className="mt-5 hidden h-12 items-end sm:flex">
            <MascotSticker
              mascot={mascot}
              size="tiny"
              className="feature-card-mascot opacity-40 transition duration-200 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:opacity-85"
            />
          </div>
        )}
      </div>

      {/* Subtle sticker corner on some cards */}
      {badge && (
        <div className="sticker-corner absolute top-0 right-0 w-8 h-8 opacity-40" aria-hidden="true" />
      )}
    </GlassCard>
  );
}
