import { create } from "zustand";


type PaymentInfo = {
  name: string | null;
  cardNumber: string | null;
  expiration: string | null;
  cvv: string | null;
};

type ShippingInfo = {
  fullName: string | null;
  address: string | null;
  city: string | null;
  zip: string | null;
};

type CheckoutState = {
  shippingInfo: ShippingInfo;
  setShipping: (info: ShippingInfo) => boolean;
  
  paymentInfo: PaymentInfo;
  setPayment: (info: PaymentInfo) => boolean;
};

export const useCheckoutStore = create<CheckoutState>()(set => ({
  shippingInfo: {
    fullName: null,
    address: null,
    city: null,
    zip: null,
  },
  setShipping: info => {
    set({shippingInfo: info});
    return !Object.values(info).includes(null);
  },

  paymentInfo: {
    name: null,
    cardNumber: null,
    expiration: null,
    cvv: null,
  },
  setPayment: info => {
    info.cvv = info.cvv !== null && info.cvv.length === 3 && isFinite(Number(info.cvv)) ? info.cvv : null;
    info.cardNumber = info.cardNumber !== null && info.cardNumber.length === 16 && isFinite(Number(info.cardNumber)) ? info.cardNumber : null;
    set({paymentInfo: info});
    return !Object.values(info).includes(null);
  },
}));
