"use client";
import { useState, useEffect } from "react";
const links = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = `#${entry.target.id}`;
            const activeLink = links.find((link) => link.href === sectionId);
            if (activeLink) {
              setActive(activeLink.label);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );
    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-4">
        <a
          href="#home"
          onClick={() => setActive("Home")}
          className="flex flex-col leading-tight focus:outline-none"
        >
          <span className="text-[26px] font-bold tracking-tight text-blue-600">
            accredian
          </span>
          <span className="text-[10px] font-normal tracking-widest text-gray-400 uppercase">
            credentials that matter
          </span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative pb-1 text-[15px] transition-colors focus:outline-none ${isActive
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 font-medium hover:text-blue-600"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2.5px] w-full rounded-full bg-blue-600" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="flex flex-col gap-1.5 focus:outline-none lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${open ? "max-h-96 border-t border-gray-100" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-1 bg-white px-6 py-4">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

