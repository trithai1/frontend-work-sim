import { create } from "zustand";
import type { Product } from "../types/product";
import axios from "axios";


type ProductState = {
  status: "loading" | "failed" | "success";
  products: Product[];
  fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>()(set => ({
  status: "loading",
  products: [],
  fetchProducts: async () => {
    set({status: "loading"});
    try {
      const response = await axios.get("https://dummyjson.com/products");
      if (response.status === 200) {
        set({products: response.data.products, status: "success"})
      } else set({status: "failed"});
    } catch {
      set({status: "failed"});
    }
  },
}));
