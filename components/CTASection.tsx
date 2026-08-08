"use client";
import { useState, FormEvent } from "react";
type Status = "idle" | "submitting" | "success" | "error";
export default function CTASection() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", company: "", teamSize: "" });
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", company: "", teamSize: "" });
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="lead-form" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 rounded-3xl border border-mist bg-white p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo">Get started</p>
            <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-navy md:text-4xl">
              Start with a free skill audit for your team.
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate">
              Share a few details and a program advisor will get back to you within two business days with a
              suggested track and cohort schedule.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Request a skill audit">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Full name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="focus-ring rounded-xl border border-mist px-4 py-3 text-sm text-navy placeholder:text-slate/50"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                className="focus-ring rounded-xl border border-mist px-4 py-3 text-sm text-navy placeholder:text-slate/50"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Company"
                value={values.company}
                onChange={(e) => setValues({ ...values, company: e.target.value })}
                className="focus-ring rounded-xl border border-mist px-4 py-3 text-sm text-navy placeholder:text-slate/50"
              />
              <input
                type="text"
                placeholder="Team size (optional)"
                value={values.teamSize}
                onChange={(e) => setValues({ ...values, teamSize: e.target.value })}
                className="focus-ring rounded-xl border border-mist px-4 py-3 text-sm text-navy placeholder:text-slate/50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="focus-ring mt-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request the audit"}
            </button>
            {status === "success" && (
              <p className="text-sm text-indigo" role="status">
                Thanks — a program advisor will reach out shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600" role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

