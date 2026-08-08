"use client";
import Image from "next/image";
import { segments } from "@/lib/data";
const segmentImages = [
  "/course-program.png",
  "/course-industry.png",
  "/course-topic.png",
  "/course-level.png",
];
export default function CourseSegmentation() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1300px] px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="mt-4 text-base text-slate md:text-lg">
            Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg, i) => (
            <div
              key={seg.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={segmentImages[i]}
                  alt={seg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-blue-600">{seg.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{seg.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

