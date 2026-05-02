import React from "react";

export function FloatingDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sparkles */}
      <div className="absolute top-12 right-8 text-[#FFD700] opacity-60">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="animate-[sparkle-twinkle_1.8s_ease-in-out_infinite]">
          <path d="M12 2l2.09 6.26L20 10l-6.26 2.09L12 18l-1.74-5.91L4 10l6.26-1.74L12 2z" />
        </svg>
      </div>
      <div className="absolute top-24 left-16 text-[#FF6B6B] opacity-50">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="animate-[sparkle-twinkle_2.4s_ease-in-out_infinite_300ms]">
          <path d="M12 2l2.09 6.26L20 10l-6.26 2.09L12 18l-1.74-5.91L4 10l6.26-1.74L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-20 text-[#00BFFF] opacity-40">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="animate-[sparkle-twinkle_1.5s_ease-in-out_infinite_700ms]">
          <path d="M12 2l2.09 6.26L20 10l-6.26 2.09L12 18l-1.74-5.91L4 10l6.26-1.74L12 2z" />
        </svg>
      </div>

    </div>
  );
}
