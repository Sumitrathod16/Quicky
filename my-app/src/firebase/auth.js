import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

import { auth, db } from "./firebase";

/* --------------------------------
   PROVIDERS
--------------------------------- */
const googleProvider = new GoogleAuthProvider();

/* --------------------------------
   EMAIL / PASSWORD
--------------------------------- */

// Login
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Signup + Firestore
export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  name
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await createUserIfNotExists(user, name);

  return user;
};

/* --------------------------------
   GOOGLE AUTH
--------------------------------- */

export const doSignInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  await createUserIfNotExists(user, user.displayName);

  return user;
};

/* --------------------------------
   LOGOUT
--------------------------------- */

export const doSignOut = () => signOut(auth);

/* --------------------------------
   FIRESTORE HELPERS
--------------------------------- */

const createUserIfNotExists = async (user, name = "") => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: name || "",
      email: user.email,
      provider: user.providerData[0]?.providerId,
      createdAt: serverTimestamp()
    });
  }
};

export const getUserProfile = async (uid) => {
  const userSnap = await getDoc(doc(db, "users", uid));
  return userSnap.exists() ? userSnap.data() : null;
};
