"use client";

import { motion } from "framer-motion";

const technologies = [
  "PYTHON", "SQL", "AWS", "GCP", "SAGEMAKER", 
  "DYNAMODB", "POSTGRESQL", "TENSORFLOW", "PYTORCH", 
  "LLaMA-3", "POWER BI", "TABLEAU", "DOCKER", "CI/CD"
];

export default function TechnologyWall() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-12 md:py-24 border-y border-brand-gray overflow-hidden bg-background">
      <div className="relative flex whitespace-nowrap w-full">
        <motion.div
          animate={{ x: ["0%", "-33.33333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap"
        >
          {marqueeItems.map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="text-3xl md:text-5xl font-display font-medium tracking-tight mx-8 text-brand-charcoal opacity-70 hover:opacity-100 hover:text-brand-orange transition-all duration-300">
                {tech}
              </span>
              <span className="text-brand-orange/50 text-3xl md:text-5xl">
                •
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
