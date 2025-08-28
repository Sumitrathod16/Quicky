import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is the primary purpose of React?",
    options: ["Server-side rendering", "To build user interfaces", "To manage databases", "To style web pages"],
    answer: 1,
  },
  {
    question: "What is JSX in React?",
    options: ["A Javascript library", "A CSS framework", "Javascript XML", "A data storage method"],
    answer: 2,
  },
  {
    question: "Which method is used to update the state in a React class component?",
    options: ["this.updateState()", "this.setState()", "this.changeState()", "this.modifyState()"],
    answer: 1,
  },
   {
    question: "What is the default port of running a React application locally?",
    options: ["3000", "8080", "5000", "4200"],
    answer: 0,
  },
   {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useReducer", "useState", "useRef"],
    answer: 2,
  },
   {
    question: "What does the useEffect hook do in React?",
    options: ["Handles form submissions", "Adds routing to components", "Manages side effects like API calls", "Initializes State"],
    answer: 2,
  },
   {
    question: "What is a key prop used for in lists in React?",
    options: ["To style each item", "To sort the list", "To uniquely identify elements", "To fetch data"],
    answer: 2,
  },
   {
    question: "Which of the following is true about components in React?",
    options: ["Components must be defined only using classes", "Components can only render strings", "Components can be either class-based or function-based", "Components must always include CSS"],
    answer: 2,
  },
   {
    question: "What tool is used to create a new React application?",
    options: ["ReactTool", "CreateReactApp", "ReactStarter", "Webpack"],
    answer: 1,
  },
   {
    question: "How can you pass data from a parent to a child component in React?",
    options: ["Using Redux", "Using Context", "Using Props", "Using Hooks"],
    answer: 1,
  },
];

const Reactassign = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(120);

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

export default Reactassign;
