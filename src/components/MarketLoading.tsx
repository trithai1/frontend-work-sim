export function MarketLoading() {
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