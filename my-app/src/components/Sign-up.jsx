import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle} from '../firebase/auth';
import {useAuth} from '../context/authContext';
const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    if(errors[name] || (name === 'password' && errors.confirmPassword)) {
        setErrors(prev => ({...prev, [name]: null, ...(name === 'password' && {confirmPassword: null})}));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleManualSignUp = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setFirebaseError("");
      try {
        await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        navigate('/home');
      } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
            setFirebaseError('This email is already registered.');
        } else {
            setFirebaseError('Failed to create an account. Please try again.');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setFirebaseError("");
    try {
      await doSignInWithGoogle();
      navigate('/home');
    } catch {
      setFirebaseError("Google sign-up failed. Please try again.");
    } finally {
        setIsLoading(false);
    }
  };
  
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
    
            <style>
                {`
                    .auth-container {
                        max-width: 400px;
                        margin: 60px auto;
                        padding: 2rem;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        text-align: center;
                    }

                    .auth-title {
                        margin-bottom: 1rem;
                        color: #222;
                    }

                    .auth-desc {
                        margin-bottom: 1.5rem;
                        color: #555;
                    }

                    .auth-form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        text-align: left;
                    }

                    .auth-input {
                        padding: 0.7rem;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        font-size: 1rem;
                    }

                    .auth-btn {
                        padding: 0.7rem;
                        backgroun:black;
                        color: #fff;
                        border: none;
                        border-radius: 4px;
                        font-size: 1rem;
                        cursor: pointer;
                    }

                    .auth-btn:hover {
                        background:darkred;
                    }

                    .error {
                        color: red;
                        font-size: 0.85rem;
                        margin-top: -0.5rem;
                        margin-bottom: 0.5rem;
                    }

                        .google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: #fff;
          border: 1px solid #ddd;
          color: #555;
          font-weight: 500;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .google-btn img {
          width: 20px;
          height: 20px;
        }

        .google-btn:hover {
          background: #f7f7f7;
        }

        .account {
          margin-top: 15px;
          font-size: 0.9rem;
        }

        .account a {
          color:#4338ca;
          text-decoration: none;
          font-weight: bold;
        }

        .error-msg {
          color: red;
          font-size: 0.8rem;
          margin-top: -8px;
          margin-bottom: 5px;
          text-align: left;
        }
          .info{
          text-align:center;
          font-size:15px;
          }
      

                `}
            </style>
    <div className="auth-container">
      <h1 className="auth-title">Create Account</h1>
      <p className="auth-desc">Get started with your new account.</p>

      {firebaseError && <div className="error-msg server-error">{firebaseError}</div>}
      
      <form className="auth-form" onSubmit={handleManualSignUp} noValidate>
        <input
          className={`auth-input ${errors.email ? 'input-error' : ''}`}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error-msg">{errors.email}</div>}

        <input
          className={`auth-input ${errors.password ? 'input-error' : ''}`}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error-msg">{errors.password}</div>}

        <input
          className={`auth-input ${errors.confirmPassword ? 'input-error' : ''}`}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="error-msg">{errors.confirmPassword}</div>}

        <button className="auth-btn" type="submit" disabled={isLoading}>{isLoading ? 'Creating Account...' : 'Sign Up'}</button>
      </form>

      <div className="divider"><span>OR</span></div>
      
      <button className="google-btn" onClick={handleGoogleSignUp} disabled={isLoading}>
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
        Sign Up with Google
      </button>

      <div className="switch-auth">
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
    </>
  );
};
export default SignUp;
