import { ProductCard } from "./ProductCard";
import type { Product } from "../types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product) => (<ProductCard {...product} />))}
    </div>
  );
}
