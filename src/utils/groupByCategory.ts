import type { Product } from "../types/product";


export function groupByCategory(products: Product[]) {
  const productCategory = products.reduce((acc: Record<string, Product[]>, product) => {
    acc[product.category] ||= [];
    acc[product.category].push(product);
    return acc;
  }, {});
  return productCategory;
}