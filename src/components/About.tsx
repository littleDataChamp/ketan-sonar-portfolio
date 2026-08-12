"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    "DATA SCIENCE",
    "AI / ML",
    "AWS",
    "CLOUD",
    "ANALYTICS"
  ];

  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-12 border-4 border-brand-orange/20 relative group"
          >
            {/* The image points to your GitHub profile picture which is public! */}
            <img 
              src="https://github.com/littleDataChamp.png" 
              alt="Ketan Sonar"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium tracking-wide text-brand-gray-dark mb-6">
              ABOUT KETAN
            </h3>
            
            <p className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8">
              Ketan Sonar
              <span className="block text-brand-orange mt-2 text-2xl md:text-4xl">
                Data Scientist / AI / Cloud
              </span>
            </p>
            
            <p className="text-lg md:text-xl font-light text-brand-charcoal max-w-lg mb-8 leading-relaxed">
              Based in Mumbai, India.
            </p>
            
            <p className="text-lg md:text-xl font-light text-brand-charcoal max-w-xl leading-relaxed mb-8">
              Ketan works across Data Science, Machine Learning, AI, Cloud infrastructure, analytics, and data systems.
            </p>
            
            <p className="text-lg md:text-xl font-light text-brand-charcoal max-w-xl leading-relaxed">
              He is interested in turning messy real-world problems into practical, scalable technology.
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="h-[1px] w-full bg-brand-gray mb-4 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
                    className="h-full w-full bg-brand-orange"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-orange font-mono text-sm tracking-widest">
                    0{i + 1}
                  </span>
                  <h4 className="font-display font-bold tracking-wider text-xl group-hover:text-brand-orange transition-colors">
                    {stat}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
