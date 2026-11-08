// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Suggestion } from "./pages/Suggestion";
import { AppLayout } from "./layouts/AppLayout";
import { Favorites } from "./pages/Favorites";
import { Cart } from "./pages/Cart";
import { useProductStore } from "./store/products";
import { useEffect } from "react";
import { useCartStore } from "./store/cart";
import { ProductPage } from "./pages/Product";


function App() {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  
  const cart = useCartStore(state => state.cart);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  useEffect(() => {
    document.title = cartQuantity === 0 ? "SummitGear Market" : `SummitGear Market (${cartQuantity})`;
  }, [cartQuantity]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
