import AchievementsSection from "@/components/about-us/achievements-section";
import FAQSection from "@/components/faqs/faq-section";
import { DefaultLayout } from "@/components/layout/default-layout";
import OurServices from "@/components/services/OurServices";
import { ServicesSection } from "@/components/services/ServicesSection";

export default function ServicesPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <ServicesSection />
        <AchievementsSection />
        <OurServices />
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
