"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Let's talk ↗", href: "/#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > 150 && latest > previous && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash navigation for same-page scroll
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "py-3 bg-white/90 backdrop-blur-md border-b border-black/5" : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start leading-none font-display font-black text-base md:text-lg tracking-tighter text-black hover:opacity-70 transition-opacity border border-black px-2 py-1 rounded-sm bg-white">
            <span>for</span>
            <span>data</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold tracking-wide text-black hover:opacity-60 transition-opacity relative group flex items-center gap-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          clipPath: mobileMenuOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-center items-center",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-display font-bold text-black hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
