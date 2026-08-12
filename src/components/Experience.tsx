"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "ZAPTOZ TECHNOLOGIES",
    role: "Junior Associate — Data & Cloud Solutions",
    year: "2025 — Present",
  },
  {
    company: "ZIDIO DEVELOPMENT",
    role: "Data Analyst",
    year: "2025",
  },
  {
    company: "INTERNSHALA TRAININGS",
    role: "Data Science Intern",
    year: "2025",
  },
  {
    company: "REBELCORP",
    role: "Website Design Intern",
    year: "2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-48 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-20 md:mb-32"
        >
          EXPERIENCE
        </motion.h2>

        <div className="flex flex-col border-t border-brand-charcoal">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-b border-brand-charcoal hover:bg-brand-charcoal/30 transition-colors duration-500 cursor-pointer"
            >
              <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                
                <div className="md:w-1/2 flex flex-col gap-4">
                  <span className="text-brand-orange font-mono text-sm tracking-widest">
                    {exp.year}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight group-hover:pl-4 transition-all duration-500">
                    {exp.company}
                  </h3>
                </div>

                <div className="md:w-1/2 flex md:justify-end">
                  <p className="text-xl md:text-2xl font-light text-brand-gray-dark group-hover:text-background transition-colors duration-500">
                    {exp.role}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
