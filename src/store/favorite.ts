import { create } from "zustand";
import { persist } from "zustand/middleware";


type FavoriteState = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState>()(persist(
  set => ({
    favorites: [],
    toggleFavorite: (id) => set(state => {
      const isFavorite = state.favorites.some(fav => fav === id);
      
      let newFavorites;
      if (isFavorite) {
        newFavorites = state.favorites.filter((_id) => _id !== id);
      } else {
        newFavorites = [...state.favorites, id];
      }
      return { favorites: newFavorites };
    }),
  }), { name: "summitgear-favorites" })
);