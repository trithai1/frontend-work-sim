// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductSection } from "./components/ProductSection";
import { StatsBar } from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import type { CartItem } from "./types/cart";
import { CartPanel } from "./components/CartPanel";
import type { Product } from "./types/product";
import { SuggestProductForm } from "./components/SuggestProductForm";


function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartHidden, setCartHidden] = useState(true);
  const [theme, setTheme] = useState("light");
  const searchProducts = search === "" ? null : products.filter(product => product.title.includes(search));

  const under20 = products.filter(product => product.price < 20);
  const topRated = products
    .filter(product => product.rating >= 4.5 && product.stock > 0)
    .sort((a, b) => b.rating - a.rating);
  const luxury = products.filter(product => product.price > 5000);
  const categoryProducts = groupByCategory(products);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  function addToCart(product: Product) {
    const inCart = cart.some(item => item.product.id === product.id);
    
    let newCart;
    if (inCart) {
      newCart = cart.map(item => item.product.id === product.id && item.quantity < product.stock ?
        {...item, quantity: item.quantity + 1} : item
      );
    } else newCart = [...cart, {product, quantity: 1}];
    setCart(newCart);
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <CartPanel
        cart={cart}
        setCart={setCart}
        cartHidden={cartHidden}
        setCartHidden={setCartHidden}
        addToCart={addToCart}
      />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        favorites={favorites}
        cart={cart}
        setCartHidden={setCartHidden}
      />
      <main className="min-h-screen bg-page-bg p-8">
        <SuggestProductForm />
      </main>
    </div>
  );

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <CartPanel
        cart={cart}
        setCart={setCart}
        cartHidden={cartHidden}
        setCartHidden={setCartHidden}
        addToCart={addToCart}
      />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        favorites={favorites}
        cart={cart}
        setCartHidden={setCartHidden}
      />
      <main className="min-h-screen bg-page-bg p-8">
        <SearchBar
          setSearch={setSearch}
          searchProducts={searchProducts}
          products={products}
        />
        {searchProducts === null &&
        <>
          <StatsBar products={products} />
          <ProductSection
            title="Deals under $20"
            products={under20}
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            addToCart={addToCart}
          />

          <ProductSection
            title="Top Rated"
            products={topRated}
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            addToCart={addToCart}
          />

          <ProductSection
            title="Luxury (over $5,000)"
            products={luxury}
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            addToCart={addToCart}
          />

          <p className="font-bold text-2xl m-2 text-main-label">Shop by Category</p>

          {Object.entries(categoryProducts).map(([category, products]) => (
            <ProductSection key={category}
              title={category}
              products={products}
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              addToCart={addToCart}
            />
          ))}
        </>}

        {searchProducts !== null && searchProducts.length > 0 &&
          <ProductSection
            title=""
            products={searchProducts}
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            addToCart={addToCart}
          />}
        
        {searchProducts !== null && searchProducts.length === 0 && <EmptyState message={
            <div>
              <p className="mt-10 m-1 text-5xl">🔍</p>
              <p className="m-1 font-bold text-main-label">No product found</p>
              <p className="mb-10 m-1 text-empty-info">Nothing matches "{search}". Try a different search.</p>
            </div>
          }/>}
      </main>
      < Footer />
    </div>
  );
}

export default App;
