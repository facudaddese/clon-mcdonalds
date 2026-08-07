import { createContext } from "react";
import { CartItem, Id, Product } from "../../types/Product";

export interface ContextI {
  products: Product[];
  loading: boolean;
  cart: CartItem[];
  addProducts: (item: Product) => void;
  increaseQuantity: (id: Id) => void;
  decrementQuantity: (item: CartItem) => void;
  deleteProducts: (item: CartItem) => void;
  emptyCart: () => void;
}

export const Context = createContext<ContextI | undefined>(undefined);
