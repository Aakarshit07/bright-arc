import type {
  IBlog,
  ICategory,
  BlogFilters,
  ApiResponse,
} from "@/types/blog.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

class BlogApiService {
  private async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(
        `https://brightarcbackend-5p0v.onrender.com/api${endpoint}`,
        {
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          ...options,
        }
      );

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
      return {
        success: false,
        data: null as T,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }

  // Blog APIs
  async getAllBlogs(filters?: BlogFilters): Promise<ApiResponse<IBlog[]>> {
    // const queryParams = new URLSearchParams();
    // if (filters?.page) queryParams.append("page", filters.page.toString());
    // if (filters?.limit) queryParams.append("limit", filters.limit.toString());
    // if (filters?.search) queryParams.append("search", filters.search);

    const endpoint = `/blogs`;
    // ${queryParams.toString() ? `?${queryParams.toString()}` : ""};
    return this.fetchApi<IBlog[]>(endpoint);
  }

  async getBlogBySlug(slug: string): Promise<ApiResponse<IBlog>> {
    return this.fetchApi<IBlog>(`/blogs/${slug}`);
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
    });
  }

  async unlikeBlog(slug: string): Promise<ApiResponse<{ likeCount: number }>> {
    return this.fetchApi<{ likeCount: number }>(`/blogs/${slug}/unlike`, {
      method: "POST",
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
