"use client";

import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
const services = [
  {
    title: "Mentorship",
    description: "There are many variations of passages of Lorem Ipsum.",
  },
  {
    title: "Thought Leadership",
    description: "There are many variations of passages of Lorem Ipsum.",
  },
  {
    title: "Consulting",
    description: "There are many variations of passages of Lorem Ipsum.",
  },
];
export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="relative py-16 px-4">
      {/* 1. Text Container */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 z-10 lg:px-8 mb-4">
        <div className="w-full ">
          <h2 className="text-3xl lg:text-4xl font-bold text-default-950 max-w-sm">
            What we Offer at{" "}
            <span className="text-primary-600 underline decoration-secondary-500">
              Bright Arc
            </span>
          </h2>
        </div>
        <div className="w-full">
          <p className="py-3 text-gray-600 max-w-3xl mx-auto lg:mx-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* 2. Gradient Background */}
      <div className="h-[458px] fancy-corner-gradient" />

      {/* 3. Cards Section (Overlapping) */}
      <div className="relative -mt-60 lg:-mt-12 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                highlight={
                  hoveredIndex === index ||
                  (hoveredIndex === null && index === 0)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
