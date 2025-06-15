import Image from "next/image";

interface BlogHeroSimpleProps {
  title: string;
  heroImage: string;
}

export function BlogHeroSimple({ title, heroImage }: BlogHeroSimpleProps) {
  return (
    <section className="relative mt-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative aspect-[3/2] lg:aspect-[3/1] rounded-lg overflow-hidden mb-8">
          <Image
            src={heroImage || "/blog_main.jpeg"}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
