import { notFound } from "next/navigation";
import { DefaultLayout } from "@/components/layout/default-layout";
import { BlogLayout } from "@/components/blog/blog-details/blog-layout";
import { blogApi } from "@/lib/api/blog-api";
import type { IBlog } from "@/types/blog.types";

interface BlogDetailPageProps {
  params: Promise<{
    blogdetails: string;
  }>;
}

// Server-side data fetching for individual blog
async function getBlogData(slug: string): Promise<IBlog | null> {
  try {
    console.log("Fetching blog data for slug:", slug);

    const response = await blogApi.getBlogBySlug(slug);

    if (response.success && response.data) {
      console.log("Successfully fetched blog:", response.data.title);
      return response.data;
    } else {
      console.error("Failed to fetch blog:", response.error);
      return null;
    }
  } catch (error) {
    console.error("Error in getBlogData:", error);
    return null;
  }
}

// Fetch related blogs from the same category
async function getRelatedBlogs(
  categoryUrlKey: string,
  currentBlogId: string
): Promise<IBlog[]> {
  try {
    console.log("Fetching related blogs for category:", categoryUrlKey);

    const categoryResponse = await blogApi.getBlogsByCategory(categoryUrlKey);
    if (categoryResponse.success && categoryResponse.data) {
      const relatedBlogs = categoryResponse.data
        .filter((blog) => blog._id !== currentBlogId)
        .slice(0, 6);
      console.log("Found related blogs:", relatedBlogs.length);
      return relatedBlogs;
    }

    // Fallback: get all blogs and filter by category
    const allBlogsResponse = await blogApi.getAllBlogs();
    if (allBlogsResponse.success && allBlogsResponse.data) {
      const relatedBlogs = allBlogsResponse.data
        .filter(
          (blog) =>
            blog._id !== currentBlogId &&
            blog.category.urlKey === categoryUrlKey
        )
        .slice(0, 6);
      return relatedBlogs;
    }

    return [];
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  try {
    const { blogdetails: blogSlug } = await params;
    console.log("Blog slug from params:", blogSlug);

    if (!blogSlug || typeof blogSlug !== "string") {
      console.error("Invalid blog slug:", blogSlug);
      notFound();
    }

    const blog = await getBlogData(blogSlug);
    if (!blog) {
      console.log("Blog not found, redirecting to 404");
      notFound();
    }

    const relatedBlogs = await getRelatedBlogs(blog.category.urlKey, blog._id);

    return (
      <DefaultLayout>
        <BlogLayout blog={blog} relatedBlogs={relatedBlogs} />
      </DefaultLayout>
    );
  } catch (error) {
    console.error("Error in BlogDetailPage:", error);
    notFound();
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  try {
    const { blogdetails: blogSlug } = await params;

    if (!blogSlug) {
      return {
        title: "Blog Not Found",
      };
    }

    const blog = await getBlogData(blogSlug);

    if (!blog) {
      return {
        title: "Blog Not Found",
      };
    }

    const description = blog.content
      ? blog.content.replace(/<[^>]*>/g, "").substring(0, 160) + "..."
      : "Read this blog post for insights and expert advice.";

    return {
      title: blog.title,
      description,
      openGraph: {
        title: blog.title,
        description,
        images: blog.image ? [blog.image] : [],
        type: "article",
        publishedTime: blog.postDate,
        authors: [blog.author],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found",
    };
  }
}

// REMOVED: generateStaticParams function
// This makes the page fully dynamic

// Enable ISR with revalidation for caching
export const revalidate = 300; // 5 minutes
