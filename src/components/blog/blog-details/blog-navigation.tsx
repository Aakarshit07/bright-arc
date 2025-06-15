"use client";

import { useState, useEffect } from "react";
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
  Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sampleBlogContent } from "@/lib/blogData";
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
  className?: string;
}

export function BlogSidebarInfo({
  author,
  date,
  likeCount,
  isLiked,
  onLike,
  onOpenComments,
  className = "",
}: BlogSidebarInfoProps) {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sampleBlogContent.sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(
          sampleBlogContent.sections[i].id
        );
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sampleBlogContent.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Content Navigation */}
      <div>
        <div className="flex items-center space-x-2">
          <h3 className="text-base font-semibold text-gray-900">Content</h3>
        </div>
        <nav className="space-y-1">
          {sampleBlogContent.sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "block text-xs rounded p-1 font-medium transition-colors",
                activeSection === section.id
                  ? "text-primary-700"
                  : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              )}
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>

      <Separator className="my-1 bg-gray-400" />

      {/* Share Article */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Share Article
        </h3>
        <div className="flex space-x-2">
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-linear-to-r from-secondary-500 to-accent-600 text-white"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-linear-to-r from-secondary-500 to-accent-600 text-white"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-linear-to-r from-secondary-500 to-accent-600 text-white"
          >
            <Instagram className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
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
          <button
            onClick={onLike}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Heart
              className={cn(
                "h-4 w-4",
                isLiked ? "fill-current text-red-500" : "stroke-current"
              )}
            />
            <span className="text-sm">{likeCount}</span>
          </button>
          <button
            onClick={onOpenComments}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <MessageSquare className="h-4 w-4 stroke-current" />
            <span className="text-sm">210</span>
          </button>
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
    </div>
  );
}
