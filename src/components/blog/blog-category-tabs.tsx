"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ICategory } from "@/types/blog.types";
import { Loader2 } from "lucide-react";

interface BlogCategoryTabsProps {
  categories: ICategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isLoading?: boolean;
}

export function BlogCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
  isLoading = false,
}: BlogCategoryTabsProps) {
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-10">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}

      <Tabs
        value={activeCategory}
        onValueChange={onCategoryChange}
        className="w-full"
      >
        <TabsList className="p-0 h-auto bg-background gap-4 flex-wrap justify-start">
          {categories.map((category) => (
            <TabsTrigger
              key={category._id}
              value={category._id === "all" ? "all" : category.urlKey}
              className="border border-primary-900 text-primary-900 rounded-full data-[state=active]:bg-primary-900 data-[state=active]:text-white hover:text-primary-800 hover:bg-primary-200 transition-colors"
              disabled={isLoading}
            >
              <span className="text-sm font-medium">
                {category.categoryName.charAt(0).toUpperCase() +
                  category.categoryName.slice(1)}
                <span className="ml-1 text-xs opacity-70">
                  ({category.blogCount})
                </span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
