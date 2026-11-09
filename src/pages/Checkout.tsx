import { useCartStore } from "../store/cart";
import { useEffect } from "react";
import { NavLink } from "react-router";
import { EmptyState } from "../components/EmptyState";


export function Checkout() {
  const { cart, setCartHidden, addToCart, subtractFromCart, removeFromCart } = useCartStore();
  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);
  useEffect(() => setCartHidden(true), []);
  return (
    <div className="flex flex-col flex-1">
      <p className="text-main-label font-bold text-2xl mb-2">Checkout</p>
      <div className="relative mb-4">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-1" />
        <div className="relative flex justify-between z-10 font-bold">
          <p className="flex items-center bg-page-bg text-main-label"><span className="mr-2 rounded-full flex size-8 bg-label-bg justify-center items-center border-2 border-brand-green text-brand-green">1</span>Shipping</p>
          <p className="flex items-center bg-page-bg text-sub-label"><span className="mr-2 rounded-full flex size-8 bg-page-bg justify-center items-center border-2 border-sub-label text-sub-label">2</span>Payment</p>
          <p className="flex items-center bg-page-bg text-sub-label"><span className="mr-2 rounded-full flex size-8 bg-page-bg justify-center items-center border-2 border-sub-label text-sub-label">3</span>Review</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <form className="flex flex-col bg-label-bg p-2 rounded-lg flex-2">
          <p className="text-main-label font-bold text-xl mb-2">Shipping address</p>
          <p className="text-main-label font-bold">Full name</p>
          <input type="text" placeholder="Full name" className="py-1.5 px-2 placeholder:text-sub-label border-1 border-gray-300 rounded-md mb-4"/>
          <p className="text-main-label font-bold">Address</p>
          <input type="text" placeholder="Address" className="py-1.5 px-2 placeholder:text-sub-label border-1 border-gray-300 rounded-md mb-4"/>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <p className="text-main-label font-bold">City</p>
              <input type="text" placeholder="City" className="py-1.5 px-2 placeholder:text-sub-label w-full border-1 border-gray-300 rounded-md"/>
            </div>
            <div className="flex-1">
              <p className="text-main-label font-bold">ZIP</p>
              <input type="text" placeholder="ZIP" className="py-1.5 px-2 placeholder:text-sub-label w-full border-1 border-gray-300 rounded-md"/>
            </div>
          </div>
          <div className="flex justify-between mt-auto">
            <NavLink to="/cart" className="bg-label-bg text-main-label border-1 border-sub-label rounded-md py-2 px-3">←Back to Cart</NavLink>
            <button className="bg-brand-green disabled:bg-sub-label text-label-bg border-1 border-sub-label rounded-md py-2 px-3" disabled={cart.length === 0}>Next Payment→</button>
          </div>
        </form>
        <div className="max-h-[70dvh] flex-1 flex flex-col bg-label-bg p-2 rounded-lg">
          <p className="font-bold text-lg mb-2">Order summary</p>
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
          <ul className="flex-1 min-h-0 flex flex-col gap-2 overflow-y-auto font-bold rounded-b-md mb-6">
            {cart.map(item => (
              <li key={item.product.id} className="flex justify-between shadow-md p-2 rounded-b-md bg-label-bg">
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
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">${subtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}