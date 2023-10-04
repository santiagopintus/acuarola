"use client";

import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { productsURL } from "../utils/Endpoints";

const ProductsFetcher = () => {
  const pContext = useContext(ProductsContext);

  const fetchProducts = () => {
    fetch(productsURL)
      .then((res) => res.json())
      .then((res) => pContext.setProducts(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return null;
};

export default ProductsFetcher;
