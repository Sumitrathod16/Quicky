import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSendPasswordResetEmail,
  getFirebaseAuthErrorMessage,
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
    if (!email || !password) { setError("Email and password are required"); return; }
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
      const cred = await doSignInWithGoogle();
      if (cred) navigate("/home");
    } catch (error) {
      setError(getFirebaseAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { setError("Please enter your email address first"); return; }
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .auth-page {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .auth-page::before {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background:
            radial-gradient(ellipse at 25% 25%, rgba(139,92,246,0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 75%, rgba(59,130,246,0.1) 0%, transparent 55%);
          pointer-events: none;
        }

        .auth-orb-1 {
          position: absolute;
          top: 10%; left: 5%;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.25), transparent);
          filter: blur(60px);
          animation: authFloat 8s ease-in-out infinite;
          pointer-events: none;
        }
        .auth-orb-2 {
          position: absolute;
          bottom: 10%; right: 5%;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.2), transparent);
          filter: blur(50px);
          animation: authFloat 10s ease-in-out infinite 3s;
          pointer-events: none;
        }

        @keyframes authFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        .auth-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 44px 40px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          animation: cardFadeIn 0.5s ease both;
        }

        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .auth-logo-row {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }

        .auth-logo-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(124,58,237,0.35);
        }

        .auth-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .auth-subtitle {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.45);
          text-align: center;
          margin: 0 0 30px;
        }

        .auth-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 10px;
          padding: 10px 14px;
          color: #fca5a5;
          font-size: 0.85rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .auth-success {
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          border-radius: 10px;
          padding: 10px 14px;
          color: #6ee7b7;
          font-size: 0.85rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .auth-input-wrap {
          position: relative;
        }

        .auth-input {
          width: 100%;
          padding: 13px 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .auth-input::placeholder { color: rgba(255,255,255,0.3); }

        .auth-input:focus {
          border-color: rgba(139,92,246,0.5);
          background: rgba(139,92,246,0.06);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.1);
        }

        .auth-input:disabled { opacity: 0.5; cursor: not-allowed; }

        .auth-forgot {
          text-align: right;
          margin-top: -6px;
        }

        .auth-forgot button {
          background: none;
          border: none;
          color: rgba(167,139,250,0.8);
          font-size: 0.82rem;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          padding: 2px 0;
          transition: color 0.2s;
        }
        .auth-forgot button:hover { color: #a78bfa; }

        .auth-submit-btn {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(124,58,237,0.35);
          margin-top: 4px;
        }

        .auth-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(124,58,237,0.5);
        }

        .auth-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0;
          color: rgba(255,255,255,0.2);
          font-size: 0.8rem;
        }
        .auth-divider::before, .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .auth-google-btn {
          width: 100%;
          padding: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .auth-google-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.2);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .auth-google-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .auth-google-btn img { width: 20px; height: 20px; }

        .auth-switch {
          text-align: center;
          margin-top: 24px;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
        }

        .auth-switch a {
          color: #a78bfa;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        .auth-switch a:hover { color: #c4b5fd; }

        @media (max-width: 480px) {
          .auth-card { padding: 32px 24px; border-radius: 20px; }
        }
      `}</style>

      <div className="auth-page">
        <div className="auth-orb-1"></div>
        <div className="auth-orb-2"></div>

        <div className="auth-card">
          <div className="auth-logo-row">
            <div className="auth-logo-icon">⚡</div>
          </div>

          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue learning</p>

          {error && <div className="auth-error">{error}</div>}
          {resetEmailSent && (
            <div className="auth-success">Password reset email sent! Check your inbox.</div>
          )}

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-input-wrap">
              <input
                className="auth-input"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="auth-input-wrap">
              <input
                className="auth-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="auth-forgot">
              <button type="button" onClick={handleForgotPassword} disabled={isLoading}>
                Forgot password?
              </button>
            </div>

            <button className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="auth-divider">or continue with</div>

          <button className="auth-google-btn" onClick={handleGoogleLogin} disabled={isLoading}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            Continue with Google
          </button>

          <div className="auth-switch">
            Don't have an account?{" "}
            <Link to="/signup">Create one</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
