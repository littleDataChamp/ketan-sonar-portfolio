"use client";

import { motion, Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-background">
      {/* Massive Vibrant Gradient Background that matches the mockup (white to pink/magenta) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#f085af] to-[#b81d68] dark:from-[#3a0b22] dark:via-[#7a1344] dark:to-[#1a000c] -z-20" />
      
      <div className="max-w-[100rem] mx-auto w-full flex flex-col md:flex-row relative z-10 h-full items-center justify-between gap-8">
        
        {/* Left Side: Massive Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center z-20 pt-10"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-sm md:text-base font-display font-bold tracking-widest uppercase text-foreground">
              KETAN SONAR
            </h2>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="font-display font-black text-7xl sm:text-8xl md:text-[8rem] lg:text-[12rem] leading-[0.8] tracking-tighter uppercase text-foreground"
          >
            FOR<br />
            DATA
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 md:mt-12 max-w-sm ml-1 md:ml-4 border-l-4 border-foreground pl-4 md:pl-6 min-h-[120px]">
            <p className="text-lg md:text-2xl font-medium leading-tight text-foreground">
              <Typewriter text="A Data Scientist & Cloud Architect based in Mumbai." delay={1.5} />
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 4, duration: 1 }}
              className="mt-2 md:mt-4 text-sm md:text-base text-foreground"
            >
              Specializing in contemporary AI systems, I bring complex data to life with purposeful, scalable solutions.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Side Bottom: Description & Icon matching mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute right-0 bottom-12 w-full md:w-64 z-30 hidden md:block"
        >
          <ArrowDownRight size={32} className="text-foreground mb-4 font-bold" strokeWidth={3} />
          <p className="text-sm md:text-base font-medium text-foreground leading-tight">
            I help businesses turn complex data into clear insights and build AI systems that drive real impact.
          </p>
        </motion.div>

        {/* Right Side: Portrait with Stylized CSS Cutout Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="w-full md:w-1/2 absolute md:relative right-0 bottom-0 h-[60vh] md:h-[85vh] flex justify-end items-end z-10 pointer-events-none opacity-40 md:opacity-100"
        >
          {/* Clean cutout image matching mockup */}
          <img 
            src="/ketan-sonar-portfolio/images/profile.png" 
            alt="Ketan Sonar"
            className="h-full w-auto object-cover object-bottom scale-110 md:scale-[1.35] origin-bottom right-0 drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
