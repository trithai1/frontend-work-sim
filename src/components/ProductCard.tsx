import type { Product } from "../types/product";


export function ProductCard(product: Product) {
    return (
        <div className="bg-[#f2f2f2] w-fit rounded-xl shadow-md">
            <img src={product.thumbnail} alt="product-photo"></img>
            <div className="bg-white rounded-b-xl">
                <p className="text-[#757575] text-sm font-bold ml-2 pt-2">{product.brand}</p>
                <p className="font-bold mx-2">{product.title}</p>
                <div className="flex justify-between">
                    <p className="font-bold text-[#006b1d] m-2">${product.price}</p>
                    <p className="text-xs text-[#757575] m-2">⭐{product.rating}</p>
                </div>
            </div>
        </div>
    );
}