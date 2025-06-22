import { ContactForm } from "@/components/contact-us/contact-form";
import FAQSection from "@/components/faqs/faq-section";
import { DefaultLayout } from "@/components/layout/default-layout";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-[70px] md:gap-[106px]">
        <ContactForm />
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
