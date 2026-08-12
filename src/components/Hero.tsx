"use client";

import { motion, Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 -z-20" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fff1f7 10%, #ffc8e0 30%, #ff6faa 55%, #e90070 80%, #bf1765 100%)' }} />

      {/* MOBILE LAYOUT: stacked flex column */}
      <div className="flex flex-col md:hidden min-h-[100svh] px-6 pt-24 pb-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-xs font-display font-bold tracking-[0.2em] uppercase text-black">KETAN SONAR</h2>
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-display font-black uppercase text-black leading-[0.82] tracking-tighter" style={{ fontSize: 'clamp(4rem, 20vw, 8rem)' }}>
            FOR<br />DATA
          </motion.h1>
        </motion.div>

        {/* Portrait — stacked, contained */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="flex justify-center my-4">
          <img src="/ketan-sonar-portfolio/images/profile.png" alt="Ketan Sonar" className="max-h-[45vh] w-auto object-contain brightness-[0.88] contrast-[1.08] saturate-[0.95] drop-shadow-2xl" />
        </motion.div>

        {/* Introduction */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="border-l-2 border-white/80 pl-4 mt-2">
          <p className="text-base font-bold leading-tight text-white">
            <Typewriter text="A Data Scientist & Cloud Architect based in Mumbai." delay={1.5} />
          </p>
          <p className="mt-2 text-xs text-white/90 font-medium">
            Specializing in contemporary AI systems, I bring complex data to life with purposeful, scalable solutions.
          </p>
        </motion.div>
      </div>

      {/* DESKTOP LAYOUT: absolute positioning */}
      <div className="hidden md:flex items-end min-h-[100svh] relative">
        <div className="max-w-[100rem] mx-auto w-full relative z-10 px-12 pb-16 pt-28">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-[55%] lg:w-[60%] flex flex-col justify-end z-10 relative">
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-base font-display font-bold tracking-[0.2em] uppercase text-black">KETAN SONAR</h2>
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-display font-black uppercase text-black leading-[0.82] tracking-tighter" style={{ fontSize: 'clamp(5rem, 16vw, 15rem)' }}>
              FOR<br />DATA
            </motion.h1>
            <motion.div variants={itemVariants} className="mt-12 max-w-sm ml-4 border-l-2 border-white/80 pl-6">
              <p className="text-xl font-bold leading-tight text-white">
                <Typewriter text="A Data Scientist & Cloud Architect based in Mumbai." delay={1.5} />
              </p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 4, duration: 1 }} className="mt-4 text-base text-white/90 font-medium">
                Specializing in contemporary AI systems, I bring complex data to life with purposeful, scalable solutions.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bottom-right text — positioned to the far right, clear of portrait */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 2.5 }} className="absolute right-12 bottom-16 w-52 z-30">
            <ArrowDownRight size={28} className="text-white mb-3" strokeWidth={2.5} />
            <p className="text-sm font-bold text-white leading-snug drop-shadow-md">
              I help businesses turn complex data into clear insights and build AI systems that drive real impact.
            </p>
          </motion.div>
        </div>

        {/* Portrait — absolutely positioned, touches bottom */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }} className="absolute right-[10%] lg:right-[15%] bottom-0 h-[85vh] lg:h-[92vh] flex items-end z-20 pointer-events-none">
          <img src="/ketan-sonar-portfolio/images/profile.png" alt="Ketan Sonar" className="h-full w-auto object-contain object-bottom brightness-[0.88] contrast-[1.08] saturate-[0.95] drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
