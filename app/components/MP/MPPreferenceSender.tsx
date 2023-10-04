"use client";

import { MPContext, MPPreference } from "../context/MPContext";
import React, { useContext } from "react";

const MPPreferenceSender = ({
  preferenceData,
  preferenceIdSetter,
}: {
  preferenceData: MPPreference;
  preferenceIdSetter: (id: string) => void;
}) => {
  const mpContext = useContext(MPContext);
  const { setIsLoading } = mpContext;
  setIsLoading(true);

  fetch("http://localhost:8000/create-preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preferenceData),
  })
    .then((response) => {
      return response.json();
    })
    .then((preference) => {
      preferenceIdSetter(preference.id);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });

  return null;
};

export default MPPreferenceSender;
