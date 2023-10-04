import React from "react";
import { Product } from "./context/ProductsContext";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className="products-list container">
        <h2>Pinturas seleccionadas</h2>
        {products.map((p, i) => {
          return <ProductItem key={`prod-${i}`} p={p} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
