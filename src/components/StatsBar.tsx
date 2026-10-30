import type { Product } from "../types/product";


export function StatsBar({products}: {products: Product[]}) {
  const stock = products.reduce((acc, product) => acc + product.stock, 0);
  const inventoryValue = products.reduce((acc, product) => acc + product.price * product.stock, 0);
  const averageScore = products.reduce((acc, product) => acc + product.rating, 0) / products.length;
  const lowStocks = products.filter(product => product.stock < 10).length;

  return(
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white m-2 rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-[#757575]">UNITS IN STOCK</p>
        <p className="font-bold text-xl">{stock.toLocaleString()}</p>
      </div>
      <div className="bg-white m-2 rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-[#757575]">INVENTORY VALUE</p>
        <p className="font-bold text-xl">${inventoryValue.toLocaleString()}</p>
      </div>
      <div className="bg-white m-2 rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-[#757575]">AVERAGE RATING</p>
        <p className="font-bold text-xl">⭐ {averageScore.toFixed(1)}</p>
      </div>
      <div className="bg-white m-2 rounded-xl shadow-md p-2 w-[80vw] md:w-[22vw]">
        <p className="text-xs font-bold text-[#757575]">LOW STOCK</p>
        <p className="font-bold text-xl text-[#b3480e]">{lowStocks} products</p>
      </div>
    </div>
  );
}