"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { BlogCategoryTabs } from "@/components/blog/blog-category-tabs";
import { BlogList } from "@/components/blog/blog-list";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import { blogApi } from "@/lib/api/blog-api";
import type { IBlog, ICategory } from "@/types/blog.types";
import { Loader2 } from "lucide-react";

interface BlogListingPageProps {
  initialBlogs: IBlog[];
  initialCategories: ICategory[];
}

export default function BlogListingPage({
  initialBlogs,
  initialCategories,
}: BlogListingPageProps) {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlogs);
  const [categories] = useState<ICategory[]>(initialCategories);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const itemsPerPage = 12;

  // Create categories with counts from backend data
  const categoriesWithAll: ICategory[] = [
    {
      _id: "all",
      categoryName: "all",
      activeStatus: "active" as const,
      urlKey: "all",
      blogCount: initialBlogs.length,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ...categories,
  ];

  // Fetch blogs by category from API instead of filtering
  const fetchBlogsByCategory = useCallback(
    async (categoryUrlKey: string, page = 1) => {
      setIsLoading(true);

      try {
        let response;

        if (categoryUrlKey === "all") {
          response = await blogApi.getAllBlogs();
        } else {
          response = await blogApi.getBlogsByCategory(categoryUrlKey);
        }

        if (response.success && response.data) {
          const fetchedBlogs = Array.isArray(response.data)
            ? response.data
            : [response.data];

          if (page === 1) {
            // First page - replace blogs
            const paginatedBlogs = fetchedBlogs.slice(0, itemsPerPage);
            setBlogs(paginatedBlogs);
            setHasMore(fetchedBlogs.length > itemsPerPage);
          } else {
            // Load more - append blogs
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = page * itemsPerPage;
            const newBlogs = fetchedBlogs.slice(startIndex, endIndex);

            setBlogs((prev) => [...prev, ...newBlogs]);
            setHasMore(endIndex < fetchedBlogs.length);
          }
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Handle category change
  const handleCategoryChange = useCallback(
    async (category: string) => {
      if (category === activeCategory) return;

      setActiveCategory(category);
      setCurrentPage(1);
      await fetchBlogsByCategory(category, 1);
    },
    [activeCategory, fetchBlogsByCategory]
  );

  // Handle load more
  const handleLoadMore = useCallback(async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await fetchBlogsByCategory(activeCategory, nextPage);
  }, [currentPage, activeCategory, fetchBlogsByCategory]);

  // Initial load effect
  useEffect(() => {
    // Set initial blogs from props
    setBlogs(initialBlogs.slice(0, itemsPerPage));
    setHasMore(initialBlogs.length > itemsPerPage);
  }, [initialBlogs]);

  const filteredBlogs = blogs.filter(
    (blog) => blog.category.categoryName !== "unassigned"
  );

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
            categories={categoriesWithAll}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            isLoading={isLoading}
          />
        </div>

        {/* Loading State */}
        {isLoading && blogs.length === 0 && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        )}

        {/* Blog List */}
        {blogs.length > 0 ? (
          <BlogList blogs={filteredBlogs} />
        ) : !isLoading ? (
          <div className="text-center py-12">
            <p className="text-primary-300 text-sm">No articles found.</p>
          </div>
        ) : null}

        {/* Load More Button */}
        {hasMore && blogs.length > 0 && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              className="min-w-32"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
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
      </div>
    </section>
  );
}
