import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from "../firebase/auth";
import { useAuth } from "../context/authContext";

const SignUp = () => {
  const { isAuthenticated, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (loading) return null;

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleManualSignUp = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setFirebaseError("");

    try {
      await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password,
        "" // add name field here later if needed
      );
      navigate("/home");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setFirebaseError("This email is already registered.");
      } else {
        setFirebaseError("Failed to create an account.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setFirebaseError("");

    try {
      await doSignInWithGoogle();
      navigate("/home");
    } catch {
      setFirebaseError("Google sign-up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .auth-container {
          max-width: 400px;
          margin: 60px auto;
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          text-align: center;
        }
        .auth-btn {
          background: black;
          color: white;
        }
      `}</style>

      <div className="auth-container">
        <h1>Create Account</h1>

        {firebaseError && <div className="error-msg">{firebaseError}</div>}

        <form onSubmit={handleManualSignUp}>
          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error-msg">{errors.password}</div>}

          <input
            className="auth-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error-msg">{errors.confirmPassword}</div>
          )}

          <button className="auth-btn" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <button className="google-btn" onClick={handleGoogleSignUp}>
          Sign Up with Google
        </button>

        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
