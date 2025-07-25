"use client";

import type React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Calendar, User } from "lucide-react";
import { stripHtmlTags } from "@/lib/stripHtmlTags";

interface IBlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string | Date;
  mentorship?: boolean;
  variant?: "vertical" | "horizontal";
  imageUrl?: string;
  className?: string;
  slug: string;
}

const BlogCard: React.FC<IBlogCardProps> = ({
  title,
  description,
  author,
  date,
  mentorship = false,
  variant = "vertical",
  imageUrl = "/placeholder.svg?height=250&width=350&text=Blog+Image",
  className,
  slug,
}) => {
  const router = useRouter();
  const isHorizontal = variant === "horizontal";

  const handleCardClick = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-transparent flex-shrink-0 blog-card border-0 shadow-none cursor-pointer",

        isHorizontal
          ? "flex flex-row gap-6 w-full h-[350px] sm:w-full sm:h-fit sm:max-w-xl rounded-xl"
          : "!w-full sm:!w-[350px] h-fit rounded-t-xl rounded-b-none",

        className
      )}
      onClick={handleCardClick}
    >
      <CardContent
        className={cn(
          "w-full flex gap-6 p-0",
          isHorizontal ? "flex-row" : "flex-col !w-full sm:!w-[350px]"
        )}
      >
        {/* Blog Image */}
        <div
          className={cn(
            "rounded-xl relative",
            "border border-transparent transition-colors group-hover:border-primary",
            "box-border",
            isHorizontal
              ? "w-1/2 h-[350px] lg:w-60 lg:h-44"
              : "w-full h-[250px]"
          )}
        >
          <Image
            src={
              imageUrl === "https://example.com/image.png"
                ? "/placeholder.svg"
                : imageUrl
            }
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
          {mentorship && (
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 bg-accent-700 text-white text-xs font-semibold rounded-lg z-10"
            >
              mentorship
            </Badge>
          )}
        </div>

        {/* Blog Content */}
        <div className={cn("flex", isHorizontal ? "w-1/2 lg:w-3/5" : "w-full")}>
          <div className="w-full">
            <h3
              className={cn(
                "text-xl lg:text-2xl font-medium text-gray-950 leading-normal",
                "group-hover:text-primary transition-colors duration-200 line-clamp-1 text-ellipsis"
              )}
            >
              {title}
            </h3>

            <div
              className={cn(
                "flex items-center gap-6 text-xs text-gray-500 my-1",
                isHorizontal && "flex-col items-start gap-3"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-2 mb-1",
                  isHorizontal && "mb-0"
                )}
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div
                className={cn(
                  "flex items-center gap-2 mb-1",
                  isHorizontal && "mb-0"
                )}
              >
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
            </div>

            <p
              className={cn(
                "text-gray-900 text-base leading-relaxed",
                isHorizontal ? "lg:line-clamp-4" : "line-clamp-3 text-ellipsis"
              )}
            >
              {stripHtmlTags(description).length > 190
                ? stripHtmlTags(description).slice(0, 190) + "..."
                : stripHtmlTags(description)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
