import React, { createContext, useEffect, useState } from "react";
import UserApi from "./API/UserApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const FirstLogin = localStorage.getItem("firstLogin");
    if (FirstLogin) {
      const refreshToken = async () => {
        await axios.get("/refreshToken");
        setToken(Response.data.accessToken);

        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    UserApi : UserApi(token)
  };

  return (
    <GlobalState.Provider value={state}>
    {children}
    </GlobalState.Provider> 
    );
};
