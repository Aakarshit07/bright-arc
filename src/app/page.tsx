import AchievementsSection from "@/components/about-us/achievements-section";
import JoinJourneySection from "@/components/about-us/join-journey-section";
import FAQSection from "@/components/faqs/faq-section";
import { DefaultLayout } from "@/components/layout/default-layout";
import { PartnersSection } from "@/components/shared/partner-section";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <PartnersSection />
        <AchievementsSection />
        <JoinJourneySection />
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
