"use client";

import { motion } from "framer-motion";

export default function Sonar() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-brand-charcoal text-background relative overflow-hidden">
      
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 w-full text-center pointer-events-none">
        <h2 className="text-[15rem] md:text-[30rem] font-display font-bold leading-none tracking-tighter">
          SONAR
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block border border-brand-orange/50 rounded-full px-6 py-2 mb-12">
            <span className="text-brand-orange font-mono text-sm tracking-widest uppercase">
              Building something bigger
            </span>
          </div>

          <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12">
            SONAR
          </h3>

          <p className="text-xl md:text-3xl font-light text-brand-gray max-w-3xl mx-auto leading-relaxed mb-16">
            A Data, AI & Systems company focused on helping businesses build, optimize and scale intelligent data-driven systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-brand-gray-dark font-mono text-sm md:text-base tracking-widest uppercase">
            <span>DATA</span>
            <span className="text-brand-orange">•</span>
            <span>AI</span>
            <span className="text-brand-orange">•</span>
            <span>CLOUD</span>
            <span className="text-brand-orange">•</span>
            <span>OPTIMIZATION</span>
            <span className="text-brand-orange">•</span>
            <span>INTELLIGENCE</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
