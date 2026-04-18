"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function GlowingButton({
  children,
  className,
  variant = "primary",
  ...props
}: GlowingButtonProps) {
  return (
    <button
      className={cn(
        "font-headline font-bold uppercase transition-all text-center",
        variant === "primary" &&
          "bg-primary-container text-on-primary-container px-8 py-4 shadow-[0_0_40px_rgba(0,240,255,0.2)] hover:shadow-[0_0_60px_rgba(255,82,92,0.4)]",
        variant === "secondary" &&
          "border border-outline/20 bg-surface-variant/5 backdrop-blur-md text-on-surface px-8 py-4 hover:border-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
