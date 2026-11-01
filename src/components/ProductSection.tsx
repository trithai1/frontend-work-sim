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
        <h1 className="font-bold text-2xl my-2 text-main-label">{title}</h1>
        {products.length === 0 ?
          <EmptyState message={
            <div>
              <p className="mt-10 m-1 text-5xl">🛍️</p>
              <p className="m-1 font-bold text-main-label">No product here yet</p>
              <p className="mb-10 m-1 text-empty-info">Nothing matches this section. Check back soon!</p>
            </div>
          }
          /> : <ProductGrid products={products} />
        }
      </div>
    </div>
  );
}
