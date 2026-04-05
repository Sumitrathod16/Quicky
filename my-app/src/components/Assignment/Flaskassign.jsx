import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/useAuth';
import { submitAssignment } from '../../services/userService';
import './Assign.css';
const questionsData = [
  {
    question: "What is Flask?",
    options: ["A front-end framework","A full-stack web framework","A micro web framework for python","A content management system"],
    answer: 2,
  },
  {
    question: "Which of the following commands is used to run a flask app?",
    options: ["Python app.py", "flask run", "flask-start", "Both A and B"],
    answer: 3,
  },
  {
    question: "What is the default poort for a flask app?",
    options: ["3000", "8000", "5000", "8080"],
    answer: 2,
  },
   {
    question: "What does the @app.route() operator do in Flask?",
    options: ["Registers a database","Defines a route URL for a view function", "Creates a new blueprint", "Renders a template"],
    answer: 1,
  },
   {
    question: "Which function is used to return HTML templates in Flask?",
    options: ["render_html()", "return_template()","render_template()", "template()"],
    answer: 2,
  },
   {
    question: "Which file is commonly used to define routes and view functions in a Flask app?",
    options: ["routes.txt", "app.py", "main.html", "config.py"],
    answer: 1,
  },
   {
    question: "What type of web server does flask use by default?",
    options: ["Apache", "Gunicorn", "Flask's built-in development server", "Nginx"],
    answer: 2,
  },
   {
    question: "What is Flask-SQLAlchemy?",
    options: ["A tool for managing HTML forms", "A templating engine", "An ORM for integrating SQL databases with flask", "A logging library"],
    answer: 2,
  },
   {
    question: "Which method is used to handle HTTP POST data in Flask?",
    options: ["request.args", "request.data", "request.json", "request.form"],
    answer: 3,
  },
  {
    question: "What is the purpose of debug=True in app.run(debug=True?",
    options: ["Boosts Performance", "Disables error logs", "Enables detailed error pages and auto-reloading", "Runs the app in production mode"],
    answer: 2,
  },
  
];

const Mlassign = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const score = calculateScore();
    const grade = score >= 9 ? 'A+' : score >= 8 ? 'A' : score >= 6 ? 'B' : score >= 4 ? 'C' : 'F';
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    if (user?.uid) {
      submitAssignment(user.uid, {
        name: 'FLASK Basics Assignment',
        courseId: 'flask',
        score: score,
        total: questionsData.length,
        grade: grade,
        status: 'completed'
      }).catch(err => console.error("Failed to sync score:", err));
    }
  };

  const calculateScore = () => {
    let score = 0;
    questionsData.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        score++;
      }
    });
    return score;
  };

  const current = questionsData[currentQuestion];

  return (
    <>
   
    <div className="assignment-container">
      <div className="assignment-header">
        <h3>Assignment 1:</h3>
        <h1>Related Topics Review</h1>
        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${((currentQuestion + 1) / questionsData.length) * 100}%` }}
          ></div>
        </div>
        <div className="timer">
          <span>⏱️ Remaining</span> | <span>20 min</span>
        </div>
      </div>

      <div className="question-section">
        <div className="question-box">
          <h4>Question {currentQuestion + 1} of {questionsData.length}</h4>
          <p className="question-text">{current.question}</p>
          <div className="options">
            {current.options.map((option, index) => (
              <label
                key={index}
                className={`option-label ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
                onClick={() => handleOptionClick(index)}
              >
                <span>{String.fromCharCode(65 + index)}</span> {option}
              </label>
            ))}
          </div>
        </div>

        <div className="score-box">
          <p>Total {questionsData.length} Questions</p>
          <p>{Object.keys(selectedAnswers).length} Attempted</p>
          <hr />
          <p>Score</p>
          <input
            type="text"
            readOnly
            value={isSubmitted ? calculateScore() : ""}
          />
        </div>
      </div>

      <div className="button-group">
        <button onClick={handlePrevious} disabled={currentQuestion === 0 || isSubmitted} className="prev-btn">
          ← Previous Question
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questionsData.length - 1 || isSubmitted} className="next-btn">
          Next Question →
        </button>
        <button onClick={handleSubmit} disabled={isSubmitted || isSubmitting} className="submit-btn">
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Submit Assignment'}
        </button>
      </div>
    </div>
    </>
  );
};

export default Mlassign;
