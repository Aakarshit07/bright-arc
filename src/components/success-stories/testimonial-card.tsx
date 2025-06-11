"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  imageUrl: string;
  className?: string;
  isActive?: boolean;
}

export function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  imageUrl,
  className,
  isActive = false,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "bg-transparent transition-all duration-500 ease-out transform-gpu py-0 max-w-2xl border-none shadow-none border-2",
        isActive ? "scale-95 z-20" : "scale-85 z-10",
        className
      )}
    >
      <CardContent className="p-0 border-none">
        <div
          className={cn(
            "bg-white  rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all duration-500 ease-out px-4 sm:px-0"
          )}
        >
          {/* Image */}
          <div className="flex-shrink-0 relative w-full sm:w-[220px] h-auto sm:h-[220px]">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`${name} - ${position}`}
              width={220}
              height={220}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="bg-transparent flex flex-col items-center gap-[10.5px] py-[25.2px] flex-[1_0_0] flex-1-0-0 self-stretch">
            {/* Testimonial */}
            <div className="w-full">
              <blockquote className="text-default-950 text-xs font-normal leading-normal">
                "{testimonial}"
              </blockquote>
            </div>

            {/* Separator */}
            <div className="w-full">
              <Separator className="bg-primary-300" orientation="horizontal" />
            </div>

            {/* Name and Position */}
            <div className="w-full">
              <h4 className="text-sm sm:text-base not-italic font-semibold text-primary-900 leading-normal">
                {name}
              </h4>
              <p className="text-sm text-default-900 font-normal not-italic leading-normal">
                {position} to CEO {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
