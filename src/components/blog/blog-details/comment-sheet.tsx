"use client";

import type React from "react";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle } from "lucide-react";
import { MessageSquare } from "lucide-react";
import type { CommentSheetProps, BlogComment } from "@/types/blog-detail.types";

export function CommentSheet({
  isOpen,
  onClose,
  comments,
  onSubmitComment,
}: CommentSheetProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    try {
      await onSubmitComment(name, email, comment);
      setName("");
      setEmail("");
      setComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const approvedComments = comments.filter(
    (comment) => comment.status === "approved"
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col px-3 py-4">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>Comments ({approvedComments.length})</SheetTitle>
          <SheetDescription>
            Share your thoughts about this article. Comments are reviewed before
            publishing.
          </SheetDescription>
        </SheetHeader>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto space-y-4 py-3 scrollbar-hide">
          {/* Comment Form */}
          <Card className="py-4">
            <CardContent className="">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Comment *</Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="min-h-[100px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {comment.length}/500 characters
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 text-primary-500" />
                  <span>Comments are reviewed before publishing</span>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="default"
                >
                  {isSubmitting ? "Submitting..." : "Submit Comment"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">All Comments</h3>

            {approvedComments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {approvedComments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function CommentItem({ comment }: { comment: BlogComment }) {
  return (
    <Card className="py-4">
      <CardContent className="">
        <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-secondary-400 text-lg font-mono font-semibold text-white">
              {comment.author.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm">{comment.author}</span>
              <span className="text-xs text-gray-400">{comment.timestamp}</span>
            </div>

            <p className="text-sm text-gray-700">{comment.content}</p>

            {comment.adminReply && (
              <>
                <Separator className="my-1 bg-gray-200" />
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge
                      variant="default"
                      className="text-xs text-primary-950 bg-primary-50"
                    >
                      Admin
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {comment.adminReply.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {comment.adminReply.content}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
