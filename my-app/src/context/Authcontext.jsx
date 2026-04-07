import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, getRedirectResult } from "firebase/auth";
import { doc, getDoc, updateDoc, setDoc, collection, query, orderBy, limit, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth).catch(() => {});

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (!currentUser) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);
      await initializeUserData(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } finally {
      setUser(null);
      setProfile(null);
    }
  };

  const updateProfile = async (updates) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, updates);
      setProfile(prev => ({ ...prev, ...updates }));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Initialize user data on first login (never clears Firebase Auth user on Firestore errors)
  const initializeUserData = async (currentUser) => {
    const userRef = doc(db, "users", currentUser.uid);
    const fallbackProfile = {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName || currentUser.email?.split("@")[0] || "User",
      photoURL: currentUser.photoURL || null,
    };

    const defaultCourses = {
      html: { completed: 0, total: 100 },
      python: { completed: 0, total: 100 },
      react: { completed: 0, total: 100 },
      javascript: { completed: 0, total: 100 },
      nodejs: { completed: 0, total: 100 },
      css: { completed: 0, total: 100 },
    };

    const buildFullProfile = (partial = {}) => ({
      ...fallbackProfile,
      ...partial,
      displayName: partial.displayName || partial.name || fallbackProfile.displayName,
      photoURL: partial.photoURL ?? fallbackProfile.photoURL,
      accountType: partial.accountType || "free",
      createdAt: partial.createdAt || new Date(),
      lastLogin: new Date(),
      totalPoints: partial.totalPoints ?? 0,
      currentStreak: partial.currentStreak ?? 0,
      longestStreak: partial.longestStreak ?? 0,
      assignmentsCompleted: partial.assignmentsCompleted ?? 0,
      totalAssignments: partial.totalAssignments ?? 0,
      averageGrade: partial.averageGrade || "N/A",
      courses: { ...defaultCourses, ...(partial.courses || {}) },
      achievements: Array.isArray(partial.achievements) ? partial.achievements : [],
      weeklyActivity: Array.isArray(partial.weeklyActivity) ? partial.weeklyActivity : [],
      loginHistory: Array.isArray(partial.loginHistory) ? partial.loginHistory : [],
    });

    try {
      const userSnap = await getDoc(userRef);
      const existing = userSnap.exists ? userSnap.data() : null;
      const needsFullProfile =
        !existing ||
        !existing.courses ||
        typeof existing.courses !== "object";

      if (needsFullProfile) {
        const partial = existing || {};
        const initialData = buildFullProfile(partial);
        try {
          await setDoc(userRef, initialData, { merge: true });
          setProfile(initialData);
        } catch (writeErr) {
          console.error("Could not create Firestore user profile:", writeErr);
          setProfile(initialData);
        }
      } else {
        const data = userSnap.data();
        try {
          await updateDoc(userRef, {
            lastLogin: new Date(),
            loginHistory: [...(data.loginHistory || []), new Date()].slice(-30),
          });
        } catch (updateErr) {
          console.warn("Could not update last login in Firestore:", updateErr);
        }
        setProfile(data);
      }
    } catch (error) {
      console.error("Firestore user profile unavailable:", error);
      setProfile(fallbackProfile);
    }
  };

  // Update user progress
  const updateProgress = async (courseId, progress) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      const updateData = {
        [`courses.${courseId}.completed`]: progress,
        lastActivity: new Date()
      };

      // Calculate total points based on progress
      const currentData = await getDoc(userRef);
      const courses = currentData.data().courses || {};
      if (!courses[courseId]) courses[courseId] = { completed: 0, total: 100 };
      courses[courseId].completed = progress;

      const totalProgress = Object.values(courses).reduce((sum, course) => sum + course.completed, 0);
      const averageProgress = totalProgress / Object.keys(courses).length;
      updateData.totalPoints = Math.floor(averageProgress * 10); // 1000 max points

      await updateDoc(userRef, updateData);
      setProfile(prev => ({
        ...prev,
        courses: { ...prev.courses, [courseId]: { ...prev.courses[courseId], completed: progress } },
        totalPoints: updateData.totalPoints,
        lastActivity: new Date()
      }));
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Add achievement
  const unlockAchievement = async (achievementId) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      const currentData = await getDoc(userRef);
      const achievements = currentData.data().achievements || [];

      if (!achievements.includes(achievementId)) {
        await updateDoc(userRef, {
          achievements: [...achievements, achievementId]
        });
        setProfile(prev => ({
          ...prev,
          achievements: [...(prev.achievements || []), achievementId]
        }));
      }
    } catch (error) {
      console.error("Error unlocking achievement:", error);
    }
  };

  // Update streak
  const updateStreak = async (streak) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      const currentData = await getDoc(userRef);
      const longestStreak = Math.max(currentData.data().longestStreak || 0, streak);

      await updateDoc(userRef, {
        currentStreak: streak,
        longestStreak: longestStreak
      });
      setProfile(prev => ({
        ...prev,
        currentStreak: streak,
        longestStreak: longestStreak
      }));
    } catch (error) {
      console.error("Error updating streak:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAuthenticated: Boolean(user),
        loading,
        logOut,
        updateProfile,
        updateProgress,
        unlockAchievement,
        updateStreak,
        initializeUserData
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
