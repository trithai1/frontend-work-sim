import { create } from "zustand";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";


type CartState = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (product: Product) => void;
  subtractFromCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;

  cartHidden: boolean;
  setCartHidden: (cartHidden: boolean) => void;
};

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  setCart: (cart) => set({cart}),
  
  addToCart: (product) => set((state) => {
    const inCart = state.cart.some(item => item.product.id === product.id);
    
    let newCart;
    if (inCart) {
      newCart = state.cart.map(item => item.product.id === product.id && item.quantity < product.stock ?
        {...item, quantity: item.quantity + 1} : item
      );
    } else newCart = [...state.cart, {product, quantity: 1}];
    return { cart: newCart }
  }),
  
  subtractFromCart: (product) => set((state) => {
    const inCart = state.cart.some(item => item.product.id === product.id);
    
    const newCart = inCart ? state.cart.reduce((acc: CartItem[], item) => {
      if(item.product.id !== product.id) acc.push(item);
      else if(item.quantity > 1) acc.push({...item, quantity: item.quantity - 1});
      return acc;
    }, []) : state.cart;
    return {cart: newCart };
  }),

  removeFromCart: (product) => set((state) => {
    const newCart = state.cart.filter(item => item.product.id !== product.id);
    return { cart: newCart };
  }),

  cartHidden: true,
  setCartHidden: (cartHidden) => set({cartHidden}),
}));