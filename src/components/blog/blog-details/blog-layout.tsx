"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BlogComment } from "@/types/blog-detail.types";
import { BlogHeroSimple } from "./blog-hero";
import { BlogSidebarInfo } from "./blog-navigation";
import { BlogContent } from "./blog-content";
import { blogData, sampleBlogContent } from "@/lib/blogData";
import { SimilarBlogs } from "./similar-blogs";
import { CommentSheet } from "./comment-sheet";

interface BlogLayoutProps {
  className?: string;
}

export function BlogLayout({ className = "" }: BlogLayoutProps) {
  const [isCommentSheetOpen, setIsCommentSheetOpen] = useState(false);
  const [comments, setComments] = useState<BlogComment[]>(
    sampleBlogContent.comments
  );
  const [isLiked, setIsLiked] = useState(sampleBlogContent.isLiked);
  const [likeCount, setLikeCount] = useState(sampleBlogContent.likeCount);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleSubmitComment = async (
    name: string,
    email: string,
    content: string
  ) => {
    const newComment: BlogComment = {
      id: `comment-${Date.now()}`,
      author: name,
      content: content,
      timestamp: "Just now",
      status: "pending",
    };

    console.log("Submitting comment for admin approval:", {
      name,
      email,
      content,
    });
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <BlogHeroSimple
        title={sampleBlogContent.title}
        heroImage={sampleBlogContent.heroImage}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Top in mobile, left in desktop */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <div className="sticky lg:top-24">
              <BlogSidebarInfo
                author={sampleBlogContent.author}
                authorImage={sampleBlogContent.authorImage}
                date={sampleBlogContent.date}
                readTime={sampleBlogContent.readTime}
                category={sampleBlogContent.category}
                likeCount={likeCount}
                isLiked={isLiked}
                onLike={handleLike}
                onOpenComments={() => setIsCommentSheetOpen(true)}
              />
            </div>
          </div>

          {/* Main Content - Below sidebar in mobile, right in desktop */}
          <div className="lg:col-span-3 order-2 lg:order-2">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {sampleBlogContent.title}
              </h1>

              <BlogContent content={sampleBlogContent.content} />
            </div>
          </div>
        </div>
      </div>

      {/* Similar Blogs */}
      <SimilarBlogs
        blogs={blogData}
        currentBlogId={sampleBlogContent.id}
        className="bg-muted/30"
      />

      {/* Comment Sheet */}
      <CommentSheet
        isOpen={isCommentSheetOpen}
        onClose={() => setIsCommentSheetOpen(false)}
        comments={comments}
        onSubmitComment={handleSubmitComment}
      />
    </div>
  );
}
