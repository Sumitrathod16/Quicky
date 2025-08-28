import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "print(type([1,2,3]))",
    options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    answer: 0,
  },
  {
    question: "Which of the following is not a valid python data type?",
    options: ["list", "tuple", "array", "dictionary"],
    answer: 2,
  },
  {
    question: "What will be the result of 3*'7' in python?",
    options: ["21", "777", "Error", "'21'"],
    answer: 1,
  },
   {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "lambda"],
    answer: 1,
  },
   {
    question: "What is the output of the following code?x=[1,2,3] print(x[-1])",
    options: ["1","2", "3", "Error"],
    answer: 2,
  },
   {
    question: "Which of the following is used to handlle exceptions in Python?",
    options: ["try-except", "catch", "do-catch", "try-catch"],
    answer: 0,
  },
   {
    question: "What is the output of bool([]) in python?",
    options: ["True", "False", "[]","Error"],
    answer: 1,
  },
   {
    question: "Which of the following is the correct syntax to import a module in Python?",
    options: ["import module_name()","inclue module_name","Using module_name","import module_name"],
    answer: 3,
  },
   {
    question: "What does the len() function do in Python?",
    options: ["Return the size of an integer","Returns the number of arguments","Returns the length of an object","Measures memory size"],
    answer: 2,
  },
  {
    question: "What will be the output? x={1,2,3} x.add(2) print(x)",
    options: ["{1,2,3,2}", "{1,2,3}", "{2,3}", "Error"],
    answer: 1,
  },
  
];

const Pyassign = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
  if (secondsLeft <= 0) return;
  const timer = setInterval(() => setSecondsLeft(s => s - 1), 1000);
  return () => clearInterval(timer);
}, [secondsLeft]);

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

  const handleSubmit = () => {
    setIsSubmitted(true);
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
        <button onClick={handlePrevious} disabled={currentQuestion === 0} className="prev-btn">
          ← Previous Question
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questionsData.length - 1} className="next-btn">
          Next Question →
        </button>
        <button onClick={handleSubmit} className="submit-btn">
          Submit Assignment
        </button>
      </div>
    </div>
    </>
  );
};

export default Pyassign;
