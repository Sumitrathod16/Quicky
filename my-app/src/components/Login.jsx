import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSendPasswordResetEmail
} from "../firebase/auth";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/home" replace />;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");
    try {
      await doSignInWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Google login error:", error);
      setError(`Google login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      await doSendPasswordResetEmail(email);
      setResetEmailSent(true);
    } catch {
      setError("Failed to send reset email. Please check your email address.");
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
          color:black;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          display: flex;
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
        <h1 className="login-title">Login</h1>
        <p className="login-desc">
          Sign in using email/password or Google
        </p>

        {error && <div className="error-msg">{error}</div>}
        {resetEmailSent && (
          <div style={{ color: 'green', fontSize: '0.85rem', marginBottom: '10px', textAlign: 'center' }}>
            Password reset email sent! Check your inbox.
          </div>
        )}

        <form className="login-form" onSubmit={handleLogin}>
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

          
          <button className="login-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          className="google-btn"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Login with Google
        </button>
<div style={{ textAlign: 'right', marginTop: '5px' }}>
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={isLoading}
              style={{
                alignItems: 'center',
                background: 'none',
                border: 'none',
                color:'black',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textDecoration:'underline'
              }}
            >
              Forgot Password?
            </button>
          </div>

        <div className="account">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
