import { useState, useEffect } from "react";

export const usePromise = (promise) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    promise().then((data) => setProducts(data));
  }, [promise]);

  return { products };
};
