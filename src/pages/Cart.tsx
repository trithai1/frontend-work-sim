import { useCartStore } from "../store/cart";

export function Cart() {
  const setCartHidden = useCartStore(state => state.setCartHidden);
  setCartHidden(true);
  
  return(
    <></>
  );
}