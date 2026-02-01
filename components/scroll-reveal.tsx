"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Pequeño retraso en ms (ej. para stagger entre secciones). Por defecto 0. */
  delay?: number;
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [delayed, setDelayed] = useState(delay === 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setInView(true);
      setDelayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (delay === 0 || !inView) return;
    const t = setTimeout(() => setDelayed(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${inView && delayed ? "scroll-reveal-in-view" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
