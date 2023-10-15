import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [stateBreadcrumb, setStateBreadcrumb] = useState([]);

  return (
    <Context.Provider
      value={{
        stateBreadcrumb,
        setStateBreadcrumb,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
