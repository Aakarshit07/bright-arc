import type { IBlog, ICategory, ApiResponse } from "@/types/blog.types";

class BlogApiService {
  private async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const url = `${API_BASE_URL}/api${endpoint}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        // Add cache control for production
        cache: process.env.NODE_ENV === "production" ? "no-store" : "default",
        // Add revalidation for ISR
        next: {
          revalidate: process.env.NODE_ENV === "production" ? 60 : 0,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("API Error:", error);
      return {
        success: false,
        data: null as T,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  // Blog APIs
  async getAllBlogs(): Promise<ApiResponse<IBlog[]>> {
    const endpoint = `/blogs`;
    return this.fetchApi<IBlog[]>(endpoint);
  }

  async getBlogBySlug(slug: string): Promise<ApiResponse<IBlog>> {
    const endpoint = `/blogs/${slug}`;
    return this.fetchApi<IBlog>(endpoint);
  }

  async getBlogsByCategory(
    categoryIdentifier: string
  ): Promise<ApiResponse<IBlog[]>> {
    // Handle both category name and urlKey
    const endpoint = categoryIdentifier.includes("-")
      ? `/blogs/category/url:${categoryIdentifier}`
      : `/blogs/category/${categoryIdentifier}`;
    return this.fetchApi<IBlog[]>(endpoint);
  }

  // Category APIs
  async getAllCategories(): Promise<ApiResponse<ICategory[]>> {
    return this.fetchApi<ICategory[]>("/categories");
  }

  // Like/Unlike APIs
  async likeBlog(slug: string): Promise<ApiResponse<{ likeCount: number }>> {
    return this.fetchApi<{ likeCount: number }>(`/blogs/${slug}/like`, {
      method: "POST",
      cache: "no-store", // Don't cache mutations
    });
  }

  async unlikeBlog(slug: string): Promise<ApiResponse<{ likeCount: number }>> {
    return this.fetchApi<{ likeCount: number }>(`/blogs/${slug}/unlike`, {
      method: "POST",
      cache: "no-store", // Don't cache mutations
    });
  }

  // Comment APIs
  async addComment(
    slug: string,
    comment: { user: string; text: string }
  ): Promise<ApiResponse<IBlog>> {
    return this.fetchApi<IBlog>(`/blogs/${slug}/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      cache: "no-store", // Don't cache mutations
    });
  }

  async getComments(
    slug: string,
    status?: string
  ): Promise<ApiResponse<{ total: number; comments: any[] }>> {
    const endpoint = `/blogs/${slug}/comments${
      status ? `?status=${status}` : ""
    }`;
    return this.fetchApi<{ total: number; comments: any[] }>(endpoint);
  }
}

export const blogApi = new BlogApiService();
