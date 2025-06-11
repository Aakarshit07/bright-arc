import AchievementsSection from "@/components/about-us/achievements-section";
import BrandsSection from "@/components/about-us/brands-section";
import FAQSection from "@/components/faqs/faq-section";
import HeroSection from "@/components/about-us/hero-section";
import JoinJourneySection from "@/components/about-us/join-journey-section";
import OurStorySection from "@/components/about-us/our-story-section";
import TeamSection from "@/components/about-us/team-section";
import { DefaultLayout } from "@/components/layout/default-layout";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <HeroSection />
        <OurStorySection />
        <AchievementsSection />
        <FAQSection />
        <TeamSection />
        <BrandsSection />
        <JoinJourneySection />
      </div>
    </DefaultLayout>
  );
}
