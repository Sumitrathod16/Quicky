import {
  createContext,
  useEffect,
  useState
} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc, setDoc, collection, query, orderBy, limit, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setLoading(true);

        if (!currentUser) {
          setUser(null);
          setProfile(null);
          return;
        }

        setUser(currentUser);

        // Initialize user data
        await initializeUserData(currentUser);
      } catch (error) {
        console.error("AuthContext error:", error);
        setUser(null);
        setProfile(null);
      } finally {
        setLoading(false);
      }
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

  // Initialize user data on first login
  const initializeUserData = async (currentUser) => {
    const userRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // Create initial user data
      const initialData = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || currentUser.email.split('@')[0],
        photoURL: currentUser.photoURL || null,
        accountType: 'free',
        createdAt: new Date(),
        lastLogin: new Date(),
        totalPoints: 0,
        currentStreak: 0,
        longestStreak: 0,
        assignmentsCompleted: 0,
        totalAssignments: 0,
        averageGrade: 'N/A',
        courses: {
          python: { completed: 0, total: 100 },
          react: { completed: 0, total: 100 },
          javascript: { completed: 0, total: 100 },
          nodejs: { completed: 0, total: 100 },
          css: { completed: 0, total: 100 }
        },
        achievements: [],
        weeklyActivity: [],
        loginHistory: []
      };
      await setDoc(userRef, initialData);
      setProfile(initialData);
    } else {
      // Update last login
      await updateDoc(userRef, {
        lastLogin: new Date(),
        loginHistory: [...(userSnap.data().loginHistory || []), new Date()].slice(-30) // Keep last 30 logins
      });
      setProfile(userSnap.data());
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
      const courses = currentData.data().courses;
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
