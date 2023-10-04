"use client";

import React, { createContext, useState, useEffect } from "react";

interface MPContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // preference: MPPreference | null;
  // setPreference: React.Dispatch<React.SetStateAction<MPPreference | null>>;
  addItem: (p: CartItem) => void;
  cartItems: CartItem[];
}

export type CartItem = {
  _id: string;
  img: string;
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
};

export type MPItem = {
  _id: string;
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
};

export const MPContext = createContext<MPContextType>({} as MPContextType);

const MPProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [preference, setPreference] = useState<MPPreference | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (p: CartItem) => {
    const itemIndex = cartItems.findIndex((item) => item._id === p._id);

    if (itemIndex !== -1) {
      // If the item is already in the list, increase its quantity
      const updatedCartItem = [...cartItems];
      updatedCartItem[itemIndex].quantity += 1;
      setCartItems(updatedCartItem);
    } else {
      // If the item is not in the list, add it with a quantity of 1
      setCartItems((prev) => [...prev, { ...p, quantity: 1 }]);
    }
  };

  return (
    <MPContext.Provider
      value={{
        isLoading,
        setIsLoading,
        // preference,
        // setPreference,
        addItem,
        cartItems,
      }}
    >
      {children}
    </MPContext.Provider>
  );
};

export default MPProvider;
