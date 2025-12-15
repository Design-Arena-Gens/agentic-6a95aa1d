'use client';

import { MotionValue, motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FaceIdBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.9]);
  const glowBlur = useTransform(scrollYProgress, [0, 1], [15, 40]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <motion.div
      ref={ref}
      style={{
        boxShadow: useMotionTemplate`0 0 ${glowBlur}px rgba(239, 169, 182, ${glowOpacity})`,
        y: translateY,
      }}
      className="relative isolate rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur-sm"
    >
      <div className="absolute -top-16 right-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(239,169,182,0.65),_rgba(75,242,234,0.2)_55%,_transparent_70%)] opacity-70 blur-3xl" />
      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.3em] text-neon-pink">Face ID Sync</span>
          <h3 className="mt-2 text-lg font-semibold text-white">Identity-Aware Sharing</h3>
          <p className="mt-1 text-sm text-zinc400">
            Auto-curated access flows respond to live presence and trust policies you define.
          </p>
        </div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-neon-pink/50 bg-neon-pink/10">
          <div className="absolute inset-1 rounded-full border border-neon-pink/40" />
          <div className="absolute h-20 w-20 rounded-full border border-prism-cyan/40 blur-lg" />
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-neon-pink"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              d="M5 4h2a1 1 0 0 1 1 1v1M17 4h2a1 1 0 0 1 1 1v1M5 20h2a1 1 0 0 0 1-1v-1M17 20h2a1 1 0 0 0 1-1v-1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10c0 2.209 1.791 4 4 4s4-1.791 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 9a2.5 2.5 0 0 1 5 0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
