import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/useAuth';
import { submitAssignment } from '../../services/userService';
import './Assign.css';
const questionsData = [
  {
    question: "What is Node js?",
    options: ["A javascript library for front-end development", "A framework for building mobile apps", "A runtime environment to run Javascript on the server", "A database engine"],
    answer: 2,
  },
  {
    question:"Which engine does Node.js use to execute Javascript code?",
    options: ["SpiderMonkey", "Chakra", "JavaScriptCore", "V8"],
    answer: 3,
  },
  {
    question: "Which of the following is used to import modules in Node.js(CommonJs syntax)?",
    options: ["import module from 'module'", "include('module')", "require('module')", "load('module')"],
    answer: 2,
  },
   {
    question: "Which built-in module in Node.js used to handle file system operations?",
    options: ["fs", "file", "http", "os"],
    answer: 2,
  },
   {
    question: "Which method is used to create a server in Node.js?",
    options: ["http.makeServer()", "http.startServer()", "http.createServer()", "server.create()"],
    answer: 2,
  },
   {
    question: "What does npm stands for?",
    options: ["Node process Manager", "Node Package Manager", "New Package Manager", "Network Package Manager"],
    answer: 1,
  },
   {
    question: "Which of the following is not a core module in Node.js?",
    options: ["events", "http", "express", "path"],
    answer: 2,
  },
   {
    question: "How do you handle asynchronous operations in Node.js?",
    options: ["Threads", "Promises", "Events", "Both B and C"],
    answer: 3,
  },
   {
    question: "Which keyword is used to define an asyncronous function in Node.js?",
    options: ["async", "await", "promise", "defer"],
    answer: 0,
  },
  {
    question: "What is the default file name for a Node.js package definition?",
    options: ["node.json", "package.js", "npm.json", "package.json"],
    answer: 3,
  },
];

const Nodeassign = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    if (secondsLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, isSubmitted]);

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
        name: 'NODE Basics Assignment',
        courseId: 'node',
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
          <span>⏱️ Remaining</span> | <span>{Math.floor(secondsLeft / 60)}:{('0' + secondsLeft % 60).slice(-2)}</span>
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

export default Nodeassign;
