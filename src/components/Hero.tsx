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
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden bg-background">
      {/* Massive Vibrant Gradient Background matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-brand-purple/30 to-brand-orange/80 -z-20" />
      
      <div className="max-w-[100rem] mx-auto w-full flex flex-col md:flex-row relative z-10 h-full items-center">
        
        {/* Left Side: Massive Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/5 flex flex-col justify-center z-20 mix-blend-difference text-background"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display font-black text-[6rem] md:text-[12rem] lg:text-[18rem] leading-[0.75] tracking-tighter uppercase"
          >
            FOR<br />
            DATA
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-12 max-w-sm ml-2 md:ml-4 border-l-4 border-background pl-6">
            <p className="text-xl md:text-2xl font-medium leading-tight">
              A freelance Data Scientist & Cloud Architect based in Mumbai.
            </p>
            <p className="mt-4 text-base opacity-80">
              Specializing in contemporary AI systems, I bring complex data to life with purposeful, scalable solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait with Stylized CSS Cutout Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-2/5 absolute right-0 bottom-0 md:h-[90vh] flex justify-end items-end z-10 pointer-events-none"
        >
          {/* Using mix-blend-multiply on a bright image creates a dramatic silhouette effect against the colorful background */}
          <img 
            src="https://github.com/littleDataChamp.png" 
            alt="Ketan Sonar"
            className="h-full w-auto object-cover object-bottom opacity-90 scale-125 md:scale-150 origin-bottom right-0 mix-blend-multiply filter contrast-125 brightness-75 grayscale"
            style={{ 
              maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)"
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
