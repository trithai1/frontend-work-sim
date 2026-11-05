import { create } from "zustand";


type FavoriteState = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState>()(set => ({
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
}));