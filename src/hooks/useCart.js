import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useCart = () => {
  const [cart, setCart] = useState(() =>
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  );

  const addProducts = (item) => {
    setCart((prev) => {
      if (prev.find((e) => e.id === item.id)) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    toast.success(`${item.name} agregado al carrito`, { duration: 1500 });
  };

  const increaseQuantity = (id) => {
    setCart((prev) => {
      return prev.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el,
      );
    });
  };

  const decrementQuantity = (item) => {
    setCart((prev) => {
      return prev
        .map((el) =>
          el.id === item.id ? { ...el, quantity: el.quantity - 1 } : el,
        )
        .filter((el) => el.quantity > 0);
    });

    if (item.quantity - 1 === 0) {
      toast(`${item.name} eliminado del carrito`, {
        icon: "🗑️",
        duration: 1500,
      });
    }
  };

  const deleteProducts = (item) => {
    setCart((prev) => prev.filter((e) => e.id !== item.id));
    toast(`${item.name} eliminado del carrito`, {
      icon: "🗑️",
      duration: 2000,
    });
  };

  const emptyCart = () => setCart([]);

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
