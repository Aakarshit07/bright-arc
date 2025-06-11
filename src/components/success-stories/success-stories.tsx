"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./testimonial-card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface ISuccessStoriesPageProps {
  className?: string;
}

const testimonials = [
  {
    id: 1,
    name: "Lorem Ipsum",
    position: "Executive Assistant",
    company: "ABZ Company",
    testimonial:
      "I loved the 1:1 guidance provided at Bright Arc. The mentorship experience was beyond anything, definitely recommended.",
    imageUrl: "/person1.jpeg",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    position: "Executive Assistant",
    company: "ABZ Company",
    testimonial:
      "A huge selling point for me was that I was going to be able to get proper guidance from industry experts. The insights especially was incredibly good and that's what was great about Bright Arc.",
    imageUrl: "/person2.jpeg",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    position: "Executive Assistant",
    company: "ABZ Company",
    testimonial:
      "I loved the 1:1 guidance provided at Bright Arc. The mentorship experience was beyond anything, definitely recommended.",
    imageUrl: "/person3.jpeg",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    position: "Executive Assistant",
    company: "ABZ Company",
    testimonial:
      "A huge selling point for me was that I was going to be able to get proper guidance from industry experts.",
    imageUrl: "/person4.jpeg",
  },
  //   {
  //     id: 5,
  //     name: "Lorem Ipsum",
  //     position: "Executive Assistant",
  //     company: "ABZ Company",
  //     testimonial: "The mentorship experience was beyond anything, definitely recommended.",
  //     imageUrl: "/person1.jpeg",
  //   },
  {
    id: 6,
    name: "Lorem Ipsum",
    position: "Executive Assistant",
    company: "ABZ Company",
    testimonial:
      "I loved the 1:1 guidance provided at Bright Arc. The insights were incredibly valuable.",
    imageUrl: "/person3.jpeg",
  },
];

export function SuccessStoriesPage({ className }: ISuccessStoriesPageProps) {
  const [api, setApi] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateActiveIndex = () => {
      const slides = api.slideNodes();
      const scrollProgress = api.scrollProgress();
      const totalSlides = slides.length;

      // Calculate which slide should be active based on scroll position
      const currentIndex = Math.round(scrollProgress * (totalSlides - 1));
      setActiveIndex(currentIndex);
    };

    // Set initial active index
    updateActiveIndex();

    // Listen for scroll events
    api.on("scroll", updateActiveIndex);
    api.on("select", updateActiveIndex);

    return () => {
      api.off("scroll", updateActiveIndex);
      api.off("select", updateActiveIndex);
    };
  }, [api]);

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-center sm:items-start sm:justify-between">
          {/* Left Side - Static Content */}
          <div className="w-full lg:w-1/2 lg:max-w-md">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hear from Bright Arc's{" "}
              <span className="text-primary-600 underline decoration-secondary-500">
                Patrons
              </span>
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-normal mb-8 font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. Injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum
            </p>

            <Button className="bg-primary-800 hover:bg-primary-900 text-white w-full px-8 py-3 text-sm font-bold">
              Share Your Story
            </Button>
          </div>

          {/* Right Side - Vertical Carousel */}
          <div className="w-full lg:w-1/2 fancy-gradient-bg">
            <Carousel
              setApi={setApi}
              orientation="vertical"
              opts={{
                align: "center",
                loop: true,
                slidesToScroll: 1,
                dragFree: true,
                duration: 1500,
              }}
              className="w-full max-w-2xl mx-auto lg:mx-0"
            >
              <CarouselContent className="h-[600px] lg:h-[700px] -mt-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="pt-4 basis-1/2">
                    <TestimonialCard
                      name={testimonial.name}
                      position={testimonial.position}
                      company={testimonial.company}
                      testimonial={testimonial.testimonial}
                      imageUrl={testimonial.imageUrl}
                      className="w-full"
                      isActive={index === activeIndex}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
