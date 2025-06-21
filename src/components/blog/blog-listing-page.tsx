"use client";

import { useBlogFilter } from "@/hooks/useBlogFilter";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { blogCategories, blogData } from "../../lib/blogData";
import { BlogCategoryTabs } from "@/components/blog/blog-category-tabs";
import { BlogList } from "@/components/blog/blog-list";
import BlogHeroSection from "@/components/blog/blog-hero-section";

export default function BlogListingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    activeCategory,
    displayedBlogs,
    hasMore,
    loadMore,
    changeCategory,
    totalCount,
  } = useBlogFilter({
    blogs: blogData,
    initialCategory: "all",
    blogsPerPage: 12,
  });

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    loadMore();
    setIsLoading(false);
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
            categories={blogCategories}
            activeCategory={activeCategory}
            onCategoryChange={changeCategory}
          />
        </div>

        {/* Blog List */}
        <BlogList blogs={displayedBlogs} />

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              variant="outline"
              size="lg"
              className="min-w-32"
            >
              {isLoading ? (
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
        {!hasMore && displayedBlogs.length > 0 && (
          <div className="text-center">
            <p className="text-primary-300 text-sm">
              You've reached the end of the articles.
            </p>
          </div>
        )}

        {/* No Results */}
        {displayedBlogs.length === 0 && (
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
