"use client";
import { domains } from "@/lib/data";
const domainIcons: Record<string, JSX.Element> = {
  "Product & Innovation Hub": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <path d="M20 6a10 10 0 0 1 5 18.66V28H15v-3.34A10 10 0 0 1 20 6Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="15" y="29" width="10" height="2.5" rx="1.25" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="16.5" y="32.5" width="7" height="2.5" rx="1.25" stroke="#2563EB" strokeWidth="1.5"/>
    </svg>
  ),
  "Gen-AI Mastery": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="13" stroke="#2563EB" strokeWidth="2"/>
      <path d="M14 16c0-3.314 2.686-6 6-6s6 2.686 6 6c0 2-1 3.5-2.5 4.5L22 26h-4l-1.5-5.5C15 19.5 14 18 14 16Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="17" y1="27" x2="23" y2="27" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18" y1="30" x2="22" y2="30" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Leadership Elevation": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="13" r="5" stroke="#2563EB" strokeWidth="2"/>
      <path d="M11 32c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="10" cy="16" r="3.5" stroke="#2563EB" strokeWidth="1.5"/>
      <path d="M4 30c0-3.31 2.69-6 6-6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="16" r="3.5" stroke="#2563EB" strokeWidth="1.5"/>
      <path d="M36 30c0-3.31-2.69-6-6-6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Tech & Data Insights": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <rect x="17" y="22" width="4" height="12" rx="2" stroke="#2563EB" strokeWidth="2"/>
      <rect x="23" y="16" width="4" height="18" rx="2" stroke="#2563EB" strokeWidth="2"/>
      <rect x="11" y="28" width="4" height="6" rx="2" stroke="#2563EB" strokeWidth="2"/>
      <line x1="8" y1="36" x2="32" y2="36" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Operations Excellence": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="5" stroke="#2563EB" strokeWidth="2"/>
      <path d="M20 7v3M20 30v3M7 20h3M30 20h3M10.5 10.5l2.1 2.1M27.4 27.4l2.1 2.1M10.5 29.5l2.1-2.1M27.4 12.6l2.1-2.1" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="9" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 3"/>
    </svg>
  ),
  "Digital Enterprise": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="20" cy="20" r="13" stroke="#2563EB" strokeWidth="2"/>
      <ellipse cx="20" cy="20" rx="6" ry="13" stroke="#2563EB" strokeWidth="1.5"/>
      <line x1="7" y1="20" x2="33" y2="20" stroke="#2563EB" strokeWidth="1.5"/>
      <line x1="9" y1="14" x2="31" y2="14" stroke="#2563EB" strokeWidth="1"/>
      <line x1="9" y1="26" x2="31" y2="26" stroke="#2563EB" strokeWidth="1"/>
    </svg>
  ),
  "Fintech Innovation Lab": (
    <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden>
      <rect x="8" y="14" width="24" height="16" rx="3" stroke="#2563EB" strokeWidth="2"/>
      <circle cx="20" cy="22" r="3" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="12" y="18" width="3" height="2" rx="0.5" fill="#2563EB"/>
      <rect x="25" y="18" width="3" height="2" rx="0.5" fill="#2563EB"/>
      <path d="M14 12V10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};
export default function DomainExpertise() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="mt-4 text-base text-slate md:text-lg">
            <span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => {
            const isLast = i === domains.length - 1;
            return (
              <div
                key={d.name}
                className={`flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-md ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  {domainIcons[d.name]}
                </div>
                <h3 className="font-display text-base font-semibold text-navy">{d.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

