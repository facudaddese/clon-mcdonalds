import { usePromise } from "../../hooks/usePromise";
import { getProducts } from "../../service/getProducts";
import { Context } from "../context/Context";
import data from "../../data/menu.json";
import { useCart } from "../../hooks/useCart";

const Provider = ({ children }) => {
  const { products, loading } = usePromise(() => getProducts(data));
  const {
    cart,
    addProducts,
    increaseQuantity,
    decrementQuantity,
    deleteProducts,
    emptyCart,
  } = useCart();

  return (
    <Context.Provider
      value={{
        products,
        loading,
        cart,
        addProducts,
        increaseQuantity,
        decrementQuantity,
        deleteProducts,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
