"use client";
import { useMemo, useState } from "react";
import { faqs, FAQItem } from "@/lib/data";
const categories: FAQItem["category"][] = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];
export default function FAQ() {
  const [active, setActive] = useState<FAQItem["category"]>("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = useMemo(() => faqs.filter((f) => f.category === active), [active]);
  return (
    <section id="faqs" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1300px] px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-[260px_1fr]">
          <div className="flex gap-3 overflow-x-auto md:flex-col md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setOpenIndex(null);
                }}
                className={`shrink-0 rounded-xl border px-6 py-4 text-left text-sm font-medium transition-all ${
                  active === cat
                    ? "border-blue-200 bg-blue-50 text-blue-600 font-semibold"
                    : "border-slate-200 bg-white text-slate hover:border-blue-300 hover:text-blue-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-col divide-y divide-slate-100">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-navy">{item.question}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-5 w-5 shrink-0 text-slate transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm text-slate leading-relaxed">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-14 text-center">
          <a
            href="#lead-form"
            className="inline-block rounded-lg bg-blue-600 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:-translate-y-0.5 shadow-md shadow-blue-200"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}

