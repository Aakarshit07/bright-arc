import AchievementsSection from "@/components/about-us/achievements-section";
import JoinJourneySection from "@/components/about-us/join-journey-section";
import FAQSection from "@/components/faqs/faq-section";
import HomeHeroSection from "@/components/home/hero-section";
import StepsSection from "@/components/home/steps-section/steps-section";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { DefaultLayout } from "@/components/layout/default-layout";
import { PartnersSection } from "@/components/shared/partner-section";
import { sampleTestimonials } from "@/lib/sampleTestmonial";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <HomeHeroSection />
        <PartnersSection />
        <StepsSection />
        <TestimonialCarousel testimonials={sampleTestimonials} autoPlay />
        <AchievementsSection />
        <JoinJourneySection />
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
