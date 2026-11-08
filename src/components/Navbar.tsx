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
      <NavLink to="/" className="text-2xl font-bold text-brand-green" end>🍀 SummitGear Market</NavLink>
      <div className="flex items-center gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-link-selected": "text-main-label"} end>Shop</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "text-link-selected": "text-main-label"} end>Favorites ({favorites.length})</NavLink>
        <button className="text-main-label" onClick={() => setCartHidden(false)}>Cart ({cartQuantity})</button>
        <NavLink to="/suggestion" className={({ isActive }) => isActive ? "text-link-selected": "text-main-label"} end>Suggestion</NavLink>
        <button className="bg-product-bg py-1 px-2 rounded-md border-1 border-solid border-sub-label" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </div>
  );
}
