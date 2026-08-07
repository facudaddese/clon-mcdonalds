import { useState, useEffect } from "react";
import type { Product } from "../types/Product";

interface UsePromiseResult {
  products: Product[];
  loading: boolean;
}

export const usePromise = (
  promise: () => Promise<Product[]>,
): UsePromiseResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    promise()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [promise]);

  return { products, loading };
};
