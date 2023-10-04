"use client";

import React, { createContext, useState } from "react";

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export type Product = {
  id: string;
  price: number;
  title: string;
  description: string;
  images: string[];
  author: string;
  tags: string[];
};

export const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
