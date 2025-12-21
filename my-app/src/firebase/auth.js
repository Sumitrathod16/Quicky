import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const googleProvider = new GoogleAuthProvider();

/* ======================
   Email / Password Login
====================== */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/* ======================
   Google Login
====================== */
export const doSignInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);

  const userRef = doc(db, "users", result.user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      email: result.user.email,
      name: result.user.displayName,
      provider: "google",
      createdAt: new Date()
    });
  }

  return result;
};

/* ======================
   Signup
====================== */
export const doCreateUserWithEmailAndPassword = async (
  email,
  password
) => {
  const cred = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await setDoc(doc(db, "users", cred.user.uid), {
    email: cred.user.email,
    provider: "password",
    createdAt: new Date()
  });

  return cred;
};
