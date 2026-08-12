"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 md:px-12 bg-background border-t border-brand-gray flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm font-medium tracking-wide">
        KETAN SONAR <span className="mx-2 text-brand-gray-dark">|</span> Data • AI • Cloud
      </div>
      
      <div className="text-sm font-light text-brand-gray-dark">
        Mumbai, India <span className="mx-2">|</span> © 2026 Ketan Sonar
      </div>

      <button 
        onClick={scrollToTop}
        className="text-sm font-medium hover:text-brand-orange transition-colors group flex items-center gap-2"
      >
        Back to top 
        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
      </button>
    </footer>
  );
}
