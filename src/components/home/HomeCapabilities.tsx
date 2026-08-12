"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const topCapabilities = ["DATA SCIENCE", "MACHINE LEARNING", "GENERATIVE AI", "CLOUD ARCHITECTURE", "COMPUTER VISION", "DATA ENGINEERING"];

export default function HomeCapabilities() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] text-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-xl font-mono text-brand-orange tracking-widest uppercase">Core Capabilities</h2>
          <Link href="/services" className="text-sm font-bold tracking-wide text-brand-orange hover:underline flex items-center gap-1">View All <ArrowUpRight size={14} /></Link>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {topCapabilities.map((cap, i) => (
            <motion.span key={cap} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter opacity-70 hover:opacity-100 hover:text-brand-orange transition-all duration-300 cursor-default">
              {cap}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
