import { notFound } from "next/navigation";
import { DefaultLayout } from "@/components/layout/default-layout";
import { BlogLayout } from "@/components/blog/blog-details/blog-layout";
import { blogApi } from "@/lib/blog-api";
import type { IBlog } from "@/types/blog.types";

interface BlogDetailPageProps {
  params: Promise<{
    blogdetails: string;
  }>;
}

// Server-side data fetching for individual blog
async function getBlogData(slug: string): Promise<IBlog | null> {
  try {
    console.log("Fetching blog with slug:", slug);
    const response = await blogApi.getBlogBySlug(slug);
    console.log("Blog API response:", response);
    return response.success ? response.data : null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Fetch related blogs from the same category (simplified approach)
async function getRelatedBlogs(
  categoryUrlKey: string,
  currentBlogId: string
): Promise<IBlog[]> {
  try {
    console.log("Fetching related blogs for category:", categoryUrlKey);

    // First try to get blogs by category
    const categoryResponse = await blogApi.getBlogsByCategory(categoryUrlKey);
    if (categoryResponse.success) {
      return categoryResponse.data
        .filter((blog) => blog._id !== currentBlogId)
        .slice(0, 6);
    }

    // Fallback: get all blogs and filter by category
    console.log("Category API failed, trying getAllBlogs fallback");
    const allBlogsResponse = await blogApi.getAllBlogs();
    if (allBlogsResponse.success) {
      return allBlogsResponse.data
        .filter(
          (blog) =>
            blog._id !== currentBlogId &&
            blog.category.urlKey === categoryUrlKey
        )
        .slice(0, 6);
    }

    return [];
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Await params in Next.js 15
  const { blogdetails: blogId } = await params;
  // console.log("Blog ID from params:", params);

  const blog = await getBlogData(blogId);
  if (!blog) {
    console.log("Blog not found, redirecting to 404");
    notFound();
  }

  // Get related blogs from the same category
  const relatedBlogs = await getRelatedBlogs(blog.category.urlKey, blog._id);
  console.log("Related blogs found:", relatedBlogs.length);

  return (
    <DefaultLayout>
      <BlogLayout blog={blog} relatedBlogs={relatedBlogs} />
    </DefaultLayout>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { blogdetails: blogId } = await params;
  const blog = await getBlogData(blogId);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160) + "...",
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160) + "...",
      images: blog.image ? [blog.image] : [],
      type: "article",
      publishedTime: blog.postDate.toISOString(),
      authors: [blog.author],
    },
  };
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  try {
    const response = await blogApi.getAllBlogs();
    const blogs = response.success ? response.data : [];

    return blogs.map((blog) => ({
      blogId: blog.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
