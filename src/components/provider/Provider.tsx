import { usePromise } from "../../hooks/usePromise";
import { getProducts } from "../../service/getProducts";
import data from "../../data/menu.json";
import { useCart } from "../../hooks/useCart";
import { Context, ContextInterface } from "../../context/Context";

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

  const value: ContextInterface = {
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
