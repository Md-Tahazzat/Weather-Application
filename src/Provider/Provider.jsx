import React, { createContext, useState } from "react";

export const InfoContext = createContext(null);
const Provider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("false");
  const info = {
    activeSection,
    setActiveSection,
  };
  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>;
};

export default Provider;
