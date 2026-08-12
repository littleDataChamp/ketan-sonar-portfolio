"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-bl from-brand-orange/5 via-brand-blue/5 to-transparent -z-10 blur-3xl opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <motion.p variants={itemVariants} className="text-sm md:text-base font-semibold tracking-[0.2em] text-brand-orange mb-6">
          KETAN SONAR
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="font-display font-bold text-[4rem] md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tighter mb-4"
        >
          DATA.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">AI.</span><br />
          CLOUD.
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-12 max-w-3xl"
        >
          BUILDING SYSTEMS<br />THAT MAKE DATA WORK.
        </motion.h2>

        <motion.div variants={itemVariants} className="mt-16 flex flex-col md:flex-row md:items-center gap-6">
          <p className="text-brand-gray-dark text-lg md:text-xl font-light">
            Data Scientist <span className="mx-2">|</span> AI/ML <span className="mx-2">|</span> Cloud <span className="mx-2">|</span> Data Engineering
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4"
        >
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
          </div>
          <p className="text-sm font-medium tracking-wider uppercase text-brand-gray-dark">
            Currently building • experimenting • shipping
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
