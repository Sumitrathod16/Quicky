import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What does css stands for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
    answer: 1,
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<css>","<script>", "<link>"],
    answer: 3,
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: ["At the end of the document", "In the <body> section", "In the <head> section", "Anywhere"],
    answer: 2,
  },
   {
    question: "Which is the correct  CSS syntax?",
    options: ["{body;color:black", "body:color=black", "body{color:black}", "body=color:black"],
    answer: 2,
  },
   {
    question: "How do you insert a comment in a CSS file?",
    options: ["// this is a comment", "/*this is a comment*/", "<--this is a comment-->", "**this is a comment**"],
    answer: 1,
  },
   {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: 2,
  },
   {
    question: "How do you make all <p> elements bold using CSS?",
    options: ["p{text-style:bold", "p{font-weight:bold}", "p{font:bold}", "p{style:bold}"],
    answer: 1,
  },
   {
    question: "Which CSS property controls the text-size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: 2,
  },
   {
    question: "How do you select an element with the ID 'header'?",
    options: [".header", "#header", "header", "*header"],
    answer: 1,
  },
  {
    question: "What is the default position value of an HTML element in CSS?",
    options: ["absolute", "fixed", "static", "relative"],
    answer: 1,
  },
];

function Timer({ initialMinutes = 10 }) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);
  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  return (
    <span style={{ fontWeight: 'bold', color: '#ff9800' }}>
      {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
    </span>
  );
}

const Cssassign = () => {
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
          <span>⏱️ Remaining</span> | <Timer initialMinutes={10} />
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

export default Cssassign;
