"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr) {
        setLabel(cursorAttr);
      } else if (
        target.tagName === 'A' || target.tagName === 'BUTTON' ||
        target.closest('a') || target.closest('button')
      ) {
        setLabel('');
      } else {
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    // Lerp animation loop
    let raf: number;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  const hasLabel = label.length > 0;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] hidden lg:block"
      style={{ willChange: 'transform' }}
    >
      <div
        ref={dotRef}
        className={`flex items-center justify-center rounded-full border-2 border-brand-orange mix-blend-difference transition-all duration-300 ease-out ${
          hasLabel ? 'w-20 h-20 -ml-10 -mt-10 bg-brand-orange/20' : 'w-8 h-8 -ml-4 -mt-4 bg-transparent'
        }`}
      >
        {hasLabel && (
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">
            {label}
          </span>
        )}
        {!hasLabel && (
          <div className="w-1 h-1 bg-brand-orange rounded-full" />
        )}
      </div>
    </div>
  );
}
