"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});

function LoadingPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 border border-primary-container animate-[spin_10s_linear_infinite] opacity-20"></div>
      <div className="absolute w-48 h-48 border border-secondary-container animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>
    </div>
  );
}

export function SplineHeroScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="mt-24 w-full h-[614px] border border-outline-variant/30 bg-surface-container-low/50 relative shadow-[0_0_60px_rgba(0,240,255,0.05)] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Spline
          scene="https://prod.spline.design/iW-i7d1hC2uR75K4/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {!isLoaded && <LoadingPlaceholder />}
    </div>
  );
}
