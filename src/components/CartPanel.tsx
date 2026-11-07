import { EmptyState } from "./EmptyState";
import { useCartStore } from "../store/cart";
import { NavLink } from "react-router";


export function CartPanel() {
  const { cart, cartHidden, setCartHidden, addToCart, subtractFromCart, removeFromCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return(
    <div>
      <div className={`absolute fixed bg-black/50 h-dvh w-dvw z-50 ${cartHidden ? "hidden" : ""}`}></div>
      <div className={`flex flex-col fixed bg-page-bg right-0 h-dvh w-[90vw] max-w-160 z-100 ${cartHidden ? "hidden" : ""}`}>
        <div className="flex justify-between shadow-md p-2 py-3 font-bold rounded-b-md bg-product-bg">
          <NavLink to="/cart" className="text-xl pt-1 text-main-label">Your cart ({cartQuantity})</NavLink>
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
        <div className="flex justify-between shadow-md mt-auto p-4 bg-product-bg text-main-label font-bold">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
      </div>
    </div>
  );
}