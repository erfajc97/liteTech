import { getAllPostsServices } from '@/features/posts/services/getAllPostsServices';
import { createAnewPostServices } from '@/features/posts/services/createAnewPostServices';
import { getOnePostByIdServices } from '@/features/posts/services/getOnePostByIdServices';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Post {
  id: string;
  title: string;
  image: string;
  tags: string;
  timeToRead: string;
}

interface PostsStore {
  posts: Post[];
  pagination: {
    total: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
  };
  onePost: Post;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  addPost: (formData: FormData) => void;
  clearPosts: () => void;
  setIsUploading: (isUploading: boolean) => void;
  isUploading: boolean;
  isCancelled: boolean;
  setIsCancelled: (value: boolean) => void;
  getAllPosts: (query: string) => Promise<Post[]>;
  getOnePostById: (id: string) => void;
}

export const usePostsStore = create<PostsStore>()(
  persist(
    (set) => ({
      posts: [],
      pagination: {
        currentPage: 1,
        total: 1,
        pageSize: 1,
        totalPages: 1,
      },
      onePost: {
        id: '',
        title: '',
        image: '',
        tags: '',
        timeToRead: '',
      },
      loading: false,
      error: false,
      errorMessage: '',
      isUploading: false,
      isCancelled: false,

      getAllPosts: async (query: string) => {
        try {
          set({ loading: true, error: false, errorMessage: '' });
          const response = await getAllPostsServices({ query });
          set({ posts: response?.data?.response?.data || [], pagination: response?.data?.response?.meta?.pagination || {} });
          return response?.data?.response?.data || [];
        } catch (error) {
          set({ error: true, errorMessage: 'Error al obtener los posts' })
          console.log(error)
        } finally {
          set({ loading: false })
        }
      },

      addPost: async (formData: FormData) => {
        set({ loading: true, error: false, errorMessage: '' });
        try {
          const response = await createAnewPostServices(formData);
          set((state) => ({ 
            posts: [...state.posts, response?.data?.response], 
            error: response?.error || false, 
            errorMessage: response?.message || '' 
          }))
        } catch (error) {
          set({ error: true, errorMessage: 'Error al crear el post' })
          console.log(error)
        } finally {
          set({ loading: false })
        }
      },
      getOnePostById: async (id: string) => {
        try {
          set({ loading: true, error: false, errorMessage: '' });
          const response = await getOnePostByIdServices({ id });
          console.log(response)
          set({ onePost: response?.data?.response || {}, error: response?.error || false, errorMessage: response?.message || '' })
        } catch (error) {
          set({ error: true, errorMessage: 'Error al crear el post' })
          console.log(error)
        } finally {
          set({ loading: false })
        }
      },
      clearPosts: () => set({ posts: [] }),
      setIsUploading: (value: boolean) => set({ isUploading: value }),
      setIsCancelled: (value: boolean) => set({ isCancelled: value }),
    }),
    {
      name: 'posts-storage',
    }
  )
);
