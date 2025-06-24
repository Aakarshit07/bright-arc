import { Suspense } from "react";
import { DefaultLayout } from "@/components/layout/default-layout";
import BlogListingPage from "@/components/blog/blog-listing-page";
import { blogApi } from "@/lib/api/blog-api";
import type { IBlog, ICategory } from "@/types/blog.types";
import { BlogListingSkeleton } from "@/components/blog/blog-listing-skeleton";

// Server-side data fetching with revalidation
async function getBlogsData(): Promise<{
  blogs: IBlog[];
  categories: ICategory[];
}> {
  try {
    const [blogsResponse, categoriesResponse] = await Promise.all([
      blogApi.getAllBlogs(),
      blogApi.getAllCategories(),
    ]);

    return {
      blogs: blogsResponse.success ? blogsResponse.data : [],
      categories: categoriesResponse.success ? categoriesResponse.data : [],
    };
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return {
      blogs: [],
      categories: [],
    };
  }
}

export default async function BlogsPage() {
  const { blogs, categories } = await getBlogsData();

  return (
    <DefaultLayout>
      <Suspense fallback={<BlogListingSkeleton />}>
        <BlogListingPage initialBlogs={blogs} initialCategories={categories} />
      </Suspense>
    </DefaultLayout>
  );
}

// Enable ISR (Incremental Static Regeneration) - revalidate every 60 seconds
export const revalidate = 60;

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: "Blog - Latest Insights & Expert Advice",
    description:
      "Discover valuable insights, tips, and expert advice from our team of professionals across mentorship, consulting, and thought leadership.",
    openGraph: {
      title: "Blog - Latest Insights & Expert Advice",
      description: "Stay updated with the latest trends and strategies.",
      type: "website",
    },
  };
}
