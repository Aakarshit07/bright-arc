import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  highlight?: boolean;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  highlight,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "max-w-[318px] h-[136px] box-content flex flex-col items-center justify-between gap-2 shadow-sm transition-all duration-300 ease-in-out text-center py-4 transform hover:scale-105",
        highlight ? "bg-primary-800 text-white" : "bg-white text-gray-800",
        className
      )}
    >
      <h3 className={cn("text-lg font-bold", highlight && "text-white")}>
        {title}
      </h3>
      <p className={cn("text-sm", highlight && "text-white/90")}>
        {description}
      </p>
      <div className="bg-secondary-500 w-9 h-9 flex items-center justify-center rounded-full text-center text-white">
        <ChevronRight width={24} height={24} />
      </div>
    </div>
  );
};
