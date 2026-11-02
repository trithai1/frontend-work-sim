import type { Dispatch } from "react";
import type { CartItem } from "../types/cart";
import { EmptyState } from "./EmptyState";
import type { Product } from "../types/product";


type Panel = {
  cart: CartItem[];
  setCart: Dispatch<React.SetStateAction<CartItem[]>>;
  cartHidden: boolean;
  setCartHidden: Dispatch<React.SetStateAction<boolean>>;
  addToCart: (product: Product) => void;
};

export function CartPanel({cart, setCart, cartHidden, setCartHidden, addToCart}: Panel) {
  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  function subtractFromCart(product: Product) {
    const inCart = cart.some(item => item.product.id === product.id);
    
    const newCart = inCart ? cart.reduce((acc: CartItem[], item) => {
      if(item.product.id !== product.id) acc.push(item);
      else if(item.quantity > 1) acc.push({...item, quantity: item.quantity - 1});
      return acc;
    }, []) : cart;
    setCart(newCart);
  }

  function removeFromCart(product: Product) {
    const newCart = cart.filter(item => item.product.id !== product.id);
    setCart(newCart);
  }

  return(
    <div>
      <div className={`absolute fixed bg-black/50 h-dvh w-dvw z-50 ${cartHidden ? "hidden" : ""}`}></div>
      <div className={`flex flex-col fixed bg-page-bg right-0 h-dvh w-[90vw] max-w-160 z-100 ${cartHidden ? "hidden" : ""}`}>
        <div className="flex justify-between shadow-md p-2 py-3 font-bold rounded-b-md bg-product-bg">
          <p className="text-xl pt-1 text-main-label">Your cart ({cartQuantity})</p>
          <button className="text-3xl text-sub-label" onClick={() => setCartHidden(true)}>×</button>
        </div>
        {cart.length === 0 ?
        <div className="mx-5 my-8">
          <EmptyState message={
            <div>
              <p className="mt-10 m-1 text-5xl">🛒</p>
              <p className="m-1 font-bold text-main-label">Your cart is empty</p>
              <p className="mb-10 m-1 text-empty-info">Add something you love from the shop.</p>
            </div>
          }/>
        </div> :
        <ul className="overflow-y-auto bg-page-bg h-full shadow-md font-bold rounded-b-md">
          {cart.map(item => (
            <li className="flex justify-between shadow-md p-2 rounded-b-md bg-label-bg">
              <div className="flex">
                <img className="w-25 h-auto bg-product-bg rounded-xl" src={item.product.thumbnail}></img>
                <div className="p-2">
                  <p className="text-main-label">{item.product.title}</p>
                  <p className="text-sub-label">${item.product.price} each{item.quantity === item.product.stock && <span className="text-brand-brown"> - max reached</span>}</p>
                  <div className="flex text-main-label">
                    <button className="px-2 border-1 border-solid border-sub-label rounded-l-md" onClick={() => subtractFromCart(item.product)}>-</button>
                    <p className="px-2 border-1 border-solid border-sub-label">{item.quantity}</p>
                    <button className="px-2 border-1 border-solid border-sub-label rounded-r-md" onClick={() => addToCart(item.product)}>+</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-2 justify-center text-right">
                <p className="mb-1 text-main-label">${(item.product.price * item.quantity).toFixed(2)}</p>
                <button className="text-red-700" onClick={() => removeFromCart(item.product)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>}
        <div className="flex justify-between shadow-md mt-auto p-4 bg-product-bg text-main-label">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
      </div>
    </div>
  );
}