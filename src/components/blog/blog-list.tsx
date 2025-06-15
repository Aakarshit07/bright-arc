import BlogCard from "./blog-card";
import type { IBlog } from "@/types/shared.types";

interface BlogGridProps {
  blogs: IBlog[];
  className?: string;
}

export function BlogList({ blogs, className = "" }: BlogGridProps) {
  return (
    <div
      className={`flex flex-wrap gap-6 lg:gap-8 items-start justify-center lg:justify-between ${className}`}
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          date={blog.date}
          mentorship={blog.featured}
          variant="vertical"
          imageUrl={blog.imageUrl}
          className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[350px] flex-shrink-0"
        />
      ))}
    </div>
  );
}
