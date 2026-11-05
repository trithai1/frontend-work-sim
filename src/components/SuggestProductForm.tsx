import { useState } from "react";
import { useSuggestionStore } from "../store/suggestion";

export function SuggestProductForm() {
  const [count, setCount] = useState(0);
  const [invalid, setInvalid] = useState("");
  const { suggestions, addSuggestion, removeSuggestion } = useSuggestionStore();

  function handleSuggestion(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const { productName, category, reason } = Object.fromEntries(formData) as Record<string, string>;
    addSuggestion(productName, category, reason);
  }

  function handleInvalid(event: React.InvalidEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const invalidInputs = form.querySelectorAll<HTMLInputElement>(":invalid");
    const missing = Array.from(invalidInputs).map(input => input.dataset.displayName) as string[];
    setInvalid(`Please fill out the ${new Intl.ListFormat("en").format(missing)} before submitting.`);
  }

  return (
    <div className="flex flex-col items-center justify-center w-[90vw] lg:w-[50vw]">
      <form className="bg-label-bg w-full p-6 rounded-xl mb-4" onSubmit={handleSuggestion} onInvalid={handleInvalid}>
        <p className="font-bold text-lg text-main-label">Suggest a product</p>
        <p className="text-sub-label text-sm mb-2">Tell us what you'd like to see in the store.</p>
        {invalid !== "" && <p className="text-red-800 bg-red-100 p-2 rounded-xl border-1 border-red-200 mb-2">{invalid}</p>}
        <div className="flex gap-3 mb-2 w-full">
          <div className="flex-1">
            <p className="font-bold text-main-label">Product name</p>
            <input name="productName" type="text" placeholder="e.g. Camping tent" className="w-full border-1 border-gray-300 rounded-md p-1 bg-product-bg text-main-label placeholder:text-sub-label" data-display-name="Product Name" required/>
          </div>
          <div className="flex-1">
            <p className="font-bold text-main-label">Category</p>
            <input name="category" type="text" placeholder="e.g. Furniture" className="w-full border-1 border-gray-300 rounded-md p-1 bg-product-bg text-main-label placeholder:text-sub-label" data-display-name="Category" required/>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-main-label">Why should we carry it?</p>
          <textarea name="reason" maxLength={200} className="text-main-label aspect-[6/2] md:aspect-[8/2] lg:aspect-[8/1] border-1 border-gray-300 rounded-md w-full placeholder:text-sub-label bg-product-bg" placeholder="Reason" onChange={(e) => setCount(e.target.value.length)} data-display-name="Reason" required/>
          <p className="text-sub-label text-sm self-end">{count}/200</p>
        </div>
        <button className="bg-brand-green text-label-bg p-2 rounded-md font-bold">Submit suggestion</button>
      </form>
      <div className="flex flex-col w-full">
        <p className="font-bold mb-2 text-main-label">Suggestions ({suggestions.length})</p>
        <ul className="flex flex-col gap-3 ml-2">
          {suggestions.map(suggestion => (
            <li key={suggestion.id} className="bg-label-bg p-2 rounded-md flex justify-between">
              <div>
                <p className="font-bold mb-1 text-main-label">{suggestion.productName} <span className="text-sm bg-gray-300 text-black px-2 py-1 rounded-full">{suggestion.category}</span></p>
                <p className="text-main-label">{suggestion.reason}</p>
              </div>
              <button className="mr-2 text-3xl text-red-700" onClick={() => removeSuggestion(suggestion.id)}>×</button>
            </li>  
          ))}
        </ul>
      </div>
    </div>
  );
}