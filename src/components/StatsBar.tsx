import type { Product } from "../types/product";


export function StatsBar({products}: {products: Product[]}) {
  const stock = products.reduce((acc, product) => acc + product.stock, 0);
  const inventoryValue = products.reduce((acc, product) => acc + product.price * product.stock, 0);
  const averageScore = products.reduce((acc, product) => acc + product.rating, 0) / products.length;
  const lowStocks = products.filter(product => product.stock < 10).length;

  return(
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-label-bg rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-sub-label">UNITS IN STOCK</p>
        <p className="font-bold text-xl text-main-label">{stock.toLocaleString()}</p>
      </div>
      <div className="bg-label-bg rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-sub-label">INVENTORY VALUE</p>
        <p className="font-bold text-xl text-main-label">${inventoryValue.toLocaleString()}</p>
      </div>
      <div className="bg-label-bg rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-sub-label">AVERAGE RATING</p>
        <p className="font-bold text-xl text-main-label">⭐ {averageScore.toFixed(1)}</p>
      </div>
      <div className="bg-label-bg rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-sub-label">LOW STOCK</p>
        <p className="font-bold text-xl text-brand-brown">{lowStocks} products</p>
      </div>
    </div>
  );
}