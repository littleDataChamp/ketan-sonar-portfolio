"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#FDFCF8]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl lg:text-[6rem] font-display font-bold tracking-tighter leading-[0.9] mb-12">
          LET&apos;S BUILD<br />SOMETHING<br /><span className="text-brand-orange">USEFUL.</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link href="/contact" className="group relative inline-flex items-center justify-center gap-4 bg-[#0A0A0A] text-[#FDFCF8] px-10 py-6 rounded-full overflow-hidden" data-cursor="LET'S TALK">
            <span className="absolute inset-0 w-full h-full bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 text-xl font-medium tracking-wide">LET&apos;S TALK</span>
            <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
