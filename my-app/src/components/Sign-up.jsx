import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext'; // ✅ import Firebase auth

function Signin() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [firebaseError, setFirebaseError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        
     

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await doCreateUserWithEmailAndPassword(formData.email, formData.password);
            alert("Sign-up successful!");
            navigate("/login");
        } catch (error) {
            setFirebaseError(error.message);
        }
    };

    return (
        <>
            <style>
                {`
                    .signin-container {
                        max-width: 400px;
                        margin: 60px auto;
                        padding: 2rem;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        text-align: center;
                    }

                    .signin-title {
                        margin-bottom: 1rem;
                        color: #222;
                    }

                    .signin-desc {
                        margin-bottom: 1.5rem;
                        color: #555;
                    }

                    .signin-form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        text-align: left;
                    }

                    .signin-input {
                        padding: 0.7rem;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 1rem;
                    }

                    .signin-btn {
                        padding: 0.7rem;
                        background: #6361f1;
                        color: #fff;
                        border: none;
                        border-radius: 4px;
                        font-size: 1rem;
                        cursor: pointer;
                    }

                    .signin-btn:hover {
                        background: #0056b3;
                    }

                    .error {
                        color: red;
                        font-size: 0.85rem;
                        margin-top: -0.5rem;
                        margin-bottom: 0.5rem;
                    }
                `}
            </style>


            <div className="signin-container">
                <h1 className="signin-title">Sign Up</h1>
                <p className="signin-desc">Please fill in the details to create an account.</p>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <input className="signin-input" type="email" placeholder="Email" name="email" value={formData.email || ""} onChange={handleChange} />
                    {errors.email && <div className="error">{errors.email}</div>}
                    <input className="signin-input" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <div className="error">{errors.password}</div>}
                    <button className="signin-btn" type="submit">Sign In</button>
                    {firebaseError && <div className="error">{firebaseError}</div>}
                
                </form>
            </div>
        </>
    );
}

export default Signin;
