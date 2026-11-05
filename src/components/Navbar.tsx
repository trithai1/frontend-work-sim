import { useThemeStore } from "../store/theme";
import { useCartStore } from "../store/cart";
import { useFavoriteStore } from "../store/favorite";
import { NavLink } from "react-router";


export function Navbar() {
  const favorites = useFavoriteStore(state => state.favorites);
  const { cart, setCartHidden } = useCartStore();
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const {theme, toggleTheme} = useThemeStore();
  
  return (
    <div className="sticky top-0 shadow-md flex justify-between px-5 py-3 bg-label-bg/92 z-90">
      <NavLink to="\" className="text-2xl font-bold text-brand-green">🍀 SummitGear Market</NavLink>
      <div className="flex items-center gap-4">
        <a className="text-main-label" href="/shop">Shop</a>
        <a className="text-main-label" href="/favorites">Favorites ({favorites.length})</a>
        <button className="text-main-label" onClick={() => setCartHidden(false)}>Cart ({cartQuantity})</button>
        <NavLink to="/suggestion" className="text-main-label">Suggestion</NavLink>
        <button className="bg-product-bg py-1 px-2 rounded-md border-1 border-solid border-sub-label" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </div>
  );
}
