import React from "react";
import { Icon, type IconName } from "../lib/icons";

interface PromoStickerProps {
  variant?: "new" | "pro" | "fast" | "gift";
  children?: React.ReactNode;
  className?: string;
}

const VARIANT_STYLES = {
  new: { bg: "bg-[#7FFF00]/15", border: "border-[#7FFF00]/40", text: "text-[#7FFF00]", icon: "Sparkles" },
  pro: { bg: "bg-[#FFD700]/15", border: "border-[#FFD700]/40", text: "text-[#FCD34D]", icon: "Star" },
  fast: { bg: "bg-[#00BFFF]/15", border: "border-[#00BFFF]/40", text: "text-[#7DD3FC]", icon: "Zap" },
  gift: { bg: "bg-[#FF6B6B]/15", border: "border-[#FF6B6B]/40", text: "text-[#FFA3A3]", icon: "Gift" },
};

export function PromoSticker({ variant = "new", children, className = "" }: PromoStickerProps) {
  const style = VARIANT_STYLES[variant];

  return (
    <div
      className={`promo-sticker inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider ${style.bg} ${style.border} ${style.text} ${className}`}
    >
      <Icon name={style.icon as IconName} className="w-3 h-3" />
      {children || variant.toUpperCase()}
    </div>
  );
}
