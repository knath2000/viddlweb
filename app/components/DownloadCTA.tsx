"use client";

import React from "react";
import { GradientButton } from "./GradientButton";
import { APP_NAME, VERSION, MIN_MACOS } from "../lib/constants";
import { PromoSticker } from "./PromoSticker";
import { LoopVideo } from "./LoopVideo";
import { MascotSticker } from "./MascotSticker";

interface DownloadCTAProps {
  id?: string;
}

export function DownloadCTA({ id = "download" }: DownloadCTAProps) {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${APP_NAME}-${VERSION}.dmg`;
    document.body.appendChild(link);
    alert(
      `Thank you for trying ${APP_NAME}!\n\nIn production this would download the DMG.\n\nInstall: Open the DMG → Drag ${APP_NAME} to Applications → Launch.`
    );
    link.remove();
  };

  return (
    <div id={id} className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
        <div className="hidden lg:block flex-shrink-0 -mb-6 w-[150px]">
          <MascotSticker mascot="hype" size="cta" floating decorative={false} />
        </div>

        <div className="glass relative rounded-3xl p-10 md:p-14 text-center border border-white/10 flex-1 overflow-hidden">
          <LoopVideo
            src="/videos/cloud-transfer-loop.mp4"
            className="absolute right-5 top-5 hidden h-24 w-24 rounded-2xl border border-white/10 object-cover opacity-70 xl:block"
          />
          <div className="flex justify-center mb-3">
            <PromoSticker variant="gift">One-time purchase</PromoSticker>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-3">
            Download {APP_NAME} for macOS
          </h2>
          <p className="text-lg text-white/60 max-w-md mx-auto">
            Native app. No subscription. One-time Pro unlock.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <GradientButton onClick={handleDownload} className="text-base px-10 py-4">
              Download for Mac
            </GradientButton>
            <a
              href="#"
              className="secondary-btn px-8 py-4 text-sm self-center"
              onClick={(e) => {
                e.preventDefault();
                alert("Release notes would open here (v2.0.0 changelog).");
              }}
            >
              Release notes
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-white/40 font-mono tracking-widest">
            <div>v{VERSION}</div>
            <div>•</div>
            <div>{MIN_MACOS}</div>
            <div>•</div>
            <div>DMG • 18 MB</div>
            <div>•</div>
            <div>Apple Silicon + Intel</div>
          </div>

          <div className="mt-8 text-[12px] text-white/40 max-w-sm mx-auto leading-relaxed">
            Open the DMG, drag VidDL to Applications, then launch. The app will guide you through first-run setup and optional Pro activation.
          </div>
        </div>
      </div>
    </div>
  );
}
