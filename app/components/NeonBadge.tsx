import React from "react";

interface NeonBadgeProps {
  variant: "green" | "gold" | "coral" | "sky";
  children: React.ReactNode;
  className?: string;
}

export function NeonBadge({ variant, children, className = "" }: NeonBadgeProps) {
  const base = "neon-badge";
  const variantClass = {
    green: "green",
    gold: "gold",
    coral: "coral",
    sky: "sky",
  }[variant];

  return (
    <span className={`${base} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
