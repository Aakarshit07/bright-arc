"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { IBlog } from "@/types/blog.types";
import type { BlogComment } from "@/types/blog-detail.types";
import { BlogHeroSimple } from "./blog-hero";
import { BlogSidebarInfo } from "./blog-navigation";
import { BlogContent } from "./blog-content";
import { SimilarBlogs } from "./similar-blogs";
import { CommentSheet } from "./comment-sheet";
import { blogApi } from "@/lib/blog-api";
import { showError, showSuccess } from "@/lib/toast-utils";

interface BlogLayoutProps {
  blog: IBlog;
  relatedBlogs: IBlog[];
  className?: string;
}

export function BlogLayout({
  blog,
  relatedBlogs,
  className = "",
}: BlogLayoutProps) {
  const [isCommentSheetOpen, setIsCommentSheetOpen] = useState(false);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog.likeCount);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();
  }, [blog.slug]);

  const fetchComments = async () => {
    try {
      const response = await blogApi.getComments(blog.slug, "approved");
      if (response.success) {
        const formattedComments: BlogComment[] = response.data.comments.map(
          (comment: any) => ({
            id: comment._id,
            author: comment.user,
            content: comment.text,
            timestamp: new Date(comment.date).toLocaleDateString(),
            status: comment.status,
          })
        );
        setComments(formattedComments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleLike = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = isLiked
        ? await blogApi.unlikeBlog(blog.slug)
        : await blogApi.likeBlog(blog.slug);

      if (response.success) {
        setIsLiked(!isLiked);
        setLikeCount(response.data.likeCount);
        showSuccess(isLiked ? "Removed like" : "Liked!");
      } else {
        showError(response, "Like Action");
      }
    } catch (error) {
      showError(error, "Like Action");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitComment = async (
    name: string,
    email: string,
    content: string
  ) => {
    try {
      const response = await blogApi.addComment(blog.slug, {
        user: name,
        text: content,
      });

      if (response.success) {
        showSuccess("Comment submitted for review!");
        // Optionally refresh comments or add to pending list
        await fetchComments();
      } else {
        showError(response, "Submit Comment");
      }
    } catch (error) {
      showError(error, "Submit Comment");
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={cn("relative", className)}>
      {/* Hero Section */}
      <BlogHeroSimple
        title={blog.title}
        heroImage={blog.image || "/blog_main.jpeg"}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Top in mobile, left in desktop */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <div className="sticky lg:top-24">
              <BlogSidebarInfo
                author={blog.author}
                authorImage="/placeholder.svg?height=40&width=40"
                date={formatDate(blog.postDate)}
                readTime="5 min read"
                category={blog.category.categoryName}
                likeCount={likeCount}
                isLiked={isLiked}
                onLike={handleLike}
                onOpenComments={() => setIsCommentSheetOpen(true)}
                commentCount={blog.commentCount}
                isLoading={isLoading}
              />
            </div>
          </div>

          {/* Main Content - Below sidebar in mobile, right in desktop */}
          <div className="lg:col-span-3 order-2 lg:order-2">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>

              <BlogContent content={blog.content} />
            </div>
          </div>
        </div>
      </div>

      {/* Similar Blogs */}
      <SimilarBlogs
        blogs={relatedBlogs}
        currentBlogId={blog._id}
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
