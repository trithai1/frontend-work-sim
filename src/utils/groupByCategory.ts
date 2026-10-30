import type { Product } from "../types/product";


export function groupByCategory(products: Product[]) {
  const productCategory: Record<string, Product[]> = {};
  products.forEach(product => {
    productCategory[product.category] ||= [];
    productCategory[product.category].push(product);
  });
  return productCategory;
}