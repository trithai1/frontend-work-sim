import type { Product } from "../types/product";
import { EmptyState } from "./EmptyState";
import { ProductGrid } from "./ProductGrid";


type Section = {
  title: string;
  products: Product[];
};

export function ProductSection({ title, products }: Section) {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl my-2">{title}</h1>
        {products.length === 0 ?
          <EmptyState message="No product here yet"/> :
          <ProductGrid products={products} />
        }
      </div>
    </div>
  );
}
