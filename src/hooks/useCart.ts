import { useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { CartItem, Id, Product } from "../types/Product";
import { cartReducer } from "../reducers/cartReducer";

export const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const stored = localStorage.getItem("cart");
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  });

  const addProducts = (item: Product) => {
    dispatch({ type: "add", payload: { item } });
    toast.success(`${item.name} agregado al carrito`, { duration: 1500 });
  };

  const increaseQuantity = (id: Id) =>
    dispatch({ type: "increase", payload: { id } });

  const decrementQuantity = (item: CartItem) => {
    dispatch({ type: "decrement", payload: { item } });
    if (item.quantity - 1 === 0) {
      toast(`${item.name} eliminado del carrito`, {
        icon: "🗑️",
        duration: 1500,
      });
    }
  };

  const deleteProducts = (item: CartItem) => {
    dispatch({ type: "delete", payload: { item } });
    toast(`${item.name} eliminado del carrito`, {
      icon: "🗑️",
      duration: 2000,
    });
  };

  const emptyCart = () => dispatch({ type: "empty" });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    addProducts,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  };
};
