"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState, useContext } from "react";
import { MPContext, MPPreference } from "../context/MPContext";
import MPPreferenceSender from "./MPPreferenceSender";

const MPCheckout = () => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [preference, setPreference] = useState<MPPreference>();
  const mpContext = useContext(MPContext);

  useEffect(() => {
    if (mpContext.preference && Object.keys(mpContext.preference).length) {
      setPreference(mpContext.preference);
      console.log(mpContext.preference);
    }
  }, [mpContext.preference]);

  useEffect(() => {
    if (preference && Object.keys(preference).length) {
      <MPPreferenceSender
        preferenceData={preference}
        preferenceIdSetter={setPreferenceId}
      />;
    }
  }, [preference]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MP_KEY) {
      initMercadoPago(process.env.NEXT_PUBLIC_MP_KEY);
    }
  }, []);

  if (preferenceId) {
    return <Wallet initialization={{ preferenceId: preferenceId }} />;
  }
};

export default MPCheckout;
