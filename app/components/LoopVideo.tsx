import React from "react";

interface LoopVideoProps {
  src: string;
  className?: string;
}

export function LoopVideo({ src, className = "" }: LoopVideoProps) {
  return (
    <video
      className={`loop-video ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      disablePictureInPicture
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
