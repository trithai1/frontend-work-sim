import type { Dispatch } from "react";
import type { CartItem } from "../types/cart";


type bar = {
  theme: string;
  toggleTheme: () => void;
  favorites: number[];
  cart: CartItem[];
  setCartHidden: Dispatch<React.SetStateAction<boolean>>;
};

export function Navbar({theme, toggleTheme, favorites, cart, setCartHidden}: bar) {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(cart);
  const links = [
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: `Favorites (${favorites.length})`,
      href: "/favorites",
    },
    {
      label: `Cart (${cartQuantity})`,
      href: "/cart",
    },
  ];

  return (
    <div className="sticky top-0 shadow-md flex justify-between p-5 bg-label-bg/92 z-90">
      <p className="text-2xl font-bold text-brand-green">🍀 SummitGear Market</p>
      <div>
        <a className="p-3 text-main-label" href="/shop">Shop</a>
        <a className="p-3 text-main-label" href="/favorites">Favorites ({favorites.length})</a>
        <button className="p-3 text-main-label" onClick={() => setCartHidden(false)}>Cart ({cartQuantity})</button>
        <button className="bg-product-bg p-1 px-2 rounded-md border-1 border-solid border-sub-label" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </div>
  );
}
