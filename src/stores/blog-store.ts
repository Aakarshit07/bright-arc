import { blogApi } from "@/lib/api/blog-api";
import type { IBlog, ICategory, ICategoryWithCount } from "@/types/blog.types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { showError } from "@/lib/toast-utils";

interface BlogState {
  // Data
  blogs: IBlog[];
  categories: ICategoryWithCount[];
  currentBlog: IBlog | null;

  // UI State
  activeCategory: string;
  isLoading: boolean;
  hasMore: boolean;
  currentPage: number;

  // Actions
  setBlogs: (blogs: IBlog[]) => void;
  setCategories: (categories: ICategory[]) => void;
  setCurrentBlog: (blog: IBlog | null) => void;
  setActiveCategory: (category: string) => void;
  setLoading: (loading: boolean) => void;

  // Async Actions
  fetchBlogs: (category?: string, reset?: boolean) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchBlogBySlug: (slug: string) => Promise<IBlog | null>;
  fetchBlogsByCategory: (category: string) => Promise<void>;

  // Utility Actions
  reset: () => void;
  getBlogCountByCategory: (categoryId: string) => number;
}

const initialState = {
  blogs: [],
  categories: [],
  currentBlog: null,
  activeCategory: "all",
  isLoading: false,
  hasMore: true,
  currentPage: 1,
};

export const useBlogStore = create<BlogState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      // Synchronous Actions
      setBlogs: (blogs) => set({ blogs }),
      setCategories: (categories) => {
        const state = get();
        const categoriesWithCount: ICategoryWithCount[] = categories.map(
          (category) => ({
            ...category,
            blogCount: state.getBlogCountByCategory(category._id),
          })
        );
        set({ categories: categoriesWithCount });
      },
      setCurrentBlog: (blog) => set({ currentBlog: blog }),
      setActiveCategory: (category) => set({ activeCategory: category }),
      setLoading: (loading) => set({ isLoading: loading }),

      // Async Actions
      fetchBlogs: async (category = "all", reset = false) => {
        const state = get();

        if (reset) {
          set({ blogs: [], currentPage: 1, hasMore: true });
        }

        set({ isLoading: true });

        try {
          let response;

          if (category === "all") {
            response = await blogApi.getAllBlogs();
          } else {
            response = await blogApi.getBlogsByCategory(category);
          }

          if (response.success && response.data) {
            const newBlogs = Array.isArray(response.data) ? response.data : [];

            set({
              blogs: reset ? newBlogs : [...state.blogs, ...newBlogs],
              hasMore: newBlogs.length === 12, // Assuming 12 is the page size
              currentPage: reset ? 2 : state.currentPage + 1,
              activeCategory: category,
            });
          } else {
            showError(response, "Loading Blogs");
          }
        } catch (error) {
          showError(error, "Loading Blogs");
        } finally {
          set({ isLoading: false });
        }
      },

      fetchCategories: async () => {
        set({ isLoading: true });

        try {
          const response = await blogApi.getAllCategories();

          if (response.success && response.data) {
            get().setCategories(response.data);
          } else {
            showError(response, "Loading Categories");
          }
        } catch (error) {
          showError(error, "Loading Categories");
        } finally {
          set({ isLoading: false });
        }
      },

      fetchBlogBySlug: async (slug: string) => {
        set({ isLoading: true });

        try {
          const response = await blogApi.getBlogBySlug(slug);

          if (response.success && response.data) {
            set({ currentBlog: response.data });
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

      fetchBlogsByCategory: async (category: string) => {
        await get().fetchBlogs(category, true);
      },

      // Utility Actions
      reset: () => set(initialState),

      getBlogCountByCategory: (categoryId: string) => {
        const state = get();
        return state.blogs.filter((blog) => blog.category._id === categoryId)
          .length;
      },
    }),
    {
      name: "blog-store",
    }
  )
);
