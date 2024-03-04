import React, { createContext, useState } from "react";
import PostLogin from "./postLoginRoutes";
import LoginScreen from "../screens/preLoginScreens/login";

export const DataShare = createContext();

const NavigationStack = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <DataShare.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? <PostLogin /> : <LoginScreen setLoggedIn={setLoggedIn} />}
    </DataShare.Provider>
  );
};

export default NavigationStack;
