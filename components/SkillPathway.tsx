"use client";
import { useEffect, useRef, useState } from "react";
import { pathway } from "@/lib/data";
export default function SkillPathway() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="pathway" className="bg-navy py-20 text-white md:py-28">
      <div ref={ref} className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">The pathway</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight md:text-4xl">
          Four stages. One rail. No guesswork about whether it worked.
        </h2>
        <div className="relative mt-16">
          <svg
            className="absolute left-0 top-5 hidden w-full md:block"
            height="2"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={visible ? 0 : 1000}
              style={{ transition: "stroke-dashoffset 1.6s ease-out" }}
            />
          </svg>
          <ol className="grid gap-10 md:grid-cols-4">
            {pathway.map((step, i) => (
              <li
                key={step.stage}
                className="relative"
                style={{
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber bg-navy font-mono text-sm transition-all duration-500 ${
                    visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                >
                  {i + 1}
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {step.stage}
                </p>
                <h3 className="mt-2 font-display text-lg font-600">{step.label}</h3>
                <p className="mt-2 text-sm text-white/65">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

