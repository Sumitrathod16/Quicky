import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// Log client-side errors to Firestore collection 'clientErrors'
export const logClientError = async (payload) => {
  try {
    const docRef = await addDoc(collection(db, 'clientErrors'), {
      ...payload,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.error('Failed to log client error to Firestore:', err);
    // swallow — do not rethrow to avoid creating more unhandled rejections
    return null;
  }
};
