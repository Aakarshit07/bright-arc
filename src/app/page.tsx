import AchievementsSection from "@/components/about-us/achievements-section";
import JoinJourneySection from "@/components/about-us/join-journey-section";
import FAQSection from "@/components/faqs/faq-section";
import HomeHeroSection from "@/components/home/hero-section";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { DefaultLayout } from "@/components/layout/default-layout";
import { PartnersSection } from "@/components/shared/partner-section";
import { sampleTestimonials } from "@/lib/sampleTestmonial";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <HomeHeroSection />
        <div className="bg-primary-100 px-4 py-8 lg:pt-[86px] lg:px-[168px] lg:pb-7">
          <TestimonialCarousel testimonials={sampleTestimonials} autoPlay />
        </div>
        <PartnersSection />
        <AchievementsSection />
        <JoinJourneySection />
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
