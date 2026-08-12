"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const recentExperience = [
  { company: "ZAPTOZ TECHNOLOGIES", role: "Junior Associate \u2014 Data & Cloud Solutions", year: "2025 \u2014 Present" },
  { company: "ZIDIO DEVELOPMENT", role: "Data Analyst", year: "2025" },
];

export default function HomeExperience() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-xl font-mono text-brand-orange tracking-widest uppercase">Experience</h2>
          <Link href="/experience" className="text-sm font-bold tracking-wide text-brand-orange hover:underline flex items-center gap-1">Full Experience <ArrowUpRight size={14} /></Link>
        </div>
        {recentExperience.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="border-b border-[#1F1F1F] py-10 md:py-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-brand-orange font-mono text-sm tracking-widest">{exp.year}</span>
              <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight mt-2">{exp.company}</h3>
            </div>
            <p className="text-lg font-light text-[#8C8C8C]">{exp.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
