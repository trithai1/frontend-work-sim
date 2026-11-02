import { ProductCard } from "./ProductCard";
import type { Product } from "../types/product";
import type { Dispatch } from "react";
import type { CartItem } from "../types/cart";


type Grid = {
  products: Product[];
  favorites: number[];
  setFavorites: Dispatch<React.SetStateAction<number[]>>;
  cart: CartItem[];
  setCart: Dispatch<React.SetStateAction<CartItem[]>>;
};

export function ProductGrid({ products, favorites, setFavorites, cart, setCart }: Grid) {
  function onToggleFavorite(id: number, isFavorite: boolean) {
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((_id) => _id !== id);
    } else {
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
  }

  function addToCart(product: Product) {
    const inCart = cart.some(item => item.product.id === product.id);
    
    let newCart;
    if (inCart) {
      newCart = cart.map(item => item.product.id === product.id && item.quantity < product.stock ?
        {...item, quantity: item.quantity + 1} : item
      );
    } else newCart = [...cart, {product, quantity: 1}];
    setCart(newCart);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product) => (<ProductCard
        key={product.id}
        product={product}
        isFavorite={favorites.some(fav => fav === product.id)}
        onToggleFavorite={onToggleFavorite}
        isMaxCart={cart.some(item => item.product.id === product.id && item.quantity >= product.stock)}
        addToCart={addToCart}
      />))}
    </div>
  );
}
