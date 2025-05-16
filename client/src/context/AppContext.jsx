import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [isSeller, setIsSeller] = useState(false); // fixed typo

  const value = { navigate, user, setuser, isSeller, setIsSeller };

  return (
    <AppContext.Provider value={value}> {/* fixed double-wrapping */}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
