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
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-background">
      {/* Massive Vibrant Gradient Background that adapts to light/dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-brand-purple/20 to-brand-orange/40 dark:via-brand-purple/10 dark:to-brand-orange/20 -z-20" />
      
      <div className="max-w-[100rem] mx-auto w-full flex flex-col md:flex-row relative z-10 h-full items-center justify-between gap-8">
        
        {/* Left Side: Massive Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center z-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display font-black text-7xl sm:text-8xl md:text-[8rem] lg:text-[12rem] leading-[0.8] tracking-tighter uppercase text-foreground"
          >
            FOR<br />
            DATA
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 md:mt-12 max-w-sm ml-1 md:ml-4 border-l-4 border-foreground pl-4 md:pl-6">
            <p className="text-lg md:text-2xl font-medium leading-tight text-foreground">
              A Data Scientist & Cloud Architect based in Mumbai.
            </p>
            <p className="mt-2 md:mt-4 text-sm md:text-base opacity-80 text-foreground">
              Specializing in contemporary AI systems, I bring complex data to life with purposeful, scalable solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait with Stylized CSS Cutout Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-1/2 absolute md:relative right-0 bottom-0 h-[60vh] md:h-[85vh] flex justify-end items-end z-10 pointer-events-none opacity-40 md:opacity-100"
        >
          {/* Light mode: mix-blend-multiply | Dark mode: invert and mix-blend-screen to perfectly drop the white background */}
          <img 
            src="/ketan-sonar-portfolio/images/profile.png" 
            alt="Ketan Sonar"
            className="h-full w-auto object-cover object-bottom scale-110 md:scale-125 origin-bottom right-0 mix-blend-multiply dark:invert dark:mix-blend-screen filter contrast-125 grayscale"
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
