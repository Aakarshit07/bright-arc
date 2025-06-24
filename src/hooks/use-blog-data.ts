"use client";

import { useState, useCallback } from "react";
import { blogApi } from "@/lib/api/blog-api";
import type { IBlog, ICategory } from "@/types/blog.types";

export function useBlogData() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = useCallback(async (categoryUrlKey?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      let response;

      if (!categoryUrlKey || categoryUrlKey === "all") {
        response = await blogApi.getAllBlogs();
      } else {
        response = await blogApi.getBlogsByCategory(categoryUrlKey);
      }

      if (response.success && response.data) {
        const fetchedBlogs = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setBlogs(fetchedBlogs);
      } else {
        setError(response.error || "Failed to fetch blogs");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await blogApi.getAllCategories();
      if (response.success && response.data) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  }, []);

  const refreshData = useCallback(() => {
    fetchBlogs();
    fetchCategories();
  }, [fetchBlogs, fetchCategories]);

  return {
    blogs,
    categories,
    isLoading,
    error,
    fetchBlogs,
    fetchCategories,
    refreshData,
  };
}
