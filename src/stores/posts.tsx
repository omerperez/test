import { create } from "zustand";

interface PostsStore {
  selectAll: boolean;
  toggleSelectAll: () => void;
  lastUpdateDate: Date;
  setLastUpdateDate: () => void;
  selectedPosts: Set<number>;
  setSelectedPosts: (postId: number) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  lastUpdateDate: new Date(),
  setLastUpdateDate: () =>
    set({
      lastUpdateDate: new Date(),
      selectedPosts: new Set(),
      selectAll: false,
    }),
  selectAll: false,
  toggleSelectAll: () =>
    set((state) => {
      return {
        selectAll: state.selectedPosts.size !== 0 || !state.selectAll,
        selectedPosts: new Set(),
      };
    }),
  selectedPosts: new Set<number>(),
  setSelectedPosts: (postId) => {
    set(({ selectedPosts }) => {
      if (selectedPosts.has(postId)) {
        selectedPosts.delete(postId);
      } else {
        selectedPosts.add(postId);
      }
      return { selectedPosts };
    });
  },
}));
