"use client";
import { deliverySteps } from "@/lib/data";
const stepIcons = [
  <svg key="gap" viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
    <rect x="4" y="18" width="5" height="10" rx="1.5" fill="white"/>
    <rect x="13" y="10" width="5" height="18" rx="1.5" fill="white"/>
    <rect x="22" y="14" width="5" height="14" rx="1.5" fill="white"/>
    <path d="M6 10l5-5 5 4 6-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="plan" viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
    <rect x="3" y="5" width="26" height="17" rx="3" stroke="white" strokeWidth="2"/>
    <path d="M11 28h10M16 22v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 14l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="delivery" viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
    <rect x="3" y="5" width="26" height="17" rx="3" stroke="white" strokeWidth="2"/>
    <path d="M11 28h10M16 22v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 10l8 4-8 4V10Z" fill="white"/>
  </svg>,
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1300px] px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>
        <p className="mt-4 text-base text-slate md:text-lg">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {deliverySteps.map((step, i) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8 text-left shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white font-bold text-sm text-blue-600">
                {i + 1}
              </span>
              <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-200">
                {stepIcons[i]}
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

