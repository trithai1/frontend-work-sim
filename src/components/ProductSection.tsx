import type { Product } from "../types/product";
import { ProductGrid } from "./ProductGrid";

type Section = {
  title: string;
  products: Product[];
};

export function ProductSection({ title, products }: Section) {
  return (
    <div>
      <h1 className="font-bold text-2xl my-2">{title}</h1>
      <ProductGrid products={products} />
    </div>
  );
}
