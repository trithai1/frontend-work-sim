import { create } from "zustand";


type PaymentInfo = {
  name: string
  cardNumber: string;
  expiration: string;
  cvv: string;
};

type ShippingInfo = {
  fullName: string;
  address: string;
  city: string;
  zip: string;
};

type CheckoutState = {
  shippingInfo: ShippingInfo | null;
  setShipping: (info: ShippingInfo) => void;
  
  paymentInfo: PaymentInfo | null;
  setPayment: (info: PaymentInfo) => void;
};

export const useCheckoutStore = create<CheckoutState>()(set => ({
  shippingInfo: null,
  setShipping: info => set({shippingInfo: info}),

  paymentInfo: null,
  setPayment: info => set({paymentInfo: info}),
}));
