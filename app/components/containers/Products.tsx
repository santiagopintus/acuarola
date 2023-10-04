"use client";
import { useContext, useState, useEffect } from "react";
import { Product, ProductsContext } from "../context/ProductsContext";
import ProductsList from "../ProductsList";

const Products = () => {
  const pContext = useContext(ProductsContext);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    console.log(pContext.products);

    if (pContext.products && pContext.products.length) {
      setProducts(pContext.products);
    }
  }, [pContext.products]);

  if (!products || !products.length) {
    return null;
  }

  return <ProductsList products={products} />;
};

export default Products;
