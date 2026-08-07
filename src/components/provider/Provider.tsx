import { usePromise } from "../../hooks/usePromise";
import { getProducts } from "../../service/getProducts";
import { Context, ContextI } from "../context/Context";
import data from "../../data/menu.json";
import { useCart } from "../../hooks/useCart";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { products, loading } = usePromise(() => getProducts(data));
  const {
    cart,
    addProducts,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  } = useCart();

  const value: ContextI = {
    products,
    loading,
    cart,
    addProducts,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
