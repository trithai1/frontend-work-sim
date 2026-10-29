// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductSection } from "./components/ProductSection";


function App() {
  const under20 = products.filter(product => product.price < 20);
  const topRated = products
    .filter(product => product.rating >= 4.5 && product.stock > 0)
    .sort((a, b) => b.rating - a.rating);
  const furniture = products.filter(product => product.category === "furniture");
  
  return (
    <body>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-8">
        <ProductSection
          title="Deals under $20"
          products={under20}
        />

        <ProductSection
          title="Top Rated"
          products={topRated}
        />

        <ProductSection
          title="Furniture"
          products={furniture}
        />
      </main>
      < Footer />
    </body>
  );
}

export default App;
