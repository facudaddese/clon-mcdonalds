export const getProducts = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });
};
