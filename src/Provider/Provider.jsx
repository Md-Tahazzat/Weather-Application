import React, { createContext, useState } from "react";

export const InfoContext = createContext(null);
const Provider = ({ children }) => {
  const [showCelsius, setShowCelsius] = useState(true);
  const info = {
    showCelsius,
    setShowCelsius,
  };
  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>;
};

export default Provider;
