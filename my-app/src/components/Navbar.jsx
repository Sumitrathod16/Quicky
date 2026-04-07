import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CompanyIcon from "../assets/qlogo.svg";
import { useAuth } from "../context/useAuth";

const COURSES = [
  { label: "HTML & CSS", path: "/Html", icon: "🌐" },
  { label: "JavaScript", path: "/Javascript", icon: "⚡" },
  { label: "React.js", path: "/Reactjs", icon: "⚛️" },
  { label: "Node.js", path: "/Nodejs", icon: "🟢" },
  { label: "Python", path: "/Python", icon: "🐍" },
  { label: "Java", path: "/Java", icon: "☕" },
  { label: "C++", path: "/C++", icon: "⚙️" },
  { label: "MongoDB", path: "/MongoDB", icon: "🍃" },
  { label: "Machine Learning", path: "/Ml", icon: "🤖" },
  { label: "Flutter", path: "/Flutter", icon: "💙" },
  { label: "AWS", path: "/Aws", icon: "☁️" },
  { label: "SQL", path: "/Sql", icon: "🗄️" },
];

function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [userOpen, setUserOpen]       = useState(false);
  const { user, logOut }              = useAuth();
  const navigate                      = useNavigate();
  const location                      = useLocation();
  const coursesRef                    = useRef(null);
  const userRef                       = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) setCoursesOpen(false);
      if (userRef.current    && !userRef.current.contains(e.target))    setUserOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setCoursesOpen(false); setUserOpen(false); }, [location.pathname]);

  const handleLogout = async () => {
    const ok = window.confirm("Are you sure you want to log out?");
    if (!ok) return;
    try { await logOut(); navigate("/login"); } catch (e) { console.error(e); }
  };

  const isActive = (path) => location.pathname === path;
  const displayName = user?.displayName || user?.email?.split("@")[0] || "User";
  const avatarLetter = (user?.displayName?.[0] || user?.email?.[0] || "U").toUpperCase();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* ── Root ── */
        .nb-root {
          width: 100%;
          height: 68px;
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Inter', sans-serif;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .nb-root.nb-scrolled {
          background: rgba(10, 8, 30, 0.88);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(139,92,246,0.18);
          box-shadow: 0 4px 40px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(139,92,246,0.08) inset;
        }
        .nb-root:not(.nb-scrolled) {
          background: rgba(15,12,41,0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Inner layout ── */
        .nb-inner {
          max-width: 1320px;
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
        }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 10px;
          width: fit-content;
        }
        .nb-logo img {
          height: 38px;
          width: auto;
          pointer-events: none;
          transition: filter 0.3s;
        }
        .nb-logo:hover img { filter: brightness(1.15) drop-shadow(0 0 8px rgba(167,139,250,0.5)); }

        /* ── Center pill nav ── */
        .nb-center {
          display: flex;
          align-items: center;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 4px;
          list-style: none;
          margin: 0;
        }
        .nb-center li { position: relative; }

        .nb-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.58);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 7px 15px;
          border-radius: 100px;
          transition: all 0.22s ease;
          white-space: nowrap;
          letter-spacing: 0.01em;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Inter', sans-serif;
        }
        .nb-link:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .nb-link.nb-active {
          color: #c4b5fd;
          background: rgba(124,58,237,0.18);
          font-weight: 600;
        }

        /* "New" badge */
        .nb-badge {
          font-size: 0.6rem;
          font-weight: 700;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          padding: 2px 6px;
          border-radius: 100px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1;
        }

        /* Dropdown arrow */
        .nb-arrow {
          font-size: 0.6rem;
          opacity: 0.55;
          transition: transform 0.22s ease;
          margin-left: -2px;
        }
        .nb-drop-open .nb-arrow { transform: rotate(180deg); opacity: 1; }

        /* ── Courses Dropdown ── */
        .nb-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(13,10,35,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 12px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          min-width: 380px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08);
          backdrop-filter: blur(20px);
          animation: nbFadeIn 0.18s ease;
          z-index: 200;
        }
        @keyframes nbFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .nb-drop-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .nb-drop-item:hover {
          background: rgba(124,58,237,0.14);
          color: #c4b5fd;
        }
        .nb-drop-icon { font-size: 1rem; }
        .nb-drop-divider {
          grid-column: 1 / -1;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 6px 0;
        }
        .nb-drop-all {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border-radius: 10px;
          background: rgba(124,58,237,0.08);
          border: 1px solid rgba(124,58,237,0.15);
          color: #a78bfa;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.18s ease;
        }
        .nb-drop-all:hover { background: rgba(124,58,237,0.18); border-color: rgba(124,58,237,0.3); }

        /* ── Right section ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: flex-end;
        }

        /* Auth buttons */
        .nb-login {
          padding: 8px 18px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          color: rgba(255,255,255,0.7);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.22s ease;
          font-family: 'Inter', sans-serif;
        }
        .nb-login:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.22); color: #fff; }

        .nb-signup {
          padding: 8px 20px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 14px rgba(124,58,237,0.35);
          transition: all 0.25s ease;
          font-family: 'Inter', sans-serif;
        }
        .nb-signup:hover { transform: translateY(-1px); box-shadow: 0 4px 22px rgba(124,58,237,0.55); color: #fff; }

        /* User dropdown */
        .nb-user-wrap { position: relative; }
        .nb-user-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 5px 12px 5px 5px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.22s ease;
          font-family: 'Inter', sans-serif;
        }
        .nb-user-btn:hover { background: rgba(139,92,246,0.12); border-color: rgba(139,92,246,0.28); }
        .nb-user-btn.nb-user-open { background: rgba(139,92,246,0.15); border-color: rgba(139,92,246,0.32); }

        .nb-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.82rem; font-weight: 700; color: #fff;
          flex-shrink: 0;
          overflow: hidden;
          box-shadow: 0 0 0 2px rgba(124,58,237,0.3);
        }
        .nb-avatar img { width: 100%; height: 100%; object-fit: cover; }

        .nb-user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          max-width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .nb-user-chevron {
          font-size: 0.55rem;
          color: rgba(255,255,255,0.35);
          transition: transform 0.22s ease;
          margin-left: -2px;
        }
        .nb-user-btn.nb-user-open .nb-user-chevron { transform: rotate(180deg); color: rgba(255,255,255,0.6); }

        /* User dropdown panel */
        .nb-user-drop {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 220px;
          background: rgba(13,10,35,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
          animation: nbFadeInRight 0.18s ease;
          z-index: 200;
        }
        @keyframes nbFadeInRight {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-user-drop-header {
          padding: 12px 14px 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 6px;
        }
        .nb-udh-name { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .nb-udh-email { font-size: 0.75rem; color: rgba(255,255,255,0.35); }

        .nb-user-drop-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 10px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.18s ease;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: 'Inter', sans-serif;
        }
        .nb-user-drop-item:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .nb-user-drop-item.nb-drop-danger { color: rgba(248,113,113,0.75); }
        .nb-user-drop-item.nb-drop-danger:hover { background: rgba(239,68,68,0.08); color: #f87171; }
        .nb-udrop-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 6px 0; }
        .nb-udrop-icon { font-size: 1rem; opacity: 0.8; }

        /* ── Hamburger ── */
        .nb-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          cursor: pointer;
          padding: 8px 10px;
          transition: all 0.2s;
        }
        .nb-burger:hover { background: rgba(255,255,255,0.1); }
        .nb-burger span {
          width: 20px; height: 2px;
          background: rgba(255,255,255,0.75);
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nb-mobile-drawer {
          display: none;
          position: fixed;
          top: 68px; left: 0; right: 0;
          background: rgba(10,8,30,0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139,92,246,0.15);
          padding: 16px;
          flex-direction: column;
          gap: 6px;
          z-index: 999;
          max-height: calc(100vh - 68px);
          overflow-y: auto;
          animation: nbSlideDown 0.22s ease;
        }
        @keyframes nbSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mobile-drawer.open { display: flex; }

        .nb-m-link {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .nb-m-link:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .nb-m-link.nb-active { background: rgba(124,58,237,0.15); color: #c4b5fd; }

        .nb-m-section {
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 16px 4px;
        }
        .nb-m-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 6px 0; }
        .nb-m-courses {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .nb-m-auth {
          display: flex; flex-direction: column; gap: 8px;
          padding-top: 8px;
        }
        .nb-m-btn-primary {
          padding: 12px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: none; border-radius: 12px;
          color: #fff; font-weight: 700; font-size: 0.9rem;
          text-align: center; text-decoration: none;
          font-family: 'Inter', sans-serif;
        }
        .nb-m-btn-secondary {
          padding: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          color: rgba(255,255,255,0.7); font-weight: 500; font-size: 0.9rem;
          text-align: center; text-decoration: none;
          font-family: 'Inter', sans-serif;
        }
        .nb-m-logout {
          padding: 12px; border-radius: 12px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.18);
          color: #f87171; font-weight: 600; font-size: 0.9rem;
          cursor: pointer; font-family: 'Inter', sans-serif;
          width: 100%;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nb-inner { grid-template-columns: 1fr auto; }
          .nb-center { display: none; }
          .nb-right { display: none; }
          .nb-burger { display: flex; }
        }
      `}</style>

      <nav className={`nb-root${scrolled ? " nb-scrolled" : ""}`}>
        <div className="nb-inner">

          {/* Logo */}
          <Link to="/home" className="nb-logo">
            <img src={CompanyIcon} alt="Quicky" />
          </Link>

          {/* Center pill nav — desktop */}
          <ul className="nb-center">
            <li>
              <Link to="/features" className={`nb-link${isActive("/features") ? " nb-active" : ""}`}>
                Features
              </Link>
            </li>

            {/* Courses dropdown */}
            <li ref={coursesRef}>
              <button
                className={`nb-link${coursesOpen ? " nb-drop-open" : ""}`}
                onClick={() => setCoursesOpen(o => !o)}
                aria-haspopup="true"
                aria-expanded={coursesOpen}
              >
                Courses
                <span className="nb-arrow">▼</span>
              </button>
              {coursesOpen && (
                <div className="nb-dropdown">
                  {COURSES.map((c, i) => (
                    <Link key={i} to={c.path} className="nb-drop-item" onClick={() => setCoursesOpen(false)}>
                      <span className="nb-drop-icon">{c.icon}</span>
                      {c.label}
                    </Link>
                  ))}
                  <div className="nb-drop-divider" />
                  <Link to="/Explorepage" className="nb-drop-all" onClick={() => setCoursesOpen(false)}>
                    🧪 Explore All Projects →
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/Practice" className={`nb-link${isActive("/Practice") ? " nb-active" : ""}`}>
                Practice
                <span className="nb-badge">Hot</span>
              </Link>
            </li>

            <li>
              <Link to="/pricing" className={`nb-link${isActive("/pricing") ? " nb-active" : ""}`}>
                Pricing
              </Link>
            </li>

            <li>
              <Link to="/Support" className={`nb-link${isActive("/Support") ? " nb-active" : ""}`}>
                Support
              </Link>
            </li>
          </ul>

          {/* Right — desktop */}
          <div className="nb-right">
            {user ? (
              <div className="nb-user-wrap" ref={userRef}>
                <button
                  className={`nb-user-btn${userOpen ? " nb-user-open" : ""}`}
                  onClick={() => setUserOpen(o => !o)}
                >
                  <div className="nb-avatar">
                    {user.photoURL
                      ? <img src={user.photoURL} alt="avatar" />
                      : avatarLetter
                    }
                  </div>
                  <span className="nb-user-name">{displayName}</span>
                  <span className="nb-user-chevron">▼</span>
                </button>

                {userOpen && (
                  <div className="nb-user-drop">
                    <div className="nb-user-drop-header">
                      <div className="nb-udh-name">{displayName}</div>
                      <div className="nb-udh-email">{user.email}</div>
                    </div>
                    <Link to="/profile" className="nb-user-drop-item" onClick={() => setUserOpen(false)}>
                      <span className="nb-udrop-icon">👤</span> My Profile
                    </Link>
                    <Link to="/Practice" className="nb-user-drop-item" onClick={() => setUserOpen(false)}>
                      <span className="nb-udrop-icon">🧩</span> Practice Arena
                    </Link>
                    <Link to="/Study" className="nb-user-drop-item" onClick={() => setUserOpen(false)}>
                      <span className="nb-udrop-icon">📚</span> Study Plans
                    </Link>
                    <div className="nb-udrop-divider" />
                    <button className="nb-user-drop-item nb-drop-danger" onClick={() => { setUserOpen(false); handleLogout(); }}>
                      <span className="nb-udrop-icon">🚪</span> Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login"  className="nb-login">Log in</Link>
                <Link to="/signup" className="nb-signup">Get Started →</Link>
              </>
            )}
          </div>

          {/* Burger — mobile */}
          <button
            className={`nb-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nb-mobile-drawer${menuOpen ? " open" : ""}`}>
        <Link to="/features" className={`nb-m-link${isActive("/features") ? " nb-active" : ""}`}>⚡ Features</Link>
        <Link to="/Practice" className={`nb-m-link${isActive("/Practice") ? " nb-active" : ""}`}>🧩 Practice <span className="nb-badge" style={{marginLeft:4}}>Hot</span></Link>
        <Link to="/pricing"  className={`nb-m-link${isActive("/pricing")  ? " nb-active" : ""}`}>💎 Pricing</Link>
        <Link to="/Support"  className={`nb-m-link${isActive("/Support")  ? " nb-active" : ""}`}>💬 Support</Link>

        <div className="nb-m-divider" />
        <div className="nb-m-section">Courses</div>
        <div className="nb-m-courses">
          {COURSES.map((c, i) => (
            <Link key={i} to={c.path} className="nb-m-link" style={{ padding: "10px 14px", fontSize: "0.82rem" }}>
              {c.icon} {c.label}
            </Link>
          ))}
        </div>

        <div className="nb-m-divider" />
        {user ? (
          <>
            <Link to="/profile" className="nb-m-link">👤 My Profile</Link>
            <Link to="/Study"   className="nb-m-link">📚 Study Plans</Link>
            <button className="nb-m-logout" onClick={handleLogout}>🚪 Log Out</button>
          </>
        ) : (
          <div className="nb-m-auth">
            <Link to="/login"  className="nb-m-btn-secondary">Log in</Link>
            <Link to="/signup" className="nb-m-btn-primary">Get Started →</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
