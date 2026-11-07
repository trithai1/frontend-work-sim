import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import type { Product } from "../types/product";
import { groupByCategory } from "../utils/groupByCategory";
import { ProductSection } from "../components/ProductSection";
import { EmptyState } from "../components/EmptyState";
import { StatsBar } from "../components/StatsBar";
import { useProductStore } from "../store/products";


function MarketSuccess({products, search}: {products: Product[], search: string}) {
  const searchProducts = search === "" ? null : products.filter(product => product.title.includes(search));

  const under20 = products.filter(product => product.price < 20);
  const topRated = products
    .filter(product => product.rating >= 4.5 && product.stock > 0)
    .sort((a, b) => b.rating - a.rating);
  const luxury = products.filter(product => product.price > 5000);
  const categoryProducts = groupByCategory(products);
  
  return (
    <>
      {searchProducts === null &&
        <>
          <StatsBar products={products} />
          <ProductSection
            title="Deals under $20"
            products={under20}
          />

          <ProductSection
            title="Top Rated"
            products={topRated}
          />

          <ProductSection
            title="Luxury (over $5,000)"
            products={luxury}
          />

          <p className="font-bold text-2xl m-2 text-main-label">Shop by Category</p>

          {Object.entries(categoryProducts).map(([category, products]) => (
            <ProductSection key={category}
              title={category}
              products={products}
            />
          ))}
        </>}

      {searchProducts !== null && searchProducts.length > 0 &&
        <ProductSection
          title=""
          products={searchProducts}
        />}
      
      {searchProducts !== null && searchProducts.length === 0 && <EmptyState message={
        <div>
          <p className="mt-10 m-1 text-5xl">🔍</p>
          <p className="m-1 font-bold text-main-label">No product found</p>
          <p className="mb-10 m-1 text-empty-info">Nothing matches "{search}". Try a different search.</p>
        </div>
      }/>}
    </>
  );
}

function MarketLoading() {
  const grayGradiant = "bg-linear-to-r from-gray-300 via-white to-gray-300";
  return(
    <>
      <p className="text-gray-500 mb-2">Loading products...</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Array.from({ length: 6}, (_, i) => {
          return (
            <div key={i} className={`relative flex flex-col bg-product-bg w-[80vw] md:w-[22vw] rounded-xl shadow-md ${grayGradiant}`}>
            <div className="flex justify-center h-[30vh]"></div>
              <div className="bg-label-bg rounded-b-xl flex flex-col justify-between flex-1">
                <p className={`ml-2 mt-2 rounded-md h-2.5 w-4/10 ${grayGradiant}`}></p>
                <p className={`ml-2 mt-2 rounded-md h-3.5 w-3/4 ${grayGradiant}`}></p>
                <p className={`ml-2 mt-2 rounded-md h-4 w-1/3 ${grayGradiant}`}></p>
                <button className={`mt-2 mb-4 mx-4 p-2 rounded-xl ${grayGradiant} h-8`}></button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function MarketFailed() {
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

export function Home() {
  const {status, products} = useProductStore();
  const [search, setSearch] = useState("");
  const searchProducts = search === "" ? null : products.filter(product => product.title.includes(search));

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        searchProducts={searchProducts}
        products={products}
      />
      {status === "success" && <MarketSuccess products={products} search={search}/>}
      {status === "loading" && <MarketLoading />}
      {status === "failed" && <MarketFailed />}
    </>
  );
}