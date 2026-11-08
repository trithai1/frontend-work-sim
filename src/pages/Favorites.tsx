import { ProductSection } from "../components/ProductSection";
import { useFavoriteStore } from "../store/favorite";
import { useProductStore } from "../store/products";
import { MarketLoading } from "../components/MarketLoading";
import { MarketFailed } from "../components/MarketFailed";


export function Favorites() {
  const {products, status} = useProductStore();
  const favorites = useFavoriteStore(state => state.favorites);

  const favProducts = products.filter(product => favorites.includes(product.id));
  return(
    <>
      {status === "success" &&
      <>
        <p className="text-main-label font-bold text-3xl">Your favorites</p>
        <p className="text-sub-label">{`${favProducts.length} saved products`}</p>
        <ProductSection products={favProducts} />
      </>}
      {status === "loading" && <MarketLoading />}
      {status === "failed" && <MarketFailed />}
    </>
  );
}