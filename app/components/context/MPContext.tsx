"use client";

import React, { createContext, useState, useEffect } from "react";

interface MPContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  preference: MPPreference | null;
  setPreference: React.Dispatch<React.SetStateAction<MPPreference | null>>;
  addItem: (p: MPItem) => void;
}

// export type Order = {
//   buyerEmail: string;
//   orderId: string;
//   buyerAdress: string;
//   products: ProductOrder[];
// };

// export type ProductOrder = {
//   productId: string;
//   productAmount: number;
//   productPrice: number;
// };

export type MPPreference = {
  items: MPItem[];
};

export type MPItem = {
  title: string;
  quantity: number;
  unit_price: number;
};

export const MPContext = createContext<MPContextType>({} as MPContextType);

const MPProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [preference, setPreference] = useState<MPPreference | null>(null);
  const [items, setItems] = useState<MPItem[]>([]);

  const addItem = (p: MPItem) => {
    setItems((prev) => [...prev, p]);
  };

  useEffect(() => {
    setPreference({ items });
  }, [items]);

  return (
    <MPContext.Provider
      value={{
        isLoading,
        setIsLoading,
        preference,
        setPreference,
        addItem,
      }}
    >
      {children}
    </MPContext.Provider>
  );
};

export default MPProvider;
