import { NavLink, useParams } from "react-router";
import { useProductStore } from "../store/products";
import { useCartStore } from "../store/cart";
import type { Product } from "../types/product";
import { useFavoriteStore } from "../store/favorite";


function ProductFound({product}: {product: Product}) {
  const {cart, addToCart} = useCartStore();
  const isMaxCart = cart.some(item => item.product.id === product.id && item.quantity >= product.stock);

  const {favorites, toggleFavorite} = useFavoriteStore();
  const isFavorite = favorites.some(fav => fav === product.id);

  return (
    <div className="flex flex-col md:flex-row flex-1 gap-10">
      <div className="flex justify-center items-center bg-product-bg flex-1 rounded-xl shadow-md">
        <img src={product.thumbnail} alt="product-photo" className="object-contain h-[50dvh]"></img>
      </div>
      <div className="flex-1">
        <p className="text-sub-label font-bold">{product.brand}</p>
        <p className="text-main-label font-bold text-2xl mb-2">{product.title}</p>
        <div className="flex gap-4 mb-2">
          <p className="bg-gray-300 text-sub-label text-sm px-2 rounded-full">{product.category}</p>
          <p className="bg-green-100 text-brand-green font-bold text-sm px-2 rounded-full">{`In stock - ${product.stock} left`}</p>
          <p className="bg-gray-300 text-sm text-black font-bold px-2 rounded-full">{`⭐${product.rating}`}</p>
        </div>
        <p className="text-brand-green font-bold text-2xl mb-2">{`$${product.price}`}</p>
        <p className="text-sub-label mb-2">{product.description}</p>
        <div className="flex gap-2">
          {isMaxCart ?
            <button className="bg-gray-300 py-3 h-fit flex-6 rounded-xl text-gray-400 font-bold">Max in cart</button> :
            <button className="bg-brand-green py-3 h-fit flex-6 rounded-xl text-white dark:text-black font-bold" onClick={() => addToCart(product)}>Add to cart</button>
          }
          {isFavorite ?
            <button className="flex-1 px-10 py-3 h-fit bg-red-100 rounded-lg border-1 border-solid border-gray-300" onClick={() => toggleFavorite(product.id)}><span className="text-xs">❤️</span> Favorited</button> :
            <button className="flex-1 px-10 py-3 h-fit bg-white rounded-lg border-1 border-solid border-gray-300" onClick={() => toggleFavorite(product.id)}><span className="text-md">♡</span> Favorite</button>
          }
        </div>
      </div>
    </div>
  );
}

function ProductNotFound({id}: {id: number}) {
  return (
    <>
      <div className="bg-red-100 rounded-xl text-center border-1 border-red-200">
        <div>
          <p className="mt-10 m-1 text-3xl">🔍</p>
          <p className="m-1 font-bold text-main-label text-red-700">Product not found</p>
          <p className="mb-10 m-1 text-empty-info text-red-700">We couldn't find a product with id {id}.</p>
        </div>
      </div>
    </>
  );
}


export function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);
  
  const products = useProductStore(state => state.products);
  const product = products.find(product => product.id === productId);

  return (
    <div className="flex flex-col flex-1">
      <div className="mb-4">
        <NavLink to="/" className="text-brand-green font-bold">◄ Back to shop</NavLink>
      </div>
      {product ?
        <ProductFound product={product}/> :
        <ProductNotFound id={productId}/>
      }
    </div>
  );
}