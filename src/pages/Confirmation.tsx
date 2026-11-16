import { useLocation, Navigate } from "react-router";
import { NavLink } from "react-router";
import type { CartItem } from "../types/cart";


export function Confirmation() {
  if (!useLocation().state?.cart || useLocation().state?.confirmationCode) {
    return <Navigate to="/" replace />
  }

  const cart: CartItem[] = useLocation().state.cart;
  const confirmationCode = useLocation().state.confirmationCode;
  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col items-center flex-1">
        <div className="mr-2 rounded-full flex size-8 bg-brand-green justify-center items-center border-2 border-brand-green text-label-bg">✓</div>
        <p className="text-main-label font-bold text-3xl">Thanks, Jordan! Your order is in.</p>
        <p className="text-sub-label text-sm">Order <span className="font-bold">#{confirmationCode}</span> - a confirmation was sent to your email</p>
        <div className="self-stretch flex flex-col flex-1 [container-type:size]">
          <div className="max-h-[100cqh] self-center flex flex-col">
            <div className="min-h-0 flex flex-col min-w-[40dvw] bg-label-bg p-2 rounded-xl mb-4">
              <ul className="flex-1 flex flex-col gap-2 overflow-y-auto font-bold rounded-b-md mb-4 shadow-md">
                {cart.map(item => (
                  <li key={item.product.id} className="flex justify-between shadow-md p-2 rounded-b-md bg-label-bg">
                    <div className="flex">
                      <img className="w-25 h-auto bg-product-bg rounded-xl" src={item.product.thumbnail}></img>
                      <div className="p-2">
                        <p className="text-main-label">{item.product.title}</p>
                        <p className="text-sub-label">${item.product.price} each{item.quantity === item.product.stock && <span className="text-brand-brown"> - max reached</span>}</p>
                      </div>
                    </div>
                    <div className="flex flex-col p-2 justify-center text-right">
                      <p className="mb-1 text-main-label">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-main-label px-2">
                <p className="font-bold pl-2">Total paid</p>
                <p className="font-bold pr-2">${subtotal}</p>
              </div>
            </div>
            <NavLink to="/" className="self-center bg-brand-green text-label-bg font-bold rounded-xl px-4 py-2">Keep shopping</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}