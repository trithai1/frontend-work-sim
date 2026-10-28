// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <body>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-8">
        <ProductGrid products={products} />
      </main>
      < Footer />
    </body>
  );
}

export default App;
