"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function HomeWork() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-display font-bold tracking-tighter">SELECTED<br />WORK</motion.h2>
          <Link href="/work" className="text-sm font-bold tracking-wide text-brand-orange hover:underline flex items-center gap-1">View All <ArrowUpRight size={14} /></Link>
        </div>
        <div className="flex flex-col gap-12 md:gap-20">
          {featured.map((project, i) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: i * 0.1 }}>
              <Link href={`/work/${project.slug}`} className="group block border-b border-[#E5E5E5] pb-12 md:pb-16" data-cursor="VIEW">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="md:w-1/3">
                    <span className="text-5xl md:text-7xl font-display font-medium text-[#E5E5E5] group-hover:text-brand-orange transition-colors duration-500">{project.num}</span>
                    <p className="text-xs font-mono tracking-widest uppercase text-[#8C8C8C] mt-4">{project.category}</p>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tighter mb-3 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                    <p className="text-lg font-light text-[#8C8C8C]">{project.subtitle}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
