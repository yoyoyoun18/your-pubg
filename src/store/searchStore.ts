import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  searchResults: any;
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: any) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  searchResults: null,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchResults: (results) => set({ searchResults: results }),
}));

export default useSearchStore;
