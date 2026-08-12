"use client";

import { motion } from "framer-motion";

const services = [
  { name: "DATA SCIENCE", desc: "Turning raw data into strategic insights through statistical analysis, exploration and modelling." },
  { name: "MACHINE LEARNING", desc: "Building predictive models and intelligent systems that learn from data patterns." },
  { name: "GENERATIVE AI", desc: "Leveraging large language models and generative architectures for real-world applications." },
  { name: "SLMs", desc: "Deploying Small Language Models for specialised, efficient on-device intelligence." },
  { name: "NLP", desc: "Natural Language Processing for text analysis, sentiment detection and conversational AI." },
  { name: "COMPUTER VISION", desc: "Image recognition, object detection and visual intelligence systems." },
  { name: "DATA ENGINEERING", desc: "Designing robust data pipelines, ETL workflows and data infrastructure." },
  { name: "AWS", desc: "Cloud architecture, deployment and scaling on Amazon Web Services." },
  { name: "GCP", desc: "Building and managing data solutions on Google Cloud Platform." },
  { name: "MLOps", desc: "End-to-end machine learning operations, model deployment and monitoring." },
  { name: "POWER BI", desc: "Interactive dashboards and business intelligence reporting." },
  { name: "TABLEAU", desc: "Data visualisation and exploratory analytics for stakeholder communication." },
  { name: "PYTHON", desc: "Full-spectrum Python development for data science, automation and backend systems." },
  { name: "SQL", desc: "Advanced database querying, optimisation and data management." },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] mb-8">
            SERVICES
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl md:text-2xl font-light text-[#8C8C8C] max-w-2xl">
            Capabilities across the full data, AI and cloud stack.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="group border-b border-[#E5E5E5] py-10 md:py-14 cursor-default hover:bg-[#FAFAFA] transition-colors px-4 -mx-4 rounded-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                  <div className="flex items-center gap-6">
                    <span className="text-brand-orange font-mono text-sm tracking-widest w-8">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter group-hover:text-brand-orange transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg font-light text-[#8C8C8C] md:max-w-md md:text-right">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
