import { SearchBar } from "../components/SearchBar";
import { useState } from "react";
import type { Product } from "../types/product";
import { groupByCategory } from "../utils/groupByCategory";
import { ProductSection } from "../components/ProductSection";
import { EmptyState } from "../components/EmptyState";
import { StatsBar } from "../components/StatsBar";
import { useProductStore } from "../store/products";
import { MarketLoading } from "../components/MarketLoading";
import { MarketFailed } from "../components/MarketFailed";


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