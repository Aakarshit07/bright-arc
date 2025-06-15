"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IStep } from "@/types/shared.types";
import { StepContent } from "./step-content";
import { cn } from "@/lib/utils";

interface IDesktopStepsTabsProps {
  steps: IStep[];
  activeStep: string;
  onStepChange: (stepId: string) => void;
}

export function DesktopStepsTabs({
  steps,
  activeStep,
  onStepChange,
}: IDesktopStepsTabsProps) {
  return (
    <div className="hidden xl:block">
      <Tabs value={activeStep} onValueChange={onStepChange} className="w-full">
        <TabsList className="w-full p-0 justify-start rounded-none mb-8 h-auto">
          {steps.map((step) => (
            <TabsTrigger
              key={step.id}
              value={step.id}
              className={cn(
                " rounded-none bg-background h-full data-[state=active]:shadow-none  border-b-2 border-transparent data-[state=active]:border-primary-600 px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-all duration-200",
                "focus-visible:border-none focus-visible:ring-0 focus-visible:outline-0 border-t-0 border-l-0 border-r-0"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 w-6 h-6 leading-0 bg-gray-600 text-white rounded-xs text-sm flex items-center justify-center font-medium",
                  activeStep === step.id && "bg-primary-600 text-white"
                )}
              >
                {step.number}
              </span>
              <span className="text-sm font-medium line-clamp-2 text-wrap text-left leading-tight text-gray-700 data-[state=active]:text-primary-600">
                {step.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {steps.map((step) => (
          <TabsContent key={step.id} value={step.id} className="mt-0">
            <StepContent step={step} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
