"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        
        <div className="md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85] mb-12"
          >
            LET&apos;S BUILD<br />
            SOMETHING<br />
            <span className="text-brand-orange">USEFUL.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-light text-brand-charcoal space-y-2 mb-16"
          >
            <p>Have a problem?</p>
            <p>Building something?</p>
            <p>Want to collaborate?</p>
          </motion.div>

          <motion.a 
            href="mailto:ketansonar0708@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative inline-flex items-center justify-center gap-4 bg-brand-foreground text-background px-10 py-6 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 text-xl font-medium tracking-wide">LET&apos;S TALK</span>
            <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="md:w-1/3 flex flex-col justify-end">
          <div className="space-y-12">
            <div>
              <h4 className="text-sm font-mono text-brand-gray-dark uppercase tracking-widest mb-4">
                CONTACT
              </h4>
              <a 
                href="mailto:ketansonar0708@gmail.com"
                className="text-xl md:text-2xl font-medium hover:text-brand-orange transition-colors"
              >
                ketansonar0708@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-sm font-mono text-brand-gray-dark uppercase tracking-widest mb-4">
                SOCIALS
              </h4>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://linkedin.com/in/ketan-sonar-113635248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-medium hover:text-brand-orange transition-colors flex items-center justify-between group border-b border-brand-gray pb-2"
                >
                  LinkedIn
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="https://github.com/littleDataChamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-medium hover:text-brand-orange transition-colors flex items-center justify-between group border-b border-brand-gray pb-2"
                >
                  GitHub
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
