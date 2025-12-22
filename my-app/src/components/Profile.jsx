import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, isSameDay } from 'date-fns';
import { useAuth } from '../context/authContext/index';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './Profile.css'; // We'll create this

const Profile = () => {
  const { user, profile, updateProfile } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [assignmentsOnDate, setAssignmentsOnDate] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profile?.imageUrl || null);

  useEffect(() => {
    setImageUrl(profile?.imageUrl || null);
  }, [profile]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `profileImages/${user.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateProfile({ imageUrl: downloadURL });
      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  // Mock data - in real app, fetch from Firestore
  const mockPastAssignments = [
    { date: '2023-12-01', name: 'React Basics Assignment' },
    { date: '2023-12-02', name: 'JavaScript Fundamentals' },
    { date: '2023-12-05', name: 'CSS Grid Layout' },
    { date: '2023-12-10', name: 'Node.js API' },
    { date: '2023-12-15', name: 'Python Data Structures' },
  ];

  const mockLoginHistory = [
    '2023-12-01',
    '2023-12-02',
    '2023-12-03',
    '2023-12-05',
    '2023-12-07',
    '2023-12-10',
    '2023-12-12',
    '2023-12-15',
  ];

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
      </motion.div>

      <div className="profile-content">
        <motion.div
          className="past-assignments"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>Past Assignments</h2>
          <div className="assignments-list">
            {mockPastAssignments.map((assignment, index) => (
              <motion.div
                key={index}
                className="assignment-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <span className="assignment-name">{assignment.name}</span>
                <span className="assignment-date">{format(new Date(assignment.date), 'MMM dd, yyyy')}</span>
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