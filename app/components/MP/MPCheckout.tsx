"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState, useContext } from "react";
import { MPContext, MPItem } from "../context/MPContext";
import SendItems from "./MPItemsSender";

const MPCheckout = () => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const mpContext = useContext(MPContext);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MP_KEY) {
      initMercadoPago(process.env.NEXT_PUBLIC_MP_KEY);
    } else {
      console.error("Couldn't connect to Mercadopago");
    }
  }, []);

  const handleBuy = () => {
    let items: MPItem[] = mpContext.cartItems.map((p) => {
      return {
        _id: p._id,
        id: p.id,
        quantity: p.quantity,
        title: p.title,
        unit_price: p.unit_price,
      };
    });

    SendItems(items, setPreferenceId);
  };

  if (preferenceId) {
    return <Wallet initialization={{ preferenceId: preferenceId }} />;
  } else {
    return (
      <button className="button primary" onClick={handleBuy}>
        Ir a comprar
      </button>
    );
  }
};

export default MPCheckout;
