export interface BlogSection {
  id: string;
  title: string;
  level: number;
}

export interface BlogComment {
  id: string;
  author: string;
  authorImage?: string;
  content: string;
  timestamp: string;
  status: "pending" | "approved" | "rejected";
  adminReply?: {
    id: string;
    content: string;
    timestamp: string;
    author: string;
  };
}

export interface BlogDetailData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: string;
  sections: BlogSection[];
  comments: BlogComment[];
  isLiked: boolean;
  likeCount: number;
  category: string;
}

export interface BlogNavigationProps {
  sections: BlogSection[];
  onOpenComments: () => void;
  className?: string;
}

export interface BlogContentProps {
  content: string;
  className?: string;
}

export interface CommentSheetProps {
  isOpen: boolean;
  onClose: () => void;
  comments: BlogComment[];
  onSubmitComment: (name: string, email: string, content: string) => void;
}
