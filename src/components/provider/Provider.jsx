import { usePromise } from "../../hooks/usePromise";
import { getProducts } from "../../service/getProducts";
import { Context } from "../context/Context";
import data from "/public/data/menu.json";
import { useCart } from "../../hooks/useCart";

const Provider = ({ children }) => {
  const { products } = usePromise(() => getProducts(data));
  const { cart, addProducts, deleteProducts } = useCart();

  return (
    <Context.Provider value={{ products, cart, addProducts, deleteProducts }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
