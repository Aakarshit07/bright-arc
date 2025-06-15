"use client";

import { cn } from "@/lib/utils";
import type { BlogContentProps } from "@/types/blog-detail.types";

export function BlogContent({ content, className = "" }: BlogContentProps) {
  return (
    <article
      className={cn(
        "prose prose-lg max-w-none prose-headings:scroll-mt-24",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
