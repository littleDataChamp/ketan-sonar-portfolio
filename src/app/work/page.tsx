"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const totalScroll = track.scrollWidth - section.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] mb-8">
            SELECTED<br />PROJECTS
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl font-light text-[#8C8C8C] max-w-2xl">
            Data science, AI, computer vision and full-stack product work.
          </motion.p>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={sectionRef} className="relative overflow-hidden">
        <div ref={trackRef} className="flex gap-8 md:gap-12 px-6 md:px-12 py-12" style={{ width: 'max-content' }}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] block"
              data-cursor="VIEW"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl md:text-5xl font-display font-medium text-[#E5E5E5] group-hover:text-brand-orange transition-colors duration-500">{project.num}</span>
                <div>
                  <h3 className="text-xl md:text-3xl font-display font-bold tracking-tighter mb-1 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <p className="text-sm font-mono tracking-widest uppercase text-[#8C8C8C]">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center">
        <Link href="/contact" className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-display font-bold tracking-tighter hover:text-brand-orange transition-colors" data-cursor="LET'S TALK">
          Have a project in mind? <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
