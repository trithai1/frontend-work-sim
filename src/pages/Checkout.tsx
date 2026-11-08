import { useCartStore } from "../store/cart";
import { useEffect } from "react";
import { NavLink } from "react-router";


export function Checkout() {
  const { cart, setCartHidden, addToCart, subtractFromCart, removeFromCart } = useCartStore();
  useEffect(() => setCartHidden(true), []);
  return (
    <>
      <p className="text-main-label font-bold text-2xl mb-2">Checkout</p>
      <div className="relative mb-4">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-1" />
        <div className="relative flex justify-between z-10 font-bold">
          <p className="flex items-center bg-page-bg text-main-label"><span className="mr-2 rounded-full flex size-8 bg-label-bg justify-center items-center border-2 border-brand-green text-brand-green">1</span>Shipping</p>
          <p className="flex items-center bg-page-bg text-sub-label"><span className="mr-2 rounded-full flex size-8 bg-page-bg justify-center items-center border-2 border-sub-label text-sub-label">2</span>Payment</p>
          <p className="flex items-center bg-page-bg text-sub-label"><span className="mr-2 rounded-full flex size-8 bg-page-bg justify-center items-center border-2 border-sub-label text-sub-label">3</span>Review</p>
        </div>
      </div>
      <div className="flex gap-6">
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
          <div className="flex justify-between">
            <NavLink to="/cart" className="bg-label-bg text-main-label border-1 border-sub-label rounded-md py-1 px-3">←Back to Cart</NavLink>
            <button className="bg-brand-green text-label-bg border-1 border-sub-label rounded-md py-1 px-3">Next Payment→</button>
          </div>
        </form>
        <div className="bg-label-bg p-2 rounded-lg flex-1">
          <p>Order summary</p>
          <ul>
            <li>Item 1</li>
          </ul>
          <div className="flex">
            <p>Total</p>
            <p>$297.42</p>
          </div>
        </div>
      </div>
    </>
  );
}