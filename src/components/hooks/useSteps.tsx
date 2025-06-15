"use client";

import { IStep, IUseStepsReturn } from "@/types/shared.types";
import { useState, useEffect, useCallback } from "react";

interface UseStepsProps {
  steps: IStep[];
  autoAdvanceInterval: number;
  initialActiveStep: string;
}

export function useSteps({
  steps,
  autoAdvanceInterval,
  initialActiveStep,
}: UseStepsProps): IUseStepsReturn {
  const [activeStep, setActiveStepState] = useState(initialActiveStep);

  const setActiveStep = useCallback((stepId: string) => {
    setActiveStepState(stepId);
  }, []);

  useEffect(() => {
    if (autoAdvanceInterval <= 0) return;

    const interval = setInterval(() => {
      const currentIndex = steps.findIndex((step) => step.id === activeStep);
      const nextIndex = (currentIndex + 1) % steps.length;
      const nextStep = steps[nextIndex].id;
      setActiveStepState(nextStep);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [activeStep, steps, autoAdvanceInterval]);

  return { activeStep, setActiveStep };
}
