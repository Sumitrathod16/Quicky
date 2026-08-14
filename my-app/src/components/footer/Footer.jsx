import React from "react";
import { Link } from 'react-router-dom';
function Footer()
{
    return (
        <>
        <style>
            {`
            .Footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 32px 20px;
  background-color: #ffffff;
  color: #374151;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.footer-container1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
  min-width: 150px;
}

.Footer h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1e1b4b;
  margin-bottom: 12px;
}

.Footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.Footer ul li {
  margin: 8px 0;
}

.Footer ul li a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.Footer ul li a:hover {
  color: #4f46e5;
}

.Box1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 14px 20px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 12px;
  color: #374151;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-width: 200px;
  transition: all 0.2s ease;
}

.Box1:hover {
  border-color: rgba(79,70,229,0.25);
  background: #f0f4ff;
  color: #4f46e5;
}

.Box1 h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: inherit;
  margin: 0;
}

@media (max-width: 768px) {
  .Footer { flex-direction: column; align-items: center; text-align: center; height: auto; }
  .footer-container1 { margin: 10px 0; align-items: center; }
  .Box1 { width: 90%; }
}

@media (max-width: 480px) {
  .Footer h3 { font-size: 1rem; }
  .Footer ul li { font-size: 0.9rem; }
}
            `}
        </style>
        <div className="Footer">
           <div className="footer-container1">
                <ul>
                    <h3>Company</h3>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Careers">Careers</Link></li>
                    <li><Link to="/Press">Press</Link></li>
                    <li><Link to="/Affiliates">Affilates</Link></li>
                </ul>
            </div>
            <div className="footer-container1">
                <ul>
                    <h3>Resources</h3>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Study">Study </Link></li>      
                    <li><Link to="/Practice">Practice</Link></li>
                    
                </ul>
             </div>
            <div className="footer-container1">
            <ul>
                <h3>Supports</h3>
                 <li><Link to ="/FAQ">FAQ</Link></li>  
            </ul>    
            </div>   
            <div className="footer-container1">
                <ul>
                    <h3>Legal</h3>
                    <li><Link to="/Privacy">Privacy Policy</Link></li>
                    <li><Link to="/Terms">Terms of Service</Link></li>
                    <li><Link to="/Cookie">Cookie Policy</Link></li>
                </ul>
            </div>
            <div className="Box1">
                <h3>Contact Us</h3>
             </div>
             <div className="Box1">
                <h3>shopifyus@gmail.com</h3>
             </div>
          </div>   
        </>
    );
}
export default Footer;
