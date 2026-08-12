"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects, Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const isEven = index % 2 === 0;

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    
    if (!container || !image || !text) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax effect on the image
      gsap.to(image, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Subtle fade/slide in for the text
      gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Link 
      href={`/work/${project.slug}`} 
      ref={containerRef}
      className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
      data-cursor="VIEW"
    >
      {/* Image Container */}
      <div className="w-full md:w-3/5 overflow-hidden rounded-sm relative aspect-[4/3] bg-[#f0f0f0]">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title}
          className="w-full h-[115%] object-cover absolute top-[-7.5%] left-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Text Container */}
      <div ref={textRef} className="w-full md:w-2/5 flex flex-col justify-center">
        <span className="text-5xl md:text-7xl font-display font-black text-[#E5E5E5] group-hover:text-brand-orange transition-colors duration-500 mb-4 block leading-none">
          {project.num}
        </span>
        <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">
          {project.title}
        </h3>
        <p className="text-sm md:text-base font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">
          {project.category}
        </p>
        <p className="text-lg text-brand-charcoal mb-8 max-w-md">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black group-hover:text-brand-orange transition-colors">
          View Project <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <div className="pt-24 bg-brand-background">
      {/* Page Hero */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] mb-8"
          >
            SELECTED<br />PROJECTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }} 
            className="text-xl md:text-2xl font-light text-[#8C8C8C] max-w-2xl"
          >
            Data science, AI, computer vision and full-stack product work.
          </motion.p>
        </div>
      </section>

      {/* Vertical Project List with Parallax */}
      <section className="py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-[100rem] mx-auto flex flex-col gap-24 md:gap-40">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-white border-t border-black/5 mt-12">
        <Link 
          href="/contact" 
          className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-display font-bold tracking-tighter hover:text-brand-orange transition-colors" 
          data-cursor="LET'S TALK"
        >
          Have a project in mind? <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
