import { useProductStore } from "../store/products";


export function MarketFailed() {
  const fetchProducts = useProductStore(state => state.fetchProducts);
  return(
    <div className="flex flex-col items-center bg-red-50 border-1 border-red-100 py-8 rounded-xl">
      <p className="text-3xl">⚠️</p>
      <p className="font-bold text-red-800">We couldn't load products</p>
      <p className="mb-4 text-red-800">Something went wrong talking to the server. Check your connection and try again.</p>
      <button className="bg-green-900 px-4 py-1.5 rounded-md text-white font-bold" onClick={fetchProducts}>Try again</button>
    </div>
  );
}