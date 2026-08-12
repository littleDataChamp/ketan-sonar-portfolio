"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lines = [
    "I don't just build models.",
    "I understand the problem.",
    "I work with the data.",
    "I build the system.",
    "And I make it work in the real world.",
  ];

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-64 px-6 md:px-12 bg-foreground text-background flex items-center justify-center min-h-screen"
    >
      <div className="max-w-5xl mx-auto w-full">
        {lines.map((line, i) => {
          // Calculate opacity based on scroll position for each line
          const start = i * 0.15;
          const end = start + 0.2;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end, end + 0.2], [0.1, 1, 0.1]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(scrollYProgress, [start, end], [20, 0]);

          return (
            <motion.h2
              key={i}
              style={{ opacity, y }}
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight mb-8"
            >
              {line}
            </motion.h2>
          );
        })}
      </div>
    </section>
  );
}
