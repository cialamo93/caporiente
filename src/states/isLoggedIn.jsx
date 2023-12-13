import React, { createContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [isLoggedIn, setLogin] = useState(false);

    const [change, setChange] = useState(false);
    useEffect(() => {    
        if (localStorage.getItem("kngaruToken") !== null) { setLogin(true) } 
        else { setLogin(false) }
    }, [change]);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };