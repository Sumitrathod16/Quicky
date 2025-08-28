import React from 'react';
function Press() {
  return (
    <>
      <style>   
        {`
        .press-container {
            max-width: 900px;
            margin: 50px auto;
            padding: 30px;
            background-color: #f9f9f9;
            border-radius: 10px;        
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
        }
        .press-container h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        .press-container p {
            color: black;
            margin-bottom: 20px;
        }
        .press-container ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 20px;
        }
        .press-container ul li {
            margin-bottom: 10px;
        }   
        .press-container strong {
            color: #222;
        }
        .press-container em {
            color: #666;
        }
        .press-container a {
            color: #007bff;
            text-decoration: none;
        }
         .press-container {
         border: 5px solid #007bff; /* initial border */
         animation: borderColorChange 6s linear infinite;
        }

   @keyframes borderColorChange {
    0% {
        border-color: #007bff; /* blue */
       }
    25% {
         border-color: #6fb7eaff; /* green */
        }
    50% {
          border-color: #a5dcfaff; /* yellow */
        }
     75% {
          border-color: #c8e0ebff; /* red */
        }
    100% {
          border-color: #007bff; /* back to blue */
        }
   }
   
        `}
        </style>
        <div className="press-container">
            <h1>Press Release</h1>
            <p><strong>DEMO</strong> is excited to announce the launch of our new web application, designed to revolutionize the way developers learn and practice coding skills.</p>
            <p>Our mission is to provide an interactive, hands-on learning experience that bridges the gap between theory and real-world application.</p>
            <h2>Key Features:</h2>
            <ul>
                <li><strong>Interactive Lessons:</strong> Engage with paired challenges that enhance learning.</li>
                <li><strong>Progress Tracking:</strong> Monitor your achievements and growth.</li>
                <li><strong>Real-Time Code Editor:</strong> Practice coding directly in your browser.</li>
                <li><strong>Project-Based Learning:</strong> Build real-world applications for your portfolio.</li>
                <li><strong>Community Support:</strong> Connect with fellow learners and developers.</li>
            </ul>
            <p>For more information, visit our website or contact us through our contact page or just by our community email</p>
            <p>Join us in this exciting journey to empower developers worldwide!</p>
        </div>
    </>
  );
}
export default Press;
 
