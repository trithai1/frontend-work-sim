import type { Product } from "../types/product";

export function ProductCard(product: Product) {
  return (
    <div className="flex flex-col bg-[#f2f2f2] w-[80vw] md:w-[22vw] rounded-xl shadow-md">
      {product.stock < 10 && (
        <div className="absolute bg-[#ede85c] w-fit rounded-xl m-2 border border-[#59480d]">
          <p className="font-bold text-[#59480d] px-1 py-.5">Low stock</p>
        </div>
      )}
      <div className="flex justify-center">
        <img src={product.thumbnail} alt="product-photo"></img>
      </div>
      <div className="bg-white rounded-b-xl flex flex-col justify-between flex-1">
        <div>
          <p className="text-[#757575] text-sm font-bold ml-2 pt-2">
            {product.brand}
          </p>
          <p className="font-bold mx-2">{product.title}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-bold text-[#006b1d] m-2">${product.price}</p>
          <p className="text-xs text-[#757575] m-2">⭐{product.rating}</p>
        </div>
      </div>
    </div>
  );
}
