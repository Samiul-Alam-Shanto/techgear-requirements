export const getAllProducts = async () => {
  const res = await fetch(
    "https://tech-gear-products-api.vercel.app/api/products",
    { cache: "no-store" },
  );
  return res.json();
};

export const getSingleProduct = async (id: string) => {
  const res = await fetch(
    `https://tech-gear-products-api.vercel.app/api/products/${id}`,
  );
  return res.json();
};
