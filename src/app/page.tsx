import { TestimonialCard } from "@/components/success-stories/testimonial-card";

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Lorem Ipsum",
      position: "Executive Assistant",
      company: "ABZ Company",
      testimonial:
        "I loved the 1:1 guidance provided at Bright Arc. The mentorship experience was beyond anything, definitely recommended.",
      imageUrl: "/real-2.jpeg",
    },
  ];

  return (
    <div className="border-2 border-primary-500">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          position={testimonial.position}
          company={testimonial.company}
          testimonial={testimonial.testimonial}
          imageUrl={testimonial.imageUrl}
          className="w-full"
          isActive={false}
        />
      ))}
    </div>
  );
}
