import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addProducts = (item) => {
    setCart((prev) => {
      if (prev.find((e) => e.id === item.id)) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const deleteProducts = (id) => {
    setCart((prev) => prev.filter((e) => e.id !== id));
  };

  return { cart, addProducts, deleteProducts };
};
