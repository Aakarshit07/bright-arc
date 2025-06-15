"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IStep } from "@/types/shared.types";
import Image from "next/image";

interface MobileStepsAccordionProps {
  steps: IStep[];
  activeStep: string;
  onStepChange: (stepId: string) => void;
}

export function MobileStepsAccordion({
  steps,
  activeStep,
  onStepChange,
}: MobileStepsAccordionProps) {
  return (
    <div className="block xl:hidden">
      <Accordion
        type="single"
        value={activeStep}
        onValueChange={onStepChange}
        collapsible
      >
        {steps.map((step) => (
          <AccordionItem
            key={step.id}
            value={step.id}
            className="border-0 mb-3"
          >
            <AccordionTrigger className="text-left hover:no-underline bg-white rounded-lg data-[state=open]:text-primary-600 border-none transition-all duration-200">
              <div className="flex items-center gap-3 flex-1">
                <span
                  className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-xs text-sm flex items-center justify-center font-medium text-gray-500 bg-gray-200",
                    `${activeStep === step.id && "text-white bg-primary-600"}`
                  )}
                >
                  {step.number}
                </span>
                <span className="text-sm font-medium leading-tight">
                  {step.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="bg-white rounded-b-lg space-y-4 -mt-1">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {step.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                <Button className="bg-primary-900 hover:bg-primary-700 text-white w-full py-2 rounded-md font-medium">
                  Learn More
                </Button>
                <div className="relative w-[340px] h-[260px]">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
