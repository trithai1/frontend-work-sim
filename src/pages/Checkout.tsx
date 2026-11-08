import { useCartStore } from "../store/cart";
import { useEffect } from "react";


export function Checkout() {
  const { cart, setCartHidden, addToCart, subtractFromCart, removeFromCart } = useCartStore();
  useEffect(() => setCartHidden(true), []);
  return (
    <>Checkout</>
  );
}