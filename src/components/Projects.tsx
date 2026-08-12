"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    num: "01",
    title: "NATIONAL INFRASTRUCTURE FREIGHT ANALYTICS",
    subtitle: "Indian Railways Strategic Concept",
    category: "Data Science / Cloud / Predictive Analytics",
    description: "Built a cloud-based data pipeline for large-scale railway logistics data and developed predictive models for commodity transport demand.",
    color: "from-brand-blue/20 to-transparent",
    href: "#",
  },
  {
    num: "02",
    title: "MISSION-CRITICAL PUBLIC SAFETY",
    subtitle: "CNN-Based Fire Detection",
    category: "Computer Vision / Deep Learning",
    description: "Achieved ~99% test accuracy in real-time visual threat detection systems.",
    color: "from-brand-orange/20 to-transparent",
    href: "#",
  },
  {
    num: "03",
    title: "LOCALIZED GENERATIVE AI",
    subtitle: "SLM Lead Generation Bot",
    category: "SLM / RAG / Generative AI",
    description: "Leveraging LLaMA-3 and RAG architectures for specialized real-estate interactions.",
    color: "from-brand-purple/20 to-transparent",
    href: "#",
  },
  {
    num: "04",
    title: "SECURE COMPUTER VISION",
    subtitle: "Biometric Feature Detection System",
    category: "Computer Vision / Real-Time Processing",
    description: "High-accuracy biometric identification pipelines for secure environments.",
    color: "from-brand-charcoal/20 to-transparent",
    href: "#",
  },
  {
    num: "05",
    title: "SAFARK",
    subtitle: "Private Couple Planner",
    category: "Full-Stack / Product / UX",
    description: "A personal product built with modern web technologies.",
    color: "from-brand-gray-dark/20 to-transparent",
    href: "https://safark.lovable.app/",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-48 px-6 md:px-12 relative min-h-screen">
      
      {/* Dynamic Background Visual based on hover */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out">
        {hoveredIndex !== null && (
          <div className={cn(
            "absolute inset-0 opacity-50 bg-gradient-to-br transition-all duration-1000 blur-3xl",
            projects[hoveredIndex].color
          )} />
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex justify-between items-end mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold tracking-tighter"
          >
            SELECTED<br />PROJECTS
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-32">
          {projects.map((project, i) => (
            <motion.a
              href={project.href}
              target={project.href !== "#" ? "_blank" : undefined}
              rel={project.href !== "#" ? "noopener noreferrer" : undefined}
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group block relative w-full border-t border-brand-gray pt-8 md:pt-12 cursor-none"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                
                {/* Number & Meta */}
                <div className="lg:w-1/4 flex flex-col justify-between">
                  <span className="text-5xl md:text-7xl font-display font-bold text-brand-gray group-hover:text-brand-foreground transition-colors duration-500">
                    {project.num}
                  </span>
                  
                  <div className="mt-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden lg:block">
                    <p className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <p className="text-sm font-semibold tracking-wider flex items-center gap-2">
                      VIEW PROJECT <span className="text-lg">↗</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/4">
                  <h3 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold tracking-tighter leading-tight mb-4 group-hover:pl-4 transition-all duration-500">
                    {project.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-light text-brand-gray-dark mb-8 group-hover:pl-4 transition-all duration-500 delay-75">
                    {project.subtitle}
                  </h4>
                  
                  <div className="lg:hidden mt-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm font-mono text-brand-orange uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                  </div>

                  {/* Abstract Visual Placeholder */}
                  <div className="w-full aspect-video md:aspect-[21/9] bg-brand-gray/30 overflow-hidden relative mt-12">
                    <div className="absolute inset-0 bg-brand-foreground/5 group-hover:scale-105 transition-transform duration-1000 origin-center" />
                    
                    {/* Abstract Shapes based on hover state */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-background/50 mix-blend-overlay" />
                    </div>

                    {/* Show description clearly */}
                    <div className="absolute inset-0 p-8 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-lg md:text-2xl font-light max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
