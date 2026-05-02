import React from "react";

interface BaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ButtonProps extends BaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

interface AnchorProps extends BaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  href: string;
}

type GradientButtonProps = ButtonProps | AnchorProps;

export function GradientButton(props: GradientButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const baseClass = variant === "primary" ? "gradient-btn" : "secondary-btn";

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<AnchorProps, "children" | "variant" | "className">;
    return (
      <a href={href} className={`${baseClass} ${className}`} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { ...buttonRest } = rest as Omit<ButtonProps, "children" | "variant" | "className">;
  return (
    <button className={`${baseClass} ${className}`} {...buttonRest}>
      {children}
    </button>
  );
}
