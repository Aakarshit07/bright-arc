"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Lorem ipsum gypsum es simplemente el texto de relleno de las?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum gypsum es simplemente el texto de relleno de las?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum gypsum es simplemente el texto de relleno de las?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum gypsum es simplemente el texto de relleno de las?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className=" bg-white mb-[106px]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">FAQs</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 border-b border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="py-6 px-0 hover:no-underline hover:bg-transparent [&[data-state=open]>div>div]:rotate-45 [&>svg]:hidden">
                <div className="flex items-center justify-between w-full">
                  <span className="text-left text-base sm:text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="shrink-0">
                    <div className="w-5 h-5 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-200">
                      <Plus className="sm:h-5 sm:w-5 text-white transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0 px-0">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
