import type { IStep } from "@/types/shared.types";

interface StepTabTriggerProps {
  step: IStep;
  isActive: boolean;
}

export function StepTabTrigger({ step, isActive }: StepTabTriggerProps) {
  return (
    <>
      <span
        className={`flex-shrink-0 w-6 h-6 rounded-full text-sm flex items-center justify-center font-medium transition-all duration-200 ${
          isActive ? "bg-white text-blue-600" : "bg-gray-400 text-white"
        }`}
      >
        {step.number}
      </span>
      <span
        className={`text-sm font-medium leading-tight transition-all duration-200 ${
          isActive ? "text-white" : "text-gray-600"
        }`}
      >
        {step.title}
      </span>
      <span
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-opacity duration-200 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
