export function SuggestProductForm() {
  return (
    <div className="flex flex-col items-center justify-center w-[90vw] lg:w-[50vw]">
      <form className="bg-label-bg w-full p-6 rounded-xl mb-4">
        <p className="font-bold text-lg text-main-label">Suggest a product</p>
        <p className="text-sub-label text-sm mb-2">Tell us what you'd like to see in the store.</p>
        <p className="text-red-800 bg-red-100 p-2 rounded-xl border-1 border-red-200 mb-2">Please fill out the product name and reason before submitting.</p>
        <div className="flex gap-3 mb-2 w-full">
          <div className="flex-1">
            <p className="font-bold text-main-label">Product name</p>
            <input type="text" placeholder="e.g. Camping tent" className="w-full border-1 border-gray-300 rounded-md p-1 bg-product-bg text-main-label placeholder:text-sub-label" required/>
          </div>
          <div className="flex-1">
            <p className="font-bold text-main-label">Category</p>
            <input type="text" placeholder="e.g. Furniture" className="w-full border-1 border-gray-300 rounded-md p-1 bg-product-bg text-main-label placeholder:text-sub-label" required/>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-main-label">Why should we carry it?</p>
          <textarea className="aspect-[6/2] md:aspect-[8/2] lg:aspect-[8/1] border-1 border-gray-300 rounded-md w-full placeholder:text-sub-label bg-product-bg" placeholder="Reason"/>
          <p className="text-sub-label text-sm self-end">97/200</p>
        </div>
        <button className="bg-brand-green text-label-bg p-2 rounded-md font-bold">Submit suggestion</button>
      </form>
      <div className="flex flex-col w-full">
        <p className="font-bold mb-2 text-main-label">Suggestions (2)</p>
        <ul className="flex flex-col gap-3 ml-2">
          <li className="bg-label-bg p-2 rounded-md">
            <p className="font-bold mb-1 text-main-label">Scented candles <span className="text-sm bg-gray-300 text-black px-2 py-1 rounded-full">fragrances</span></p>
            <p className="text-main-label">Would be a nice add-on next to the perfumes.</p>
          </li>
          <li className="bg-label-bg p-2 rounded-md">
            <p className="font-bold mb-1 text-main-label">Scented candles <span className="text-sm bg-gray-300 text-black px-2 py-1 rounded-full">fragrances</span></p>
            <p className="text-main-label">Would be a nice add-on next to the perfumes.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}