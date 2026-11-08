import { useCartStore } from "../store/cart";
import { useFavoriteStore } from "../store/favorite";
import type { Product } from "../types/product";
import { NavLink } from "react-router";


export function ProductCard({product}: {product: Product}) {
  const {favorites, toggleFavorite} = useFavoriteStore();
  const {cart, addToCart} = useCartStore();

  const isFavorite = favorites.some(fav => fav === product.id);
  const isMaxCart = cart.some(item => item.product.id === product.id && item.quantity >= product.stock);

  return (
    <div className="relative flex flex-col bg-product-bg w-[80vw] md:w-[22vw] rounded-xl shadow-md">
      {product.stock < 10 && (
        <div className="absolute bg-[#ede85c] w-fit rounded-xl m-2 border border-[#59480d]">
          <p className="font-bold text-[#59480d] px-1 py-.5">Low stock</p>
        </div>
      )}
      {isFavorite ?
        <button className="absolute right-0 m-2 bg-red-100 p-2 rounded-full border-1 border-solid border-gray-300 text-xs" onClick={() => toggleFavorite(product.id)}>❤️</button> :
        <button className="absolute right-0 m-2 bg-white p-1 px-2 rounded-full border-1 border-solid border-gray-300" onClick={() => toggleFavorite(product.id)}>♡</button>
      }
      <NavLink to={`/products/${product.id}`} className="flex justify-center">
        <img src={product.thumbnail} alt="product-photo"></img>
      </NavLink>
      <div className="bg-label-bg rounded-b-xl flex flex-col justify-between flex-1">
        <div>
          <p className="text-sub-label text-sm font-bold ml-2 pt-2">
            {product.brand}
          </p>
          <NavLink to={`/products/${product.id}`} className="font-bold mx-2 text-main-label">{product.title}</NavLink>
        </div>

        <div className="flex justify-between">
          <p className="font-bold text-brand-green m-2">${product.price}</p>
          <p className="text-xs text-sub-label m-2">⭐{product.rating}</p>
        </div>
        {isMaxCart ?
          <button className="bg-gray-300 mt-2 mb-4 mx-4 p-2 rounded-xl text-gray-400 font-bold">Max in cart</button> :
          <button className="bg-brand-green mt-2 mb-4 mx-4 p-2 rounded-xl text-white dark:text-black font-bold" onClick={() => addToCart(product)}>Add to cart</button>
        }
      </div>
    </div>
  );
}
