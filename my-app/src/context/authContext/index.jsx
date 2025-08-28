// src/context/authContext.js
import React, { useContext, useEffect, useState, createContext } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    if (user) {
      setUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  const logOut = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    user,
    userLoggedIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
