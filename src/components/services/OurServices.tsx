"use client";

import { ServiceItem } from "./ServiceItem";

const services = [
  {
    title: "Mentorships – Admission Counselling",
    description:
      "Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    imageUrl: "/office_image.jpg",
    type: "mentorship",
  },
  {
    title: "Thought Leadership – Industry Insights & Academic Writing",
    description:
      "Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    imageUrl: "/office_image.jpg",
    type: "leadership",
  },
  {
    title: "Consulting – Content Strategy & Marketing",
    description:
      "Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    imageUrl: "/office_image.jpg",
    type: "consulting",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container max-w-6xl px-4 mx-auto space-y-12">
        {services.map((service, index) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            reverse={index % 2 === 1}
            type={service.type}
          />
        ))}
      </div>
    </section>
  );
}
