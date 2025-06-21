"use client";
import { useSteps } from "@/hooks/useSteps";
import { DEFAULT_AUTO_ADVANCE_INTERVAL, DEFAULT_STEPS } from "@/lib/steps-data";
import { IStepsProps } from "@/types/shared.types";
import { StepsHeaderSection } from "./steps-header";
import { DesktopStepsTabs } from "./desktop-steps-section";
import { MobileStepsAccordion } from "./mobile-steps-accordion";

export default function StepsSection({
  steps = DEFAULT_STEPS,
  autoAdvanceInterval = DEFAULT_AUTO_ADVANCE_INTERVAL,
  initialActiveStep = DEFAULT_STEPS[0]?.id || "1",
}: IStepsProps = {}) {
  const { activeStep, setActiveStep } = useSteps({
    steps,
    autoAdvanceInterval,
    initialActiveStep,
  });

  return (
    <section className="w-full">
      <div className="container px-4 max-w-7xl mx-auto">
        <StepsHeaderSection
          title="Unlock your full potential with the Experts at Bright Arcs"
          description="Support the empowers with Guidance that completely transforms your life Support the empowers with Guidance that completely transforms your life."
        />

        <DesktopStepsTabs
          steps={steps}
          activeStep={activeStep}
          onStepChange={setActiveStep}
        />

        <MobileStepsAccordion
          steps={steps}
          activeStep={activeStep}
          onStepChange={setActiveStep}
        />
      </div>
    </section>
  );
}
