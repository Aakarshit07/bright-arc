// TypeScript interfaces based on your MongoDB models
export interface ICategory {
  _id: string;
  categoryName: string;
  activeStatus: "active" | "inactive";
  urlKey: string;
  createdAt?: Date;
  updatedAt?: Date;
  blogCount: number; // Count from backend
}

export interface IComment {
  _id: string;
  user: string;
  text: string;
  date: Date;
  status: "pending" | "approved" | "rejected";
}

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  content: string;
  author: string;
  category: ICategory;
  postDate: string;
  likeCount: number;
  commentCount: number;
  comments: IComment[];
}

export interface IBlogListResponse {
  blogs: IBlog[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Blog filter types
export interface BlogFilters {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
}

// Revalidation types
export interface RevalidationRequest {
  path?: string;
  tag?: string;
  secret: string;
}
