"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Project } from "@/lib/projects";

export default function ProjectDetailClient({ project, nextProject }: { project: Project; nextProject: Project }) {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !heroImgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImgRef.current!.querySelector('img'),
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      {/* Project Hero */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="text-brand-orange font-mono text-sm tracking-widest uppercase">{project.category}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-5xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85] mb-6">
            {project.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl font-light text-[#8C8C8C] max-w-xl">
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Hero Image with scroll-driven scale */}
      <section ref={heroImgRef} className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-sm">
          <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
        </div>
      </section>

      {/* Content sections */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
          {/* Overview */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">OVERVIEW</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Challenge */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">CHALLENGE</h2>
            <p className="text-lg md:text-xl font-light text-[#1F1F1F] leading-relaxed">{project.challenge}</p>
          </motion.div>

          {/* Approach */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">APPROACH</h2>
            <p className="text-lg md:text-xl font-light text-[#1F1F1F] leading-relaxed">{project.approach}</p>
          </motion.div>

          {/* Technologies */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">TECHNOLOGIES</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-5 py-2 border border-[#E5E5E5] rounded-full text-sm font-medium tracking-wide">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">OUTCOME</h2>
            <p className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-snug">{project.outcome}</p>
          </motion.div>

          {/* External CTA for Safark */}
          {project.href !== "#" && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-[#FDFCF8] px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-brand-orange transition-colors">
                Visit Website <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Next Project */}
      <section className="border-t border-[#E5E5E5] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mb-6">NEXT PROJECT</p>
          <Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between" data-cursor="VIEW">
            <h3 className="text-3xl md:text-6xl font-display font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
              {nextProject.title}
            </h3>
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-brand-orange group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
