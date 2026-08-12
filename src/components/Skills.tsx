"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  "DATA SCIENCE",
  "MACHINE LEARNING",
  "GENERATIVE AI",
  "SLMs",
  "NLP",
  "COMPUTER VISION",
  "DATA ENGINEERING",
  "AWS",
  "GCP",
  "MLOps",
  "POWER BI",
  "TABLEAU",
  "PYTHON",
  "SQL",
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-mono text-brand-orange tracking-widest uppercase mb-16">
          Core Capabilities
        </h2>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative cursor-default"
            >
              <h3 
                className={`text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter transition-all duration-300 ${
                  hoveredIndex === null 
                    ? "opacity-100" 
                    : hoveredIndex === i 
                      ? "opacity-100 scale-105 text-brand-orange" 
                      : "opacity-20 blur-sm"
                }`}
              >
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
