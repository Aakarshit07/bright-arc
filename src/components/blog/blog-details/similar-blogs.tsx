import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BlogCard from "../blog-card";
import { IBlog } from "@/types/blog.types";

interface SimilarBlogsProps {
  blogs: IBlog[];
  currentBlogId: string;
  className?: string;
}

export function SimilarBlogs({
  blogs,
  currentBlogId,
  className = "",
}: SimilarBlogsProps) {
  const similarBlogs = blogs
    .filter((blog) => blog._id !== currentBlogId)
    .slice(0, 6);

  if (similarBlogs.length === 0) return null;

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Similar Articles
        </h2>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-6 pb-4">
            {similarBlogs.map((blog) => (
              <div key={blog._id} className="w-[350px] flex-shrink-0">
                <BlogCard
                  title={blog.title}
                  description={blog.content}
                  author={blog.author}
                  date={blog.postDate}
                  // mentorship={blog.featured}
                  variant="vertical"
                  imageUrl={blog.image}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
