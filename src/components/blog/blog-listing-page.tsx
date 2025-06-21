"use client";

import { useEffect, useState } from "react";
import { useBlogStore } from "@/stores/blog-store";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { BlogCategoryTabs } from "@/components/blog/blog-category-tabs";
import { BlogList } from "@/components/blog/blog-list";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import type { IBlog, ICategory, ICategoryWithCount } from "@/types/blog.types";
import { showError, showSuccess } from "@/lib/toast-utils";

interface BlogListingPageProps {
  initialBlogs: IBlog[];
  initialCategories: ICategory[];
}

export default function BlogListingPage({
  initialBlogs,
  initialCategories,
}: BlogListingPageProps) {
  const {
    blogs,
    categories,
    activeCategory,
    isLoading,
    hasMore,
    setBlogs,
    setCategories,
    fetchBlogs,
    fetchBlogsByCategory,
  } = useBlogStore();

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Initialize store with SSR data
  useEffect(() => {
    if (initialBlogs.length > 0) {
      setBlogs(initialBlogs);
    }
    if (initialCategories.length > 0) {
      setCategories(initialCategories);
    }
  }, [initialBlogs, initialCategories, setBlogs, setCategories]);

  // Create categories with counts for tabs
  const categoriesWithCount: ICategoryWithCount[] = [
    {
      _id: "all",
      categoryName: "all",
      activeStatus: "active" as const,
      urlKey: "all",
      blogCount: initialBlogs.length,
    },
    ...categories.map((category) => ({
      ...category,
      blogCount: blogs.filter((blog) => blog.category._id === category._id)
        .length,
    })),
  ];

  const handleCategoryChange = async (category: string) => {
    if (category === activeCategory) return;

    try {
      if (category === "all") {
        await fetchBlogs("all", true);
      } else {
        await fetchBlogsByCategory(category);
      }
    } catch (error) {
      showError(error, "Category Change");
    }
  };

  const handleLoadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoadingMore(true);
    try {
      await fetchBlogs(activeCategory, false);
    } catch (error) {
      showError(error, "Load More");
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <section className="py-12 bg-background flex flex-col gap-[70px] md:gap-[106px]">
      <div className="container mx-auto px-4 lg:px-16 max-w-7xl">
        {/* Header */}
        <BlogHeroSection
          tag="Leadership"
          title="Latest Insights & Expert Advice"
          description="Discover valuable insights, tips, and expert advice from our team of professionals across mentorship, consulting, and thought leadership. Stay updated with the latest trends and strategies."
          className="mb-12"
        />

        {/* Category Tabs */}
        <div className="mb-8">
          <BlogCategoryTabs
            categories={categoriesWithCount}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            isLoading={isLoading}
          />
        </div>

        {/* Blog List */}
        {isLoading && blogs.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Loading blogs...</span>
          </div>
        ) : (
          <BlogList blogs={blogs} />
        )}

        {/* Load More Button */}
        {hasMore && blogs.length > 0 && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              variant="outline"
              size="lg"
              className="min-w-32"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}

        {/* No More Results */}
        {!hasMore && blogs.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-primary-300 text-sm">
              You've reached the end of the articles.
            </p>
          </div>
        )}

        {/* No Results */}
        {blogs.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-primary-300 text-sm">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
