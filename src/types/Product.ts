export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export type Id = Pick<Product, "id">;

export interface CartItem extends Product {
  quantity: number;
}

export interface HeaderProps {
  cart: CartItem[];
  deleteProducts: (item: CartItem) => void;
  increaseQuantity: (id: Id) => void;
  decrementQuantity: (item: CartItem) => void;
  emptyCart: () => void;
}

export interface CartProps extends HeaderProps {
  activeCart: boolean;
  handleActive: () => void;
  isEmpty: () => boolean;
}
