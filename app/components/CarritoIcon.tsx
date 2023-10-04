"use client";

import React, { useContext, useEffect, useState } from "react";
import { MPContext } from "./context/MPContext";
import Link from "next/link";
import { shoppingCartRoute } from "./utils/Endpoints";

const CarritoIcon = () => {
  const mpContext = useContext(MPContext);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    mpContext.cartItems.forEach((item) => {
      count += item.quantity;
    });
    setItemsCount(count);
  }, [mpContext.cartItems]);

  return (
    <Link
      href={shoppingCartRoute}
      title="Ir al carrito"
      className="carrito-icon-container"
    >
      <i className="shopping-cart"></i>
      {itemsCount > 0 && <span className="cart-count">{itemsCount}</span>}
    </Link>
  );
};

export default CarritoIcon;
