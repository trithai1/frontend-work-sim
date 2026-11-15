import { useLocation } from "react-router";
import { NavLink } from "react-router";
import type { CartItem } from "../types/cart";


const aCart = [
  {
    "product": {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "discountPercentage": 18.19,
      "rating": 2.86,
      "stock": 34,
      "tags": [
        "beauty",
        "eyeshadow"
      ],
      "brand": "Glamour Beauty",
      "sku": "BEA-GLA-EYE-002",
      "weight": 9,
      "dimensions": {
        "width": 9.26,
        "height": 22.47,
        "depth": 27.67
      },
      "warrantyInformation": "1 year warranty",
      "shippingInformation": "Ships in 2 weeks",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Savannah Gomez",
          "reviewerEmail": "savannah.gomez@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Awesome product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Christian Perez",
          "reviewerEmail": "christian.perez@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Poor quality!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Nicholas Bailey",
          "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 20,
      "meta": {
        "createdAt": "2024-12-03T11:29:45.706Z",
        "updatedAt": "2025-08-24T16:52:47.806Z",
        "barcode": "9170275171413",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    "quantity": 1
  },
  {
    "product": {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "price": 14.99,
      "discountPercentage": 9.84,
      "rating": 4.64,
      "stock": 89,
      "tags": [
        "beauty",
        "face powder"
      ],
      "brand": "Velvet Touch",
      "sku": "BEA-VEL-POW-003",
      "weight": 8,
      "dimensions": {
        "width": 29.27,
        "height": 27.93,
        "depth": 20.59
      },
      "warrantyInformation": "3 months warranty",
      "shippingInformation": "Ships in 1-2 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Would buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Alexander Jones",
          "reviewerEmail": "alexander.jones@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Elijah Cruz",
          "reviewerEmail": "elijah.cruz@x.dummyjson.com"
        },
        {
          "rating": 1,
          "comment": "Very dissatisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Avery Perez",
          "reviewerEmail": "avery.perez@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 22,
      "meta": {
        "createdAt": "2025-01-08T18:30:12.844Z",
        "updatedAt": "2025-11-26T14:49:26.980Z",
        "barcode": "8418883906837",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    },
    "quantity": 1
  },
  {
    "product": {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "price": 12.99,
      "discountPercentage": 12.16,
      "rating": 4.36,
      "stock": 91,
      "tags": [
        "beauty",
        "lipstick"
      ],
      "brand": "Chic Cosmetics",
      "sku": "BEA-CHI-LIP-004",
      "weight": 1,
      "dimensions": {
        "width": 18.11,
        "height": 28.38,
        "depth": 22.17
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships in 1 week",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Liam Garcia",
          "reviewerEmail": "liam.garcia@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Great product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Ruby Andrews",
          "reviewerEmail": "ruby.andrews@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Would buy again!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Clara Berry",
          "reviewerEmail": "clara.berry@x.dummyjson.com"
        }
      ],
      "returnPolicy": "7 days return policy",
      "minimumOrderQuantity": 40,
      "meta": {
        "createdAt": "2025-11-22T23:28:00.911Z",
        "updatedAt": "2026-01-26T01:31:40.721Z",
        "barcode": "9467746727219",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
    },
    "quantity": 1
  }
];

const aConfirmationCode = "ZEB-29257";

export function Confirmation() {
  const cart: CartItem[] = useLocation().state.cart;
  const confirmationCode = useLocation().state.confirmationCode;

  // const cart = aCart;
  // const confirmationCode = aConfirmationCode;
  const subtotal = cart.reduce((acc, item) => acc += item.product.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mr-2 rounded-full flex size-8 bg-brand-green justify-center items-center border-2 border-brand-green text-label-bg">✓</div>
        <p className="text-main-label font-bold text-3xl">Thanks, Jordan! Your order is in.</p>
        <p className="text-sub-label text-sm">Order <span className="font-bold">#{confirmationCode}</span> - a confirmation was sent to your email</p>
        <div className="flex flex-col min-w-[40dvw] bg-label-bg p-2 rounded-xl mb-4">
          <ul className="flex-1 flex flex-col gap-2 overflow-y-auto font-bold rounded-b-md mb-4 shadow-md">
            {cart.map(item => (
              <li key={item.product.id} className="flex justify-between shadow-md p-2 rounded-b-md bg-label-bg">
                <div className="flex">
                  <img className="w-25 h-auto bg-product-bg rounded-xl" src={item.product.thumbnail}></img>
                  <div className="p-2">
                    <p className="text-main-label">{item.product.title}</p>
                    <p className="text-sub-label">${item.product.price} each{item.quantity === item.product.stock && <span className="text-brand-brown"> - max reached</span>}</p>
                  </div>
                </div>
                <div className="flex flex-col p-2 justify-center text-right">
                  <p className="mb-1 text-main-label">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-main-label px-2">
            <p className="font-bold pl-2">Total paid</p>
            <p className="font-bold pr-2">${subtotal}</p>
          </div>
        </div>
        <NavLink to="/" className="bg-brand-green text-label-bg font-bold rounded-xl px-4 py-2">Keep shopping</NavLink>
      </div>
    </>
  );
}