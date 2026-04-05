import { collection, query, orderBy, limit, getDocs, onSnapshot, doc, updateDoc, arrayUnion, setDoc, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// Leaderboard service
export const getLeaderboard = async (limitCount = 10) => {
  try {
    const q = query(collection(db, "users"), orderBy("totalPoints", "desc"), limit(limitCount));
    const querySnapshot = await getDocs(q);
    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      leaderboard.push({
        uid: doc.id,
        name: data.displayName || data.email.split('@')[0],
        points: data.totalPoints || 0,
        avatar: data.photoURL || data.displayName?.[0]?.toUpperCase() || data.email?.[0]?.toUpperCase(),
        achievements: data.achievements || [],
        currentStreak: data.currentStreak || 0
      });
    });
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};

// Real-time leaderboard subscription
export const subscribeToLeaderboard = (callback, limitCount = 10) => {
  const q = query(collection(db, "users"), orderBy("totalPoints", "desc"), limit(limitCount));
  return onSnapshot(q, (querySnapshot) => {
    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      leaderboard.push({
        uid: doc.id,
        name: data.displayName || data.email.split('@')[0],
        points: data.totalPoints || 0,
        avatar: data.photoURL || data.displayName?.[0]?.toUpperCase() || data.email?.[0]?.toUpperCase(),
        achievements: data.achievements || [],
        currentStreak: data.currentStreak || 0
      });
    });
    callback(leaderboard);
  });
};

// Achievement definitions
export const ACHIEVEMENTS = {
  FIRST_LOGIN: {
    id: 'first_login',
    name: 'Welcome Aboard!',
    description: 'Complete your first login',
    icon: '🎉',
    requirement: 'login'
  },
  COURSE_MASTER: {
    id: 'course_master',
    name: 'Course Master',
    description: 'Complete 5 courses',
    icon: '🏆',
    requirement: 'courses_completed >= 5'
  },
  STREAK_CHAMPION: {
    id: 'streak_champion',
    name: 'Streak Champion',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    requirement: 'currentStreak >= 7'
  },
  ASSIGNMENT_ACE: {
    id: 'assignment_ace',
    name: 'Assignment Ace',
    description: 'Score A+ on 10 assignments',
    icon: '⭐',
    requirement: 'a_plus_assignments >= 10'
  },
  PROGRESS_PRO: {
    id: 'progress_pro',
    name: 'Progress Pro',
    description: 'Reach 1000 total points',
    icon: '📈',
    requirement: 'totalPoints >= 1000'
  },
  COMMUNITY_HELPER: {
    id: 'community_helper',
    name: 'Community Helper',
    description: 'Help 5 fellow learners',
    icon: '🤝',
    requirement: 'help_count >= 5'
  }
};

// Check and unlock achievements
export const checkAndUnlockAchievements = async (userId, userData) => {
  const unlockedAchievements = userData.achievements || [];
  const newAchievements = [];

  // Check each achievement
  Object.values(ACHIEVEMENTS).forEach(achievement => {
    if (!unlockedAchievements.includes(achievement.id)) {
      let shouldUnlock = false;

      switch (achievement.id) {
        case 'first_login':
          shouldUnlock = userData.loginHistory && userData.loginHistory.length > 0;
          break;
        case 'course_master':
          const completedCourses = Object.values(userData.courses || {}).filter(course =>
            course.completed >= 100
          ).length;
          shouldUnlock = completedCourses >= 5;
          break;
        case 'streak_champion':
          shouldUnlock = (userData.currentStreak || 0) >= 7;
          break;
        case 'progress_pro':
          shouldUnlock = (userData.totalPoints || 0) >= 1000;
          break;
        // Add more achievement checks as needed
      }

      if (shouldUnlock) {
        newAchievements.push(achievement.id);
      }
    }
  });

  // Update user achievements
  if (newAchievements.length > 0) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      achievements: arrayUnion(...newAchievements)
    });
  }

  return newAchievements;
};

// Submit assignment
export const submitAssignment = async (userId, assignmentData) => {
  try {
    const assignmentRef = doc(collection(db, "assignments"));
    await setDoc(assignmentRef, {
      ...assignmentData,
      userId,
      submittedAt: new Date(),
      status: 'pending'
    });

    // Update user assignment count
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    const currentData = userSnap.data();

    await updateDoc(userRef, {
      totalAssignments: (currentData.totalAssignments || 0) + 1
    });

    return assignmentRef.id;
  } catch (error) {
    console.error("Error submitting assignment:", error);
    throw error;
  }
};

// Get user assignments
export const getUserAssignments = async (userId) => {
  try {
    const q = query(collection(db, "assignments"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const assignments = [];
    querySnapshot.forEach((doc) => {
      assignments.push({ id: doc.id, ...doc.data() });
    });
    return assignments;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    return [];
  }
};