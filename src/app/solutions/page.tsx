"use client";

import { motion } from "framer-motion";

const pillars = [
  { name: "DATA", desc: "Robust data infrastructure, pipelines and management systems that form the foundation of every intelligent system." },
  { name: "AI", desc: "Machine learning models, generative AI and natural language processing that transform data into actionable intelligence." },
  { name: "CLOUD", desc: "Scalable cloud architecture on AWS and GCP that ensures reliability, performance and cost efficiency." },
  { name: "OPTIMIZATION", desc: "Continuous improvement of data systems, model performance and operational workflows for maximum impact." },
  { name: "INTELLIGENCE", desc: "End-to-end business intelligence, dashboards and analytics that drive informed decision-making." },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1F1F1F] text-[#FDFCF8]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block border border-brand-orange/50 rounded-full px-6 py-2 mb-12">
            <span className="text-brand-orange font-mono text-sm tracking-widest uppercase">Building something bigger</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] mb-8">
            SONAR
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl font-light text-[#8C8C8C] max-w-3xl">
            A Data, AI & Systems company focused on helping businesses build, optimize and scale intelligent data-driven systems.
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Sticky left title */}
            <div className="md:w-1/3 md:sticky md:top-32 md:self-start">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">PILLARS</h2>
              <p className="text-lg font-light text-[#8C8C8C]">The five core dimensions of every solution.</p>
            </div>
            {/* Scrolling right content */}
            <div className="md:w-2/3 flex flex-col">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="border-b border-[#E5E5E5] py-12 md:py-16"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-brand-orange font-mono text-sm tracking-widest mt-2">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">{pillar.name}</h3>
                      <p className="text-lg md:text-xl font-light text-[#8C8C8C] max-w-lg leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
