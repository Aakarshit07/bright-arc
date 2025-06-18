import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ServiceItemProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  type: string;
}

export const ServiceItem = ({
  title,
  description,
  imageUrl,
  reverse = false,
  type,
}: ServiceItemProps) => {
  const navigate = useRouter();
  const handleClick = () => navigate.push("contact-us");
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-between gap-8 rounded-lg",
        reverse && "lg:flex-row-reverse"
      )}
      id={type}
    >
      <div className="relative w-full h-52 lg:w-[45%] lg:h-64 rounded-lg overflow-hidden shadow-md">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center rounded-lg"
        />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
        <Button
          className="w-max bg-primary-900 hover:bg-primary-800 text-white p-3 text-sm font-semibold rounded"
          onClick={handleClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
