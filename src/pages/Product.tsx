import { NavLink, useParams } from "react-router";
import { useProductStore } from "../store/products";
import { MarketFailed } from "../components/MarketFailed";

export function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);
  
  const products = useProductStore(state => state.products);
  const product = products.find(product => product.id === productId);

  return (
    <>
      <NavLink to="/">◄ Back to shop</NavLink>
      {product ?
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center bg-white h-[60dvh]">
          <img src={product.thumbnail} alt="product-photo"></img>
        </div>
        <div>
          <p>{product.brand}</p>
          <p>{product.title}</p>
          <div className="flex">
            <p>{product.category}</p>
            <p>{`In stock - ${product.stock} left`}</p>
            <p>{`⭐${product.rating}`}</p>
          </div>
          <p>{`$${product.price}`}</p>
          <p>{product.description}</p>
          <div className="flex">
            <button>Add to cart</button>
            <button>Favorite</button>
          </div>
        </div>
      </div> :
      <MarketFailed />}
    </>
  );
}