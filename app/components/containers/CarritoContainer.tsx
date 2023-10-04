import { useContext, useState, useEffect } from "react";
import { MPContext } from "../context/MPContext";
import CarritoItem from "../CarritoItem";
import Link from "next/link";
import MPCheckout from "../MP/MPCheckout";

const CarritoContainer = () => {
  const mpContext = useContext(MPContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    mpContext.cartItems.forEach((p) => {
      tot += p.unit_price * p.quantity;
    });
    setTotal(tot);
  }, [mpContext.cartItems]);

  return (
    <div className="cart-items-container">
      {mpContext.cartItems.length > 0 ? (
        <>
          {mpContext.cartItems.map((p, i) => {
            return <CarritoItem product={p} key={`cart${i}`} />;
          })}
          <div className="carrito-details">
            <h3>Total a pagar: ${total}</h3>
            <MPCheckout />
          </div>
        </>
      ) : (
        <div className="empty-cart-msg">
          <h4>No hay elementos en el carrito</h4>
          <Link className="button primary" href={"/"}>
            Buscar pinturas
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarritoContainer;
