import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(window.localStorage.getItem('cartList'));
    if (cartLS === null) {
      setCartList([]);
      return;
    }
    setCartList(cartLS);
  }, []);

  return (
    <Context.Provider
      value={{
        cartList,
        setCartList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
