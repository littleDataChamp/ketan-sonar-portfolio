"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    num: "01",
    title: "NATIONAL FREIGHT ANALYTICS",
    subtitle: "Indian Railways Strategic Concept",
    category: "Data Science / Cloud",
    description: "Built a cloud-based data pipeline for large-scale railway logistics data and developed predictive models for commodity transport demand.",
    image: "/ketan-sonar-portfolio/images/project_cloud.png",
    href: "#",
  },
  {
    num: "02",
    title: "MISSION-CRITICAL SAFETY",
    subtitle: "CNN-Based Fire Detection",
    category: "Computer Vision",
    description: "Achieved ~99% test accuracy in real-time visual threat detection systems.",
    image: "/ketan-sonar-portfolio/images/project_ml.png",
    href: "#",
  },
  {
    num: "03",
    title: "LOCALIZED GENERATIVE AI",
    subtitle: "SLM Lead Generation Bot",
    category: "LLM / RAG",
    description: "Leveraging LLaMA-3 and RAG architectures for specialized real-estate interactions.",
    image: "/ketan-sonar-portfolio/images/project_llm.png",
    href: "#",
  },
  {
    num: "04",
    title: "SECURE COMPUTER VISION",
    subtitle: "Biometric Feature Detection",
    category: "Computer Vision",
    description: "High-accuracy biometric identification pipelines for secure environments.",
    image: "/ketan-sonar-portfolio/images/project_cv.png",
    href: "#",
  },
  {
    num: "05",
    title: "SAFARK",
    subtitle: "Private Couple Planner",
    category: "Full-Stack / Product",
    description: "A personal product built with modern web technologies.",
    image: "/ketan-sonar-portfolio/images/project_safark.png",
    href: "https://safark.lovable.app/",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-48 px-6 md:px-12 relative min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold tracking-tighter"
          >
            SELECTED<br />PROJECTS
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-16">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isHovered, onHover, onLeave }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Sleek Parallax effect on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target={project.href !== "#" ? "_blank" : undefined}
      rel={project.href !== "#" ? "noopener noreferrer" : undefined}
      onMouseEnter={onHover}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group block relative w-full border-b border-brand-gray/30 pb-8 md:pb-16 cursor-none perspective-1000"
    >
      <motion.div 
        style={{ rotateX, rotateY }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center transform-style-3d"
      >
        
        {/* Number & Meta */}
        <div className="lg:w-1/4 w-full flex flex-col justify-between self-start">
          <span className="text-4xl md:text-6xl font-display font-medium text-brand-gray group-hover:text-brand-orange transition-colors duration-500">
            {project.num}
          </span>
          <div className="mt-6 md:mt-12 opacity-80 group-hover:opacity-100 transition-opacity">
            <p className="text-xs font-mono tracking-widest uppercase text-brand-gray-dark mb-2">
              {project.category}
            </p>
          </div>
        </div>

        {/* Content & Image */}
        <div className="lg:w-3/4 w-full relative">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter leading-[1.1] mb-4 group-hover:translate-x-4 transition-transform duration-500">
              {project.title}
            </h3>
            <h4 className="text-xl md:text-2xl font-light text-brand-gray-dark mb-6 group-hover:translate-x-4 transition-transform duration-500 delay-75">
              {project.subtitle}
            </h4>
            <p className="text-base md:text-lg text-brand-charcoal max-w-2xl font-light leading-relaxed opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-40 overflow-hidden">
              {project.description}
            </p>
          </div>

          {/* Clean Editorial Image Reveal */}
          {project.image && (
            <motion.div 
              className={cn(
                "absolute top-0 right-0 w-2/3 md:w-1/2 aspect-video overflow-hidden shadow-2xl rounded-sm pointer-events-none transition-all duration-700 ease-out z-0",
                isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-8"
              )}
            >
              <div className="absolute inset-0 bg-brand-foreground/20 z-10 mix-blend-overlay" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </motion.div>
          )}
        </div>
        
      </motion.div>
    </motion.a>
  );
}
