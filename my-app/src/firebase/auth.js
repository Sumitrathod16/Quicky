import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

/** User-readable messages for common Firebase Auth errors (Google / email). */
export const getFirebaseAuthErrorMessage = (error) => {
  const code = error?.code;
  const messages = {
    "auth/popup-blocked":
      "Your browser blocked the sign-in window. We switched to a full-page sign-in — please try again.",
    "auth/popup-closed-by-user": "Sign-in was cancelled. Try again if you want to continue.",
    "auth/cancelled-popup-request": "Only one sign-in window can be open at a time.",
    "auth/unauthorized-domain":
      "This domain is not allowed for sign-in. In Firebase Console → Authentication → Settings, add this URL under Authorized domains.",
    "auth/operation-not-allowed":
      "Google sign-in is not enabled. In Firebase Console → Authentication → Sign-in method, enable Google.",
    "auth/account-exists-with-different-credential":
      "An account already exists with this email using a different sign-in method.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
  };
  return messages[code] || error?.message || "Sign-in failed. Please try again.";
};

/* ======================
   Email / Password Login
====================== */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/* ======================
   Google Login (popup; redirect if popup blocked)
   Firestore profile is created/updated in AuthContext only.
====================== */
export const doSignInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (e) {
    if (e?.code === "auth/popup-blocked") {
      await signInWithRedirect(auth, googleProvider);
      return null;
    }
    throw e;
  }
};

/* ======================
   Signup
====================== */
export const doCreateUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

/* ======================
   Password Reset
====================== */
export const doSendPasswordResetEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};
