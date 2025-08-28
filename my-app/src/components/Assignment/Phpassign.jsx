import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What does PHP stand for?",
    options: ["Personal Home Page", "PHP Hypertext Preprocessor", "Private Home Page", "Public Home Page"],
    answer: 1,
  },
  {
    question: " Which symbol is used to declare a variable in PHP?",
    options:["@","#","$","%"],
    answer: 2,
  },
  {
    question: 'Which of the following is the correct way to start a PHP block?',
    options: ["<?php", "<?php code?>", "<php>", "<?php...?> "],
    answer: 3,
  },
   {
    question:  "What will this code output $a=5; $b='5'; echo($a=$b)? ",
    options: ["0",'1',"5","5.0"],
    answer: 1,
  },
   {
    question: "What is the correct way to write a comment in PHP?",
    options: ["// This is a comment", "/* This is a comment */", "# This is a comment","All of the above"],
    answer: 3,
  },
   {
    question: "Which function is used to get the length of a string in PHP?",
    options: ["strlen()", "str_length()", "length()", "strLen()"],
    answer: 0,
  },
   {
    question: "Which of the following is a superglobal variable in PHP?",
    options: ["$_GET", "$_POST", "$_SESSION", "All of the above"],
    answer: 3,
  },
   {
    question: "How do you define a constant in PHP?",
    options: [ "define('CONSTANT_NAME', 'value')", "const CONSTANT_NAME = 'value'", "constant('CONSTANT_NAME', 'value')", "Both A and B"],
    answer: 3,
  },
   {
    question: "Which PHP function is used to include and execute a file only once?",
    options: ["include_once", "require_once", "include", "require"],
    answer: 1,
  },
  {
    question: " What will isset($var) return if $var is declared but set to null?",
    options: ["true", "false", "null", "undefined"],
    answer: 1,
  },
];

const Phpassign = () => {
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

export default Phpassign;
