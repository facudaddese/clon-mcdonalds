import type { Product } from "../types/Product";

export const getProducts = (data: Product[]): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });
};
