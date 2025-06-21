"use client";

import { useState, useMemo } from "react";
import type { IBlog } from "@/types/shared.types";

interface IUseBlogFilterProps {
  blogs: IBlog[];
  initialCategory?: string;
  blogsPerPage?: number;
}

export function useBlogFilter({
  blogs,
  initialCategory = "all",
  blogsPerPage = 12,
}: IUseBlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [displayCount, setDisplayCount] = useState(blogsPerPage);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") {
      return blogs;
    }
    return blogs.filter((blog) => blog.category === activeCategory);
  }, [blogs, activeCategory]);

  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, displayCount);
  }, [filteredBlogs, displayCount]);

  const hasMore = displayCount < filteredBlogs.length;

  const loadMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + blogsPerPage, filteredBlogs.length)
    );
  };

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setDisplayCount(blogsPerPage); // Reset display count when changing category
  };

  return {
    activeCategory,
    displayedBlogs,
    hasMore,
    loadMore,
    changeCategory,
    totalCount: filteredBlogs.length,
  };
}
