import React from "react";

const Web3Context = React.createContext({});

export const Web3ContextProvider = ({ children }) => {
  return <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>;
};

export default Web3Context;
