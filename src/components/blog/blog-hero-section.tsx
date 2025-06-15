import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  backgroundImage?: string;
  tag?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function BlogHeroSection({
  backgroundImage = "/blog_hero_image.jpeg",
  tag = "Leadership",
  title = "What makes Bright Arc the love of its Patrons",
  description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`rounded-3xl relative w-full h-[450px] lg:h-[600px] overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Overlay Container */}
      <div className="absolute bottom-0 left-0 right-0 m-2 lg:m-6">
        <div className="bg-primary-600/70 backdrop-blur-sm text-white p-3 lg:p-6 rounded-xl">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              {/* Tag/Badge */}
              <Badge
                variant="secondary"
                className="mb-4 bg-accent-700  text-white border-0 text-xs font-medium px-3 py-1"
              >
                {tag}
              </Badge>

              {/* Title */}
              <h1 className="text-lg xl:text-2xl font-bold mb-4 leading-tight">
                {title}
              </h1>

              {/* Description */}
              <p className="text-sm lg:text-base text-primary-100 leading-relaxed max-w-3xl line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
