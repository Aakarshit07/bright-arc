"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialData {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  imageUrl: string;
  frameNumber?: string;
  badgeNumber?: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className={cn(
        "rounded-2xl max-w-7xl mx-auto bg-primary-100 px-4 py-8 lg:pt-[86px] lg:px-[168px] lg:pb-7",
        className
      )}
    >
      {/* Main Testimonial Card */}
      <div className="relative bg-primary-100 ">
        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex max-h-52 items-center justify-bertween gap-[120px] broder-2">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src={currentTestimonial.imageUrl}
              alt={currentTestimonial.name}
              width={280}
              height={280}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full py-3 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image src="/qoute.svg" alt="quote" width={60} height={60} />
              </div>
              {/* Name and Position */}
              <div className="w-full space-y-1.5">
                <h3 className="text-base font-semibold text-primary-900">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs text-gray-900">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="text-default-950 text-base leading-normal">
              <p>{currentTestimonial.testimonial}</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="block md:hidden">
          {/* Top - Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={223}
                height={223}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Bottom - Content */}
          <div className="space-y-5 py-3">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image src="/qoute.svg" alt="quote" width={60} height={60} />
              </div>
              {/* Name and Position */}
              <div className="w-full space-y-1.5">
                <h3 className="text-base font-semibold text-primary-900">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs text-gray-900">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="text-default-950 text-base leading-normal">
              <p>{currentTestimonial.testimonial}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-6">
        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex
                  ? "bg-primary-600"
                  : "bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to  testmonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
