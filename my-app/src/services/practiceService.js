/**
 * practiceService.js
 * Saves and loads practice code + solved status per user using Firestore.
 *
 * Firestore structure:
 *   practiceData/{userId}/problems/{problemId}/languages/{langId}
 *     → { code: string, updatedAt: timestamp }
 *
 *   practiceData/{userId}/solved
 *     → { solvedIds: number[] }
 */

import { db } from '../firebase/firebase';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

// ── Save code for a specific problem + language ──────────────────
export async function saveCode(userId, problemId, langId, code) {
  if (!userId) return;
  const ref = doc(
    db,
    'practiceData', userId,
    'problems', String(problemId),
    'languages', langId
  );
  await setDoc(ref, { code, updatedAt: serverTimestamp() }, { merge: true });
}

// ── Load all saved codes for a user (returns { [problemId]: { [langId]: code } }) ──
export async function loadAllCodes(userId) {
  if (!userId) return {};
  const result = {};
  try {
    const problemsRef = collection(db, 'practiceData', userId, 'problems');
    const problemsSnap = await getDocs(problemsRef);
    for (const pDoc of problemsSnap.docs) {
      const pid = pDoc.id;
      result[pid] = {};
      const langsRef = collection(db, 'practiceData', userId, 'problems', pid, 'languages');
      const langsSnap = await getDocs(langsRef);
      langsSnap.forEach(lDoc => {
        result[pid][lDoc.id] = lDoc.data().code;
      });
    }
  } catch (err) {
    console.error('[practiceService] loadAllCodes error:', err);
  }
  return result;
}

// ── Save solved IDs ───────────────────────────────────────────────
export async function saveSolvedIds(userId, solvedIds) {
  if (!userId) return;
  const ref = doc(db, 'practiceData', userId, 'meta', 'solved');
  await setDoc(ref, { solvedIds: [...solvedIds], updatedAt: serverTimestamp() }, { merge: true });
}

// ── Load solved IDs ───────────────────────────────────────────────
export async function loadSolvedIds(userId) {
  if (!userId) return new Set();
  try {
    const ref = doc(db, 'practiceData', userId, 'meta', 'solved');
    const snap = await getDoc(ref);
    if (snap.exists()) return new Set(snap.data().solvedIds || []);
  } catch (err) {
    console.error('[practiceService] loadSolvedIds error:', err);
  }
  return new Set();
}

// ── Save streak data (last solved date, current streak) ──────────
export async function updateStreak(userId) {
  if (!userId) return;
  try {
    const ref = doc(db, 'practiceData', userId, 'meta', 'streak');
    const snap = await getDoc(ref);
    const today = new Date().toDateString();
    const existing = snap.exists() ? snap.data() : { currentStreak: 0, lastSolvedDate: null, bestStreak: 0 };
    
    if (existing.lastSolvedDate === today) {
      return existing;
    }
    
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newStreak = existing.lastSolvedDate === yesterday ? existing.currentStreak + 1 : 1;
    const bestStreak = Math.max(newStreak, existing.bestStreak || 0);
    
    await setDoc(ref, {
      currentStreak: newStreak,
      lastSolvedDate: today,
      bestStreak,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    
    return { currentStreak: newStreak, lastSolvedDate: today, bestStreak };
  } catch (err) {
    console.error('[practiceService] updateStreak error:', err);
  }
}

// ── Load streak data ──────────────────────────────────────────────
export async function loadStreak(userId) {
  if (!userId) return { currentStreak: 0, lastSolvedDate: null, bestStreak: 0 };
  try {
    const ref = doc(db, 'practiceData', userId, 'meta', 'streak');
    const snap = await getDoc(ref);
    if (snap.exists()) return snap.data();
  } catch (err) {
    console.error('[practiceService] loadStreak error:', err);
  }
  return { currentStreak: 0, lastSolvedDate: null, bestStreak: 0 };
}
