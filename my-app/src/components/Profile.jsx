import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isSameDay } from 'date-fns';
import { useAuth } from '../context/useAuth';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getLeaderboard, subscribeToLeaderboard, ACHIEVEMENTS, getUserAssignments, checkAndUnlockAchievements } from '../services/userService';
import './Profile.css';

const Profile = () => {
  const { user, profile, updateProfile, updateProgress, unlockAchievement, updateStreak } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignmentsOnDate, setAssignmentsOnDate] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profile?.photoURL || null);

  // Real data states
  const [leaderboard, setLeaderboard] = useState([]);
  const [userAssignments, setUserAssignments] = useState([]);
  const [weeklyActivity, setWeeklyActivity] = useState([]);

  useEffect(() => {
    setImageUrl(profile?.photoURL || null);
  }, [profile]);

  // Fetch real data on component mount
  useEffect(() => {
    if (user) {
      // Fetch leaderboard
      getLeaderboard(10).then(setLeaderboard);

      // Subscribe to real-time leaderboard updates
      const unsubscribe = subscribeToLeaderboard(setLeaderboard, 10);

      // Fetch user assignments
      getUserAssignments(user.uid).then(setUserAssignments);

      // Generate weekly activity from login history
      if (profile?.loginHistory) {
        const last7Days = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return {
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            hours: 0
          };
        });

        profile.loginHistory.forEach(login => {
          const loginDate = new Date(login.seconds * 1000);
          const dayIndex = last7Days.findIndex(day => {
            const dayDate = new Date();
            dayDate.setDate(dayDate.getDate() - (6 - last7Days.indexOf(day)));
            return dayDate.toDateString() === loginDate.toDateString();
          });
          if (dayIndex !== -1) {
            last7Days[dayIndex].hours += 2; // Assume 2 hours per login
          }
        });

        setWeeklyActivity(last7Days);
      }

      return () => unsubscribe();
    }
  }, [user, profile]);

  // Real data calculations
  const courseProgress = profile?.courses ? Object.entries(profile.courses).map(([name, data]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    completed: data.completed || 0,
    total: data.total || 100,
    color: getCourseColor(name)
  })) : [];

  const achievements = Object.values(ACHIEVEMENTS).map(achievement => ({
    ...achievement,
    unlocked: profile?.achievements?.includes(achievement.id) || false
  }));

  const skillDistribution = [
    { name: 'Frontend', value: calculateSkillValue('frontend'), color: '#8884d8' },
    { name: 'Backend', value: calculateSkillValue('backend'), color: '#82ca9d' },
    { name: 'Database', value: calculateSkillValue('database'), color: '#ffc658' },
    { name: 'DevOps', value: calculateSkillValue('devops'), color: '#ff7300' },
    { name: 'Mobile', value: calculateSkillValue('mobile'), color: '#00ff00' }
  ];

  // Helper functions
  function getCourseColor(courseName) {
    const colors = {
      python: '#306998',
      react: '#61DAFB',
      javascript: '#F7DF1E',
      nodejs: '#339933',
      css: '#1572B6'
    };
    return colors[courseName] || '#8884d8';
  }

  function calculateSkillValue(skill) {
    if (!profile?.courses) return 0;
    const skillCourses = {
      frontend: ['react', 'javascript', 'css'],
      backend: ['nodejs', 'python'],
      database: ['mongodb'],
      devops: [],
      mobile: ['flutter']
    };

    const relevantCourses = skillCourses[skill] || [];
    const totalProgress = relevantCourses.reduce((sum, course) => {
      return sum + (profile.courses[course]?.completed || 0);
    }, 0);

    return Math.min(100, totalProgress / relevantCourses.length || 0);
  }

  const currentStreak = profile?.currentStreak || 0;
  const totalAssignments = profile?.totalAssignments || 0;
  const completedAssignments = profile?.assignmentsCompleted || 0;
  const averageGrade = profile?.averageGrade || 'N/A';
  const userRank = leaderboard.findIndex(u => u.uid === user?.uid) + 1;

  const handleProgressUpdate = async (courseId, increment) => {
    if (!profile?.courses?.[courseId]) return;

    const currentProgress = profile.courses[courseId].completed || 0;
    const newProgress = Math.min(100, Math.max(0, currentProgress + increment));

    await updateProgress(courseId, newProgress);

    // Check for achievements
    const newAchievements = await checkAndUnlockAchievements(user.uid, {
      ...profile,
      courses: { ...profile.courses, [courseId]: { ...profile.courses[courseId], completed: newProgress } }
    });

    newAchievements.forEach(achievementId => {
      unlockAchievement(achievementId);
    });
  };

  const handleStreakUpdate = async () => {
    const newStreak = currentStreak + 1;
    await updateStreak(newStreak);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `profile-images/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update profile with new image URL
      await updateProfile({ photoURL: downloadURL });
      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  // Mock data - in real app, fetch from Firestore
  const mockPastAssignments = [
    { date: '2023-12-01', name: 'React Basics Assignment', status: 'completed', grade: 'A' },
    { date: '2023-12-02', name: 'JavaScript Fundamentals', status: 'completed', grade: 'B+' },
    { date: '2023-12-05', name: 'CSS Grid Layout', status: 'completed', grade: 'A-' },
    { date: '2023-12-10', name: 'Node.js API', status: 'completed', grade: 'A' },
    { date: '2023-12-15', name: 'Python Data Structures', status: 'completed', grade: 'B' },
  ];

  const mockLoginHistory = [
    '2023-12-01', '2023-12-02', '2023-12-03', '2023-12-05', '2023-12-07',
    '2023-12-10', '2023-12-12', '2023-12-15', '2023-12-16', '2023-12-18'
  ];

  // New mock data for enhanced profile

  // Helper functions for calendar







  // Helper functions for calendar

  const getAssignmentsForDate = (date) => {
    return mockPastAssignments.filter(assignment =>
      isSameDay(new Date(assignment.date), date)
    );
  };

  const isLoggedInOnDate = (date) => {
    return mockLoginHistory.some(loginDate =>
      isSameDay(new Date(loginDate), date)
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAssignmentsOnDate(getAssignmentsForDate(date));
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const assignments = getAssignmentsForDate(date);
      const loggedIn = isLoggedInOnDate(date);
      return (
        <div className="calendar-tile">
          {loggedIn && <div className="login-indicator"></div>}
          {assignments.length > 0 && (
            <div className="assignment-count">{assignments.length}</div>
          )}
        </div>
      );
    }
  };

  if (!user || !profile) {
    return (
      <div className="loading-container">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="profile-image-container">
          <motion.img
            src={imageUrl || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <label htmlFor="image-upload" className={`image-upload-label ${uploading ? 'uploading' : ''}`}>
            {uploading ? 'Uploading...' : 'Change Image'}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
        <h1>Welcome, {profile?.name || user?.displayName || 'User'}!</h1>
        <p>{user?.email}</p>
        <div className="account-info">
          <p><strong>Account Type:</strong> {profile?.accountType || 'Free'}</p>
          <p><strong>Ranking:</strong> {mockPastAssignments.length * 10} points</p>
        </div>
      </motion.div>

      <div className="profile-content">
        {/* Progress Overview */}
        <motion.div
          className="progress-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>📊 Progress Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{currentStreak}</h3>
              <p>Day Streak</p>
              <button onClick={handleStreakUpdate} className="streak-btn">+1 Day</button>
            </div>
            <div className="stat-card">
              <h3>{completedAssignments}/{totalAssignments}</h3>
              <p>Assignments Completed</p>
            </div>
            <div className="stat-card">
              <h3>{averageGrade}</h3>
              <p>Average Grade</p>
            </div>
            <div className="stat-card">
              <h3>{userRank || 'N/A'}</h3>
              <p>Global Rank</p>
            </div>
          </div>
        </motion.div>

        {/* Course Progress */}
        <motion.div
          className="course-progress"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>🎯 Course Progress</h2>
          <div className="progress-bars">
            {courseProgress.map((course, index) => (
              <div key={index} className="progress-item">
                <div className="progress-header">
                  <span className="course-name">{course.name}</span>
                  <span className="progress-text">{course.completed}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${course.completed}%`,
                      backgroundColor: course.color
                    }}
                  ></div>
                </div>
                <div className="progress-controls">
                  <button
                    onClick={() => handleProgressUpdate(course.name.toLowerCase(), -10)}
                    className="progress-btn"
                    disabled={course.completed <= 0}
                  >
                    -10%
                  </button>
                  <button
                    onClick={() => handleProgressUpdate(course.name.toLowerCase(), 10)}
                    className="progress-btn"
                    disabled={course.completed >= 100}
                  >
                    +10%
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Weekly Activity Chart */}
        <motion.div
          className="weekly-activity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>📈 Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} hours`, 'Study Time']} />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Skills Distribution */}
        <motion.div
          className="skills-distribution"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2>🛠️ Skills Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={skillDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {skillDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>🏅 Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h4>{achievement.name}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          className="leaderboard"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2>🏆 Global Leaderboard</h2>
          <div className="leaderboard-list">
            {leaderboard.map((userData, index) => (
              <div
                key={userData.uid}
                className={`leaderboard-item ${userData.uid === user?.uid ? 'current-user' : ''}`}
              >
                <div className="rank">#{index + 1}</div>
                <div className="avatar">{userData.avatar}</div>
                <div className="user-info">
                  <span className="name">{userData.name}</span>
                  <span className="points">{userData.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="past-assignments"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>📝 Assignment History</h2>
          <div className="assignments-list">
            {userAssignments.slice(0, 10).map((assignment) => (
              <motion.div
                key={assignment.id}
                className="assignment-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * userAssignments.indexOf(assignment), duration: 0.3 }}
              >
                <div className="assignment-info">
                  <span className="assignment-name">{assignment.name || 'Assignment'}</span>
                  <span className="assignment-date">
                    {assignment.submittedAt ? format(new Date(assignment.submittedAt.seconds * 1000), 'MMM dd, yyyy') : 'N/A'}
                  </span>
                </div>
                <div className="assignment-status">
                  <span className={`status ${assignment.status || 'pending'}`}>{assignment.status || 'pending'}</span>
                  <span className="grade">{assignment.grade || 'N/A'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="calendar-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>Activity Calendar</h2>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={tileContent}
            className="custom-calendar"
          />
          <div className="selected-date-info">
            <h3>Assignments on {format(selectedDate, 'MMMM dd, yyyy')}</h3>
            {assignmentsOnDate.length > 0 ? (
              <ul>
                {assignmentsOnDate.map((assignment, index) => (
                  <li key={index}>{assignment.name}</li>
                ))}
              </ul>
            ) : (
              <p>No assignments on this date.</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;