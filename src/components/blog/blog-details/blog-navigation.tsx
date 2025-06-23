"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Copy,
  Check,
  User,
  Calendar,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BlogSidebarInfoProps {
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  likeCount: number;
  isLiked: boolean;
  onLike: () => void;
  onOpenComments: () => void;
  commentCount: number;
  isLoading?: boolean;
  className?: string;
}

export function BlogSidebarInfo({
  author,
  date,
  category,
  likeCount,
  isLiked,
  onLike,
  onOpenComments,
  commentCount,
  isLoading = false,
  className = "",
}: BlogSidebarInfoProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Share Article */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Share Article
        </h3>
        <div className="flex space-x-2">
          <Button
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer bg-linear-to-r from-secondary-500 to-accent-600 text-white"
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?url=${window.location.href}`,
                "_blank"
              )
            }
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer bg-linear-to-r from-secondary-500 to-accent-600 text-white"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                "_blank"
              )
            }
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer bg-linear-to-r from-secondary-500 to-accent-600 text-white"
          >
            <Instagram className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full cursor-pointer bg-linear-to-r from-secondary-500 to-accent-600 text-white"
            onClick={handleShare}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <Separator className="my-1 bg-gray-400" />

      {/* Reactions */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Reactions
        </h3>
        <div className="flex space-x-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={onLike}
            disabled={isLoading}
            className="flex items-center cursor-pointer space-x-1 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Heart
                className={cn(
                  "h-6 w-6",
                  isLiked ? "fill-current text-red-500" : "stroke-current"
                )}
              />
            )}
            <span className="text-sm">{likeCount}</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={onOpenComments}
            className="flex items-center cursor-pointer space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <MessageSquare className="h-6 w-6 stroke-current" />
            <span className="text-sm">{commentCount}</span>
          </Button>
        </div>
      </div>

      <Separator className="my-1 bg-gray-400" />

      {/* Author */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">Author</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <Separator className="my-1 bg-gray-400" />

      {/* Category */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">Category</h3>
        <div className="text-sm text-gray-600">
          <Link
            href={`/blogs?category=${category}`}
            className="hover:text-primary-600 transition-colors"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </div>
      </div>
    </div>
  );
}
