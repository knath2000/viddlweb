import React from "react";
import Image from "next/image";
import { MASCOTS, type MascotKey } from "../lib/constants";

type MascotSize = "micro" | "tiny" | "card" | "section" | "hero" | "cta";

interface MascotStickerProps {
  mascot: MascotKey;
  size?: MascotSize;
  framed?: boolean;
  floating?: boolean;
  decorative?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<MascotSize, string> = {
  micro: "w-8 h-8",
  tiny: "w-12 h-12",
  card: "w-16 h-16",
  section: "w-24 h-24 md:w-28 md:h-28",
  hero: "w-28 h-28 md:w-36 md:h-36",
  cta: "w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44",
};

export function MascotSticker({
  mascot,
  size = "card",
  framed = false,
  floating = false,
  decorative = true,
  className = "",
}: MascotStickerProps) {
  const item = MASCOTS[mascot];

  return (
    <div
      className={`mascot-sticker ${SIZE_CLASSES[size]} ${framed ? "mascot-frame" : ""} ${floating ? "animate-[float-soft_4s_ease-in-out_infinite]" : ""} ${className}`}
      aria-hidden={decorative || undefined}
    >
      <Image
        src={item.src}
        alt={decorative ? "" : item.alt}
        width={512}
        height={512}
        className="h-full w-full object-contain drop-shadow-2xl"
        sizes="(max-width: 768px) 80px, 160px"
      />
    </div>
  );
}
