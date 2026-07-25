import { usePromise } from "../../hooks/usePromise";
import { getProducts } from "../../service/getProducts";
import { Context } from "../context/Context";
import data from "../../../public/data/menu.json";

const Provider = ({ children }) => {
  const { products } = usePromise(() => getProducts(data));

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};

export default Provider;
