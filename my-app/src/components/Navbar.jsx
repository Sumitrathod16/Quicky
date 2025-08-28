import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CompanyIcon from "../assets/qlogo.svg";
import { useAuth } from "../context/authContext"; // 👈 Import auth context

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, userLoggedIn, logOut } = useAuth() || {}; // fallback to empty object
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut(); // 👈 Use your context's logout method
      setMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        nav {
          width: 100%;
          height: 60px;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .company {
          height: 50px;
          width: 60px;
          pointer-events: none;
        }

        .menu-toggle {
          display: none;
          font-size: 28px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 30px;
          align-items: center;
        }

        nav ul li a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }

        nav ul li a:hover,
        nav ul li a.active {
          background: red;
          color: #fff;
        }

        .login-button,
        .logout-button {
          background-color: red;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 15px;
          color: white;
          text-decoration: none;
        }

        .login-button:hover,
        .logout-button:hover {
          background-color: darkred;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 0.9rem;
        }

        .profile-img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          nav ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: black;
            padding: 15px 0;
            gap: 15px;
          }

          nav ul.open {
            display: flex;
          }

          .login-button,
          .logout-button {
            margin: 10px auto;
          }

          .profile {
            justify-content: center;
          }
        }
      `}</style>

      <nav className="navbar">
        <img src={CompanyIcon} alt="company" className="company" />

        {/* ☰ Toggle Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* 🔗 Navigation Links */}
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>

          {userLoggedIn ? (
            <>
              <li className="profile">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="profile-img" />
                ) : (
                  <span style={{ background: '#333', padding: '6px 10px', borderRadius: '50%' }}>
                    {user?.email?.[0]?.toUpperCase()}
                  </span>
                )}
                <span>{user?.displayName || user?.email}</span>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign up</Link></li>
              <li>
                <Link to="/login" className="login-button" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
