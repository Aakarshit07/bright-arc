"use client";

import type React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Calendar, User } from "lucide-react";

interface IBlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  mentorship?: boolean;
  variant?: "vertical" | "horizontal";
  imageUrl?: string;
  className?: string;
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
}) => {
  const isHorizontal = variant === "horizontal";

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-transparent flex-shrink-0 blog-card border-0 shadow-none",
        isHorizontal
          ? "flex flex-row gap-6 w-[350px] h-[350px] laptop:w-full laptop:h-fit laptop:max-w-xl rounded-xl"
          : "!w-80 laptop:!w-[350px] h-fit rounded-t-xl rounded-b-none",
        className
      )}
    >
      <CardContent
        className={cn(
          "w-full flex gap-6 p-0",
          isHorizontal ? "flex-row" : "flex-col !w-80 laptop:!w-[350px]"
        )}
      >
        {/* Blog Image */}
        <div
          className={cn(
            "rounded-xl relative",
            "border border-transparent transition-colors group-hover:border-primary",
            "box-border",
            isHorizontal
              ? "w-1/2 h-[350px] laptop:w-60 laptop:h-44"
              : "w-full h-[250px]"
          )}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            priority
            sizes={
              isHorizontal
                ? "(max-width: 768px) 200px, 220px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
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
        <div
          className={cn("flex", isHorizontal ? "w-1/2 laptop:w-3/5" : "w-full")}
        >
          <div className="w-full">
            <div
              className={cn(
                "flex items-center gap-6 text-xs text-gray-500",
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
                <span>{date}</span>
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

            <h3
              className={cn(
                "text-xl laptop:text-2xl font-medium mb-4 mt-2 text-gray-950 leading-normal",
                "group-hover:text-primary transition-colors duration-200 line-clamp-1 text-ellipsis"
              )}
            >
              {title}
            </h3>

            <p
              className={cn(
                "text-gray-900 text-base leading-relaxed",
                isHorizontal
                  ? "laptop:line-clamp-4"
                  : "line-clamp-3 text-ellipsis"
              )}
            >
              {description.length > 190
                ? description.slice(0, 190) + "..."
                : description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
