import Image from "next/image";
export default function Hero() {
  const checks = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];
  return (
    <section id="home" className="bg-white pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-[1400px] px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] px-14 py-14 md:px-20 md:py-16 bg-blue-50">
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1 min-w-0 max-w-xl">
              <h1 className="text-[44px] font-bold leading-[1.15] tracking-tight text-gray-900 md:text-[56px]">
                Next-Gen{" "}
                <span className="text-blue-600">Expertise</span>
                <br />
                For Your{" "}
                <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="mt-6 text-[17px] leading-relaxed text-gray-500 md:text-lg">
                Cultivate high-performance
                <br />
                teams through expert learning.
              </p>
              <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-gray-700">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-green-500 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#lead-form"
                className="mt-9 inline-block rounded-lg bg-blue-600 px-10 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Enquire Now
              </a>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-[520px] h-[360px] relative items-end justify-center">
              <Image
                src="/hero-professionals.png"
                alt="Enterprise professionals ready to upskill"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

