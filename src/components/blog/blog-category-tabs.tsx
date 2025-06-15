"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IBlogCategory } from "@/types/shared.types";

interface BlogCategoryTabsProps {
  categories: IBlogCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoryTabsProps) {
  return (
    <Tabs
      value={activeCategory}
      onValueChange={onCategoryChange}
      className="w-full"
    >
      <TabsList className="p-0 h-auto bg-background gap-4 flex-wrap justify-start">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className="border border-primary-900 text-primary-900 rounded-full data-[state=active]:bg-primary-900 data-[state=active]:text-white hover:text-primary-800 hover:bg-primary-200 transition-colors"
          >
            <span className="text-sm font-medium">
              {category.name}
              <span className="ml-1 text-xs opacity-70">
                ({category.count})
              </span>
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
