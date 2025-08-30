// src/context/authContext.js
import React, { useContext, useEffect, useState, createContext } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();



export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setUserLoggedIn(!!currentUser);
      setLoading(false);
      console.log("Auth state changed:",currentUser)
    });
    return unsubscribe;
  }, []);

 const logOut= () =>signOut(auth);

  return (
    <AuthContext.Provider value={{user, userLoggedIn, logOut}}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
 export const useAuth = () => useContext(AuthContext);