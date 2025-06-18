"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IStep } from "@/types/shared.types";
import { useRouter } from "next/navigation";

interface StepContentProps {
  step: IStep;
  className?: string;
}

export function StepContent({ step, className = "" }: StepContentProps) {
  const navigate = useRouter();
  const handleLearnMoreClick = (id: string) => {
    navigate.push("/our-services#" + id);
  };

  return (
    <div className={`flex items-center justify-between gap-32 ${className}`}>
      <div className="w-full">
        <div className="relative w-[440px] h-[370px]">
          <Image src={step.image || "/placeholder.svg"} alt={step.title} fill />
        </div>
      </div>
      <div className="w-full space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
          {step.heading}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {step.description}
        </p>
        <Button
          className="bg-primary-900 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-medium"
          onClick={() => handleLearnMoreClick(step.id)}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
