import { EmptyState } from "../components/EmptyState";
import { useCartStore } from "../store/cart";
import { useEffect } from "react";


export function Cart() {
  const { cart, setCartHidden, addToCart, subtractFromCart, removeFromCart } = useCartStore();
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => setCartHidden(true), []);

  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);

  return(
    <div className="flex flex-col">
      <p className="text-main-label font-bold text-3xl">Your cart</p>
      <p className="text-sub-label mb-4">{`${cartQuantity} items`}</p>
      <div className="flex flex-col md:flex-row">
        {cart.length === 0 ?
        <div className="md:flex-2 mr-0 md:mr-6 bg-white mb-4 md:mb-0">
          <EmptyState message={
            <div>
              <p className="mt-10 m-1 text-5xl">🛒</p>
              <p className="m-1 font-bold text-main-label">Your cart is empty</p>
              <p className="mb-10 m-1 text-empty-info">Add something you love from the shop.</p>
            </div>
          }/>
        </div> :
        <ul className="overflow-y-auto bg-page-bg h-full shadow-md font-bold rounded-md flex flex-col gap-4 md:flex-2 mr-0 md:mr-6 bg-white mb-4 md:mb-0">
          {cart.map(item => (
            <li key={item.product.id} className="flex justify-between shadow-md p-2 rounded-md bg-label-bg">
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
        <div className="flex flex-col shadow-md mb-auto p-4 bg-product-bg md:flex-1 rounded-md">
          <div className="flex justify-between text-main-label font-bold">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <p className="text-sub-label">Shipping & taxes calcuated at checkout</p>
        </div>
      </div>
    </div>
  );
}