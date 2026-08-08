"use client";
import { catFramework } from "@/lib/data";
const catIcons = [
  <svg key="concept" viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
    <rect x="10" y="14" width="20" height="22" rx="3" stroke="#2563EB" strokeWidth="1.5"/>
    <path d="M20 8a6 6 0 0 1 3 11.2V22h-6v-2.8A6 6 0 0 1 20 8Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="14" y1="27" x2="26" y2="27" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="22" y2="30" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  <svg key="application" viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
    <rect x="6" y="8" width="28" height="18" rx="3" stroke="#2563EB" strokeWidth="1.5"/>
    <path d="M13 32h14M20 26v6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="28" cy="10" r="5" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.2"/>
    <circle cx="28" cy="10" r="2" fill="#2563EB"/>
    <path d="M28 5v1M28 14v1M23 10h1M32 10h1" stroke="#2563EB" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  <svg key="tools" viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
    <circle cx="15" cy="22" r="8" stroke="#2563EB" strokeWidth="1.5"/>
    <circle cx="15" cy="22" r="3" fill="#2563EB"/>
    <path d="M15 12v2M15 30v2M7 22H5M25 22h-2M9.1 16.1l-1.4-1.4M22.3 29.3l-1.4-1.4M9.1 27.9l-1.4 1.4M22.3 14.7l-1.4 1.4" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="29" cy="14" r="5" stroke="#2563EB" strokeWidth="1.5"/>
    <circle cx="29" cy="14" r="2" fill="#2563EB"/>
  </svg>,
];
export default function CATFramework() {
  return (
    <section id="cat" className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="mt-4 text-base text-slate md:text-lg">
          Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
        </p>
        <div className="relative mt-16 flex items-center justify-center">
          <svg
            viewBox="0 0 900 260"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <path
              d="M150 80 C150 80 300 80 300 130 C300 180 450 180 450 130 C450 80 600 80 600 130 C600 180 750 180 750 130"
              stroke="#2563EB"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="300" cy="130" r="6" fill="#2563EB"/>
            <circle cx="600" cy="130" r="6" fill="#2563EB"/>
          </svg>
          <div className="relative z-10 flex w-full items-start justify-between px-4">
            {catFramework.map((step, i) => {
              const marginTop = i === 1 ? "mt-20" : "mt-0";
              return (
                <div key={step.title} className={`flex flex-col items-center ${marginTop} flex-1`}>
                  <div className="flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow-md gap-3 px-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                      {catIcons[i]}
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy">{step.title}</h3>
                    <p className="text-xs text-slate leading-tight text-center">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

