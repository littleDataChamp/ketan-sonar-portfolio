"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function Typewriter({ text, className = "", delay = 0 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Speed of typing

    // Wait for the delay before starting
    const timeout = setTimeout(() => {
      setDisplayedText(""); // Reset before typing starts (if re-triggered)
      i = 0;
    }, delay * 1000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-[2px] w-[2px] h-[1em] bg-current align-middle"
      />
    </span>
  );
}
