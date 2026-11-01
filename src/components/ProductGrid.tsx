import { ProductCard } from "./ProductCard";
import type { Product } from "../types/product";
import type { Dispatch } from "react";

export function ProductGrid({ products, favorites, setFavorites }: {
  products: Product[];
  favorites: number[];
  setFavorites: Dispatch<React.SetStateAction<number[]>>;
}) {
  function onToggleFavorite(id: number, isFavorite: boolean) {
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((_id) => _id !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product) => (<ProductCard
        key={product.id}
        product={product}
        isFavorite={favorites.some(fav => fav === product.id)}
        onToggleFavorite={onToggleFavorite}
      />))}
    </div>
  );
}
