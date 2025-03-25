// src/store/blogStore.ts
import { create } from 'zustand';
import { Post } from '@/types';

interface BlogStore {
  posts: Post[];
  searchTerm: string;
  visibleCount: number;
  setPosts: (posts: Post[]) => void;
  setSearchTerm: (term: string) => void;
  setVisibleCount: (count: number) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  searchTerm: '',
  visibleCount: 12,
  setPosts: (posts) => set({ posts }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setVisibleCount: (count) => set({ visibleCount: count }),
}));