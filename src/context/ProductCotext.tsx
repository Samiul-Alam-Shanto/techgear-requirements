"use client";

import { IProduct, IProductContext } from "@/types/product.type";
import { createContext, ReactNode, useContext, useState } from "react";

const ProductContext = createContext<IProductContext | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [buildList, setBuildList] = useState<IProduct[]>([]);
  const [wishList, setWishList] = useState<IProduct[]>([]);
  const value = { buildList, setBuildList, wishList, setWishList };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Maybe You haven;t wrapped the app into the provider");
  }
  return context;
}
