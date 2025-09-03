import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth";
import {auth} from "./firebase";
import { useContext } from "react";
import AuthContext from "../context/authContext";

export const useAuth=()=> useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

export const doSignInWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const doCreateUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const doSignInWithGoogle = () =>
  signInWithPopup(auth, googleProvider);

export const doSignOut = () => signOut(auth);
