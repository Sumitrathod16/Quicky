import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from "../firebase/auth";
import { useAuth } from "../context/useAuth";

const SignUp = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/home" replace />;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/home");
    } catch {
      setError("Signup failed. Email may already be in use.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setError("");
    try {
      await doSignInWithGoogle();
      navigate("/home");
    } catch {
      setError("Google signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          width: 360px;
          margin: 80px auto;
          padding: 30px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
        .login-title {
          font-size: 1.6rem;
          color:black;
          text-align: center;
          margin-bottom: 10px;
        }
        .login-desc {
          font-size: 0.9rem;
          color: #666;
          text-align: center;
          margin-bottom: 20px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .login-input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 0.95rem;
        }
        .login-btn {
          margin-top: 10px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          background: #000;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }
        .login-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .google-btn {
          margin-top: 15px;
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          display: flex;
          color:black;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
        }
        .google-btn img {
          width: 18px;
        }
        .error-msg {
          color: red;
          font-size: 0.85rem;
          margin-bottom: 10px;
          text-align: center;
        }
        .account {
          margin-top: 15px;
          text-align: center;
          font-size: 0.9rem;
          color:black;
        }
        .account a {
          color: #4338ca;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>

      <div className="login-container">
        <h1 className="login-title">Create Account</h1>
        <p className="login-desc">
          Sign up using email/password or Google
        </p>

        {error && <div className="error-msg">{error}</div>}

        <form className="login-form" onSubmit={handleSignUp}>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
          />

          <button className="login-btn" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <button
          className="google-btn"
          onClick={handleGoogleSignUp}
          disabled={isLoading}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Sign Up with Google
        </button>

        <div className="account">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
