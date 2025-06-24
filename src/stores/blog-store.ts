import { blogApi } from "@/lib/api/blog-api";
import type { IBlog } from "@/types/blog.types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { showError } from "@/lib/toast-utils";

interface BlogState {
  // Data
  currentBlog: IBlog | null;
  isLoading: boolean;

  // Actions
  setCurrentBlog: (blog: IBlog | null) => void;
  setLoading: (loading: boolean) => void;
  fetchBlogBySlug: (slug: string) => Promise<IBlog | null>;

  // Utility
  reset: () => void;
}

const initialState = {
  currentBlog: null,
  isLoading: false,
};

export const useBlogStore = create<BlogState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      // Basic Setters
      setCurrentBlog: (blog) => set({ currentBlog: blog }),
      setLoading: (loading) => set({ isLoading: loading }),

      // Fetch individual blog by slug
      fetchBlogBySlug: async (slug: string) => {
        set({ isLoading: true });

        try {
          const response = await blogApi.getBlogBySlug(slug);
          if (response.success && response.data) {
            set({ currentBlog: response.data });
            console.log("Fetched Blog by cat:", response.data);
            return response.data;
          } else {
            showError(response, "Loading Blog");
            return null;
          }
        } catch (error) {
          showError(error, "Loading Blog");
          return null;
        } finally {
          set({ isLoading: false });
        }
      },

      // Utility
      reset: () => set(initialState),
    }),
    {
      name: "blog-store",
    }
  )
);
