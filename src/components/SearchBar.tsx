import type { Dispatch } from "react";
import type { Product } from "../types/product";


export function SearchBar({setSearch, searchProducts, products}: {
  setSearch: Dispatch<React.SetStateAction<string>>;
  searchProducts: Product[] | null;
  products: Product[];
}) {
  return (
    <div>
      <p className="absolute translate-y-1/3 translate-x-4">🔍</p>
      <input className="bg-white mb-2 w-full h-10 rounded-md border-2 border-solid border-[#006b1d] shadow-md pl-10" type="text" onChange={(e) => setSearch(e.target.value)}></input>
      {searchProducts !== null && <p className="mb-2 text-[#757575]">Showing {searchProducts.length} of {products.length} products</p>}
    </div>
  );
}