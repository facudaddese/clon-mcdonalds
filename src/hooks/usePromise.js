import { useState, useEffect } from "react";

export const usePromise = (promise) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promise()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [promise]);

  return { products, loading };
};
