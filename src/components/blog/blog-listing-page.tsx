"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BlogCategoryTabs } from "@/components/blog/blog-category-tabs";
import { BlogList } from "@/components/blog/blog-list";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import type { IBlog, ICategory, ICategoryWithCount } from "@/types/blog.types";

interface BlogListingPageProps {
  initialBlogs: IBlog[];
  initialCategories: ICategory[];
}

export default function BlogListingPage({
  initialBlogs,
  initialCategories,
}: BlogListingPageProps) {
  // Simple state management without Zustand for now
  const [allBlogs] = useState<IBlog[]>(initialBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState<IBlog[]>(initialBlogs);
  const [displayedBlogs, setDisplayedBlogs] = useState<IBlog[]>(
    initialBlogs.slice(0, 12)
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Create categories with counts
  const getBlogCountByCategory = (categoryUrlKey: string) => {
    if (categoryUrlKey === "all") {
      return allBlogs.length;
    }
    return allBlogs.filter((blog) => blog.category.urlKey === categoryUrlKey)
      .length;
  };

  const categoriesWithCount: ICategoryWithCount[] = [
    {
      _id: "all",
      categoryName: "all",
      activeStatus: "active" as const,
      urlKey: "all",
      blogCount: getBlogCountByCategory("all"),
    },
    ...initialCategories.map((category) => ({
      ...category,
      blogCount: getBlogCountByCategory(category.urlKey),
    })),
  ];

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;

    let filtered: IBlog[];
    if (category === "all") {
      filtered = allBlogs;
    } else {
      filtered = allBlogs.filter((blog) => blog.category.urlKey === category);
    }

    const displayed = filtered.slice(0, itemsPerPage);

    setFilteredBlogs(filtered);
    setDisplayedBlogs(displayed);
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const endIndex = nextPage * itemsPerPage;
    const newDisplayed = filteredBlogs.slice(0, endIndex);

    setDisplayedBlogs(newDisplayed);
    setCurrentPage(nextPage);
  };

  const hasMoreBlogs = () => {
    return displayedBlogs.length < filteredBlogs.length;
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
            isLoading={false}
          />
        </div>

        {/* Blog List */}
        {displayedBlogs.length > 0 ? (
          <BlogList blogs={displayedBlogs} />
        ) : (
          <div className="text-center py-12">
            <p className="text-primary-300 text-sm">No articles found.</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMoreBlogs() && displayedBlogs.length > 0 && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              size="lg"
              className="min-w-32"
            >
              Load More ({filteredBlogs.length - displayedBlogs.length}{" "}
              remaining)
            </Button>
          </div>
        )}

        {/* No More Results */}
        {!hasMoreBlogs() && displayedBlogs.length > 0 && (
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
