import React, { useContext,useEffect, useState, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoggedIn(!!currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, userLoggedIn, logOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
export default AuthContext;

