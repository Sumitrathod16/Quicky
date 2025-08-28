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
  flex-wrap: wrap; /* Allow wrapping */
  justify-content: space-evenly;
  padding: 20px;
  background-color: black;
  color: white;
  width: 100%;
}

.footer-container1 {
  display: flex;
  flex-direction: column; /* Stack inside each column */
  align-items: flex-start;
  margin: 15px;
  min-width: 150px; /* Prevent too small on large screens */
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
  color: white;
  text-decoration: none;
}

.Footer ul li a:hover {
  text-decoration: underline;
  color: #ccc;
}

.Box1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 15px;
  border: 2px solid white;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 200px;
}

/* -------- RESPONSIVE DESIGN -------- */
@media (max-width: 768px) {
  .Footer {
    flex-direction: column; /* Stack everything */
    align-items: center;
    text-align: center;
    height: auto;
  }

  .footer-container1 {
    margin: 10px 0;
    align-items: center;
  }

  .Box1 {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .Footer h3 {
    font-size: 1rem;
  }

  .Footer ul li {
    font-size: 0.9rem;
  }
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
