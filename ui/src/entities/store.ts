import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "./product";

// NOTE this module not finished

// const getInitialStateFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("cart");
//     if (serializedState) {
//       return JSON.parse(serializedState);
//     }
//   } catch (error) {
//     console.error("Error reading local storage", error);
//   }
//   return {
//     products: [],
//     totalItems: 0,
//     totalPrice: 0,
//   };
// };

// const initialState = getInitialStateFromLocalStorage();

export interface ICart {
  cartItems: ICartItem[];
  totalItems: number;
  totalPrice: number;
}

interface ICartItem {
  product: Product
  amount: number
}
export type ActionTypes = {
  addToCart:(item:ICartItem)=> void;
  removeFromCart:(item:ICartItem, numberToRemove?: number)=> void;
}


const INITIAL_STATE: ICart = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<ICart & ActionTypes>(
    (set, get) => ({
      cartItems: INITIAL_STATE.cartItems,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(newItem) {
        console.log('Add to cart action', newItem);
        set((state) => {
          const currentItems = state.cartItems

          const productInState = currentItems.find(({product}) => product.id === newItem.product.id);

          const updatedItems = productInState
            ? currentItems.map((item) => item.product.id === productInState.product.id ? {...item, amount: item.amount + newItem.amount} : item)
            : [...currentItems, newItem]
            .filter(x => x.amount > 0)
          return {
            cartItems: updatedItems,
            totalItems: updatedItems.length,
            totalPrice: updatedItems.reduce((acc, {product, amount}) => acc + product.price * amount, 0),
          }
        })
      },
      removeFromCart(item, numberToRemove) {
        const currentItems = get().cartItems

        const newAmount = numberToRemove ? item.amount - numberToRemove : 0

        const newState = newAmount >= 0
          ? currentItems.map((stateItem) => item.product.id === stateItem.product.id ? {...item, amount: newAmount} : item)
          : currentItems.filter((stateItem) => stateItem.product.id !== item.product.id)

        set(() => ({
          cartItems: newState,
          totalItems: newState.length,
          totalPrice: newState.reduce((acc, {product, amount}) => acc + product.price * amount, 0),
        }));
      },
    }),
    { name: "cart", storage: createJSONStorage(() => sessionStorage) }
  )
);

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

