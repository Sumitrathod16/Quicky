import React, { useState } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is Javascript primarily used for?",
    options: ["Stylling web pages", "Structuring web pages", "Making web pages interactive", "Database Management"],
    answer: 2,
  },
  {
    question: "Which of the following is the correct syntax to declare a Javascript variable?",
    options: ["variable x=10;", "v x=10;", "var x= 10;", "dim x=10;"],
    answer: 2,
  },
  {
    question: "Inside which HTML element do we put the Javascript code?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: 0,
  },
   {
    question: "What will typeof 'Hello' return in Javascript?",
    options: ["String", "text", "object", "character"],
    answer: 0,
  },
   {
    question: "How do you write a comment in Javascript?",
    options: ["<!--comment-->", "/*comment*/", "#comment", "//comment"],
    answer: 3,
  },
   {
    question: "Which operator is used to assign a value to variable ?",
    options: ["==", "=", "===", ":="],
    answer: 1,
  },
   {
    question: "How do you write function in Javascript?",
    options: ["function=myFunc()", "function:myfunc() ", "function myFunc()", "func myFunc()"],
    answer: 2,
  },
   {
    question: "How do you call a function named myFunction?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"],
    answer: 1,
  },
   {
    question: "What does the == operator do in Javascript?",
    options: ["Compares values only", "Assign a value", "Compares a value and type", "Checks if variable exists"],
    answer: 2,
  },
  {
    question: "Which method can be used to select an element by its ID in Javascript?",
    options: ["getElement('id'),", "getElementByID()", "getElementById()", "querySelectorId()"],
    answer: 2,
  },
];

const Jsassign = () => {
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

export default Jsassign;
