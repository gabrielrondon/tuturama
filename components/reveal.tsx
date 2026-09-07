"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
  Progressive enhancement. The server HTML is fully visible. On mount, elements already in
  the viewport get `is-in` at once (their illustrations draw themselves); elements below the
  fold get `reveal-wait` (hidden) and `is-in` when they scroll into view. Without JavaScript
  nothing is ever hidden.
*/
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.9;
    if (reduce || inView || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    el.classList.add("reveal-wait");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as unknown as "div";
  return (
    <Comp ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Comp>
  );
}
