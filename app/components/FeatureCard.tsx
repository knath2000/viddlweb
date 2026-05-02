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
      <div
        className="h-1 w-full -mx-6 -mt-6 mb-4"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99 60%, transparent 95%)` }}
      />

      {mascot && (
        <div className="pointer-events-none absolute right-5 top-5 z-10 h-10 w-10 opacity-70 drop-shadow-2xl transition duration-200 group-hover:-translate-y-0.5 group-hover:rotate-2 group-hover:opacity-95">
          <MascotSticker mascot={mascot} size="tiny" className="h-full w-full" />
        </div>
      )}

      <div className="relative z-10">
        <div
          className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}20`, color }}
        >
          <Icon name={icon} className="w-5 h-5" />
        </div>

        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold tracking-tight text-[15px] pr-2">{title}</h3>
          {badge && (
            <span className="promo-sticker text-[9px] px-1.5 py-0.5 rounded-full self-start" style={{ backgroundColor: `${color}25`, color }}>
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm text-white/60 leading-snug">{description}</p>
      </div>
    </GlassCard>
  );
}
