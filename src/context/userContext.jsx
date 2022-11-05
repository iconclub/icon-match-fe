// libs
import React, { createContext, useState, useMemo, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest" });

  const value = useMemo(() => [user, setUser], [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const Context = () => useContext(UserContext);

export default Context;
