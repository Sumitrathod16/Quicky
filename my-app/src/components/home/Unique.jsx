import React from 'react';
import Code from '../../assets/code.svg';
import User from '../../assets/user.svg';
import Update from '../../assets/update.svg';
function Unique() {
    return (
        <>
        <style>
            {`
            .unique {
                width: 100%;    
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f9f9f9;
            }
.unique-container {
                display: flex;     
                flex-direction: column ;
                text-align: center;
                justify-content: center;
                align-items: center;    
                height: 300px;
                background-color: #f9f9f9;
            }
                .unique-icon{
                width:50px;
                height:50px;
                border-radius:50%;
                box-shadow:0 2px 2px rgba(0,0,0,0.2);
                transition:transform:0.5s;
                }
                .unique-icon:hover{
                transform: scale(1.1);
                }
            
.unique-container .number {
                font-family: Irish Grover;
                font-size: 6rem;
                color: black;
                font-weight: bold;
                margin-bottom: 120px;
            }
                .unique-title {
                font-size: 3rem;
                color: black;
                font-weight: bold;
                text-align: center;
                margin-top: -120px;
            }
 .unique-desc { 
                font-size: 0.9rem;
                color: black;
                text-align: center;
                margin-top: 20px;
                max-width: 600px;
            }
                .unique-list{
                display: flex;
                gap:30px;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                
                }
                .unique-list .p{
                font-size:0.9rem
                font-weight:bold;
                color: black;
                }
`}
        </style>
        <div className="unique">
        <div className="unique-container">
            <h1 className="number">03+</h1>
            <h2 className="unique-title">Pre-Built Unique Projects</h2>
            <p className="unique-desc">Choose from stunning hero sections including video background,image cover,and main layout,
                all designed for maximum impact and flexibility.</p>
                <div className="unique-list">
                    <img src={Code} className="unique-icon" alt="Code Icon" /> <p>Well organized code</p>
                    <img src={User} className="unique-icon" alt="User Icon" /><p>User-friendly</p>
                    <img src={Update} className="unique-icon" alt="Update Icon" /><p></p>
                </div>

        </div>
        </div>
        </>
    );
}
export default Unique;