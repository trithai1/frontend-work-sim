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
  setPaymentInfo: (info: PaymentInfo) => void;
};

export const useCheckoutStore = create<CheckoutState>()(set => ({
  shippingInfo: null,
  setShipping: info => {},

  paymentInfo: null,
  setPaymentInfo: info => {},
}));
