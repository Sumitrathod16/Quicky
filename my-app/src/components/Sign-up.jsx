import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
  getFirebaseAuthErrorMessage,
} from "../firebase/auth";
import toast from "react-hot-toast";
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
      const msg = "All fields are required";
      setError(msg);
      toast.error(msg);
      return;
    }
    if (password.length < 6) {
      const msg = "Password must be at least 6 characters";
      setError(msg);
      toast.error(msg);
      return;
    }
    if (password !== confirmPassword) {
      const msg = "Passwords do not match";
      setError(msg);
      toast.error(msg);
      return;
    }
    setIsLoading(true);
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      toast.success("Account created");
      navigate("/home");
    } catch {
      const msg = "Signup failed. Email may already be in use.";
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setError("");
    try {
      const cred = await doSignInWithGoogle();
      if (cred) {
        toast.success("Signed up with Google");
        navigate("/home");
      }
    } catch (error) {
      const msg = getFirebaseAuthErrorMessage(error);
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  .auth-page {
    min-height: 100vh; width: 100%;
    background: linear-gradient(135deg, #f0f4ff 0%, #e0f2fe 50%, #f8faff 100%);
    display: flex; align-items: center; justify-content: center;
    padding: 24px; position: relative; overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  .auth-page::before {
    content: ''; position: absolute; top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(ellipse at 25% 25%, rgba(79,70,229,0.07) 0%, transparent 55%),
                radial-gradient(ellipse at 75% 75%, rgba(14,165,233,0.06) 0%, transparent 55%);
    pointer-events: none;
  }
  .auth-orb-1 {
    position: absolute; top: 10%; left: 5%;
    width: 280px; height: 280px; border-radius: 50%;
    background: radial-gradient(circle, rgba(79,70,229,0.12), transparent);
    filter: blur(60px); animation: authFloat 8s ease-in-out infinite; pointer-events: none;
  }
  .auth-orb-2 {
    position: absolute; bottom: 10%; right: 5%;
    width: 220px; height: 220px; border-radius: 50%;
    background: radial-gradient(circle, rgba(14,165,233,0.1), transparent);
    filter: blur(50px); animation: authFloat 10s ease-in-out infinite 3s; pointer-events: none;
  }
  @keyframes authFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
  .auth-card {
    position: relative; z-index: 2; width: 100%; max-width: 420px;
    background: #fff; border: 1px solid #e5e7eb; border-radius: 24px;
    padding: 44px 40px;
    box-shadow: 0 16px 48px rgba(79,70,229,0.1), 0 4px 16px rgba(0,0,0,0.06);
    animation: cardFadeIn 0.5s ease both;
  }
  @keyframes cardFadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .auth-logo-row { display: flex; justify-content: center; margin-bottom: 28px; }
  .auth-logo-icon {
    width: 52px; height: 52px; border-radius: 16px;
    background: linear-gradient(135deg, #4f46e5, #0ea5e9);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; box-shadow: 0 8px 20px rgba(79,70,229,0.3);
  }
  .auth-title { font-size: 1.8rem; font-weight: 800; color: #1e1b4b; text-align: center; margin: 0 0 6px; letter-spacing: -0.02em; }
  .auth-subtitle { font-size: 0.9rem; color: #9ca3af; text-align: center; margin: 0 0 30px; }
  .auth-error { background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2); border-radius: 10px; padding: 10px 14px; color: #dc2626; font-size: 0.85rem; margin-bottom: 20px; text-align: center; }
  .auth-success { background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); border-radius: 10px; padding: 10px 14px; color: #059669; font-size: 0.85rem; margin-bottom: 20px; text-align: center; }
  .auth-form { display: flex; flex-direction: column; gap: 14px; }
  .auth-input-wrap { position: relative; }
  .auth-input {
    width: 100%; padding: 13px 16px; background: #f9fafb;
    border: 1px solid #e5e7eb; border-radius: 12px;
    color: #111827; font-size: 0.95rem; font-family: 'Inter', sans-serif;
    outline: none; transition: all 0.25s ease; box-sizing: border-box;
  }
  .auth-input::placeholder { color: #d1d5db; }
  .auth-input:focus { border-color: rgba(79,70,229,0.4); background: #fff; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
  .auth-input:disabled { opacity: 0.5; cursor: not-allowed; }
  .auth-forgot { text-align: right; margin-top: -6px; }
  .auth-forgot button { background: none; border: none; color: #4f46e5; font-size: 0.82rem; font-family: 'Inter', sans-serif; cursor: pointer; padding: 2px 0; transition: color 0.2s; }
  .auth-forgot button:hover { color: #4338ca; }
  .auth-submit-btn {
    width: 100%; padding: 13px;
    background: linear-gradient(135deg, #4f46e5, #0ea5e9);
    border: none; border-radius: 12px; color: #fff;
    font-size: 1rem; font-weight: 700; font-family: 'Inter', sans-serif;
    cursor: pointer; transition: all 0.25s ease;
    box-shadow: 0 4px 15px rgba(79,70,229,0.3); margin-top: 4px;
  }
  .auth-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(79,70,229,0.45); }
  .auth-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
  .auth-divider { display: flex; align-items: center; gap: 12px; margin: 20px 0; color: #d1d5db; font-size: 0.8rem; }
  .auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }
  .auth-google-btn {
    width: 100%; padding: 12px; background: #fff;
    border: 1px solid #e5e7eb; border-radius: 12px;
    color: #374151; font-size: 0.95rem; font-weight: 500; font-family: 'Inter', sans-serif;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    cursor: pointer; transition: all 0.25s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .auth-google-btn:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .auth-google-btn:disabled { opacity: 0.55; cursor: not-allowed; }
  .auth-google-btn img { width: 20px; height: 20px; }
  .auth-switch { text-align: center; margin-top: 24px; font-size: 0.88rem; color: #9ca3af; }
  .auth-switch a { color: #4f46e5; font-weight: 600; text-decoration: none; transition: color 0.2s; }
  .auth-switch a:hover { color: #4338ca; }
  @media (max-width: 480px) { .auth-card { padding: 32px 24px; border-radius: 20px; } }
`}</style>

      <div className="auth-page">
        <div className="auth-orb-1"></div>
        <div className="auth-orb-2"></div>

        <div className="auth-card">
          <div className="auth-logo-row">
            <div className="auth-logo-icon">⚡</div>
          </div>

          <h1 className="auth-title">Create account</h1>
          <p className="auth-subtitle">Join thousands of learners today</p>

          {error && <div className="auth-error">{error}</div>}

          <form className="auth-form" onSubmit={handleSignUp}>
            <input
              className="auth-input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
            <p className="auth-hint">Minimum 6 characters</p>

            <button className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="auth-divider">or continue with</div>

          <button className="auth-google-btn" onClick={handleGoogleSignUp} disabled={isLoading}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            Continue with Google
          </button>

          <div className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
