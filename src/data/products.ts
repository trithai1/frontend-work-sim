import axios from "axios";
import type { Product } from "../types/product";

// A local copy of the first 30 products from https://dummyjson.com/products
// Same shape as the API, so on Day 5 you can swap this file for a fetch call.
const response = await axios.get("https://dummyjson.com/products");
export const products: Product[] = response.data.products;
