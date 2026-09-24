"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Float({
  children,
  className = "",
  duration = 4,
  distance = 8,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
