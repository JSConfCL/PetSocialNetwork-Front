/*
	jsrepo 1.36.0
	Installed from https://reactbits.dev/ts/tailwind/
	16-02-2025
*/
"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeContentProps {
  blur?: boolean;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  easing?: string;
  initialOpacity?: number;
  threshold?: number;
}

export const FadeContent = (props: FadeContentProps) => {
  const {
    children,
    blur = false,
    duration = 1000,
    easing = "ease-out",
    delay = 0,
    threshold = 0.1,
    initialOpacity = 0,
    className = ""
  } = props;

  const [ inView, setInView ] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none"
      }}
    >
      {children}
    </div>
  );
};
