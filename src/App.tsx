// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductSection } from "./components/ProductSection";
import { StatsBar } from "./components/StatsBar";
import { groupByCategory } from "./utils/groupByCategory";


function App() {
  const under20 = products.filter(product => product.price < 20);
  const topRated = products
    .filter(product => product.rating >= 4.5 && product.stock > 0)
    .sort((a, b) => b.rating - a.rating);
  const luxury = products.filter(product => product.price > 5000);
  const categoryProducts = groupByCategory(products);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-200 p-8">
        <StatsBar products={products} />
        <ProductSection
          title="Deals under $20"
          products={under20}
        />

        <ProductSection
          title="Top Rated"
          products={topRated}
        />

        <ProductSection
          title="Luxury (over $5,000)"
          products={luxury}
        />

        <p className="font-bold text-2xl m-2">Shop by Category</p>

        {Object.entries(categoryProducts).map(([category, products]) => (
          <ProductSection key={category}
            title={category}
            products={products}
          />
        ))}
      </main>
      < Footer />
    </>
  );
}

export default App;
