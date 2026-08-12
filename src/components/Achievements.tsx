"use client";

import { motion } from "framer-motion";

const achievements = [
  "Aavishkar 19 research presentation",
  "Bombay Stock Exchange Hackfest",
  "AWS Cloud Practitioner",
  "Google Data Analytics",
  "Generative AI training",
  "Gemini for Cloud Architects",
];

export default function Achievements() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-mono text-brand-orange tracking-widest uppercase mb-16">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>

        <div className="flex flex-col border-t border-brand-gray-dark/30">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-brand-gray-dark/30 py-8 md:py-12 cursor-pointer hover:bg-brand-gray/10 transition-colors"
            >
              <div className="flex items-center gap-6 md:gap-12 px-4">
                <span className="text-2xl md:text-4xl font-mono text-brand-gray-dark group-hover:text-brand-orange transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
