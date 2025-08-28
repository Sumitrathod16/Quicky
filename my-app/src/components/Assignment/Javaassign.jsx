import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "Who invented Java programming?",
    options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: 1,
  },
  {
    question: "Which statement is true about Java?",
    options: ["Sequence-dependent language", "Code-dependent language", "Platform-dependent", "Platform-independent"],
    answer: 3,
  },
  {
    question: "Which component is used to compile, debug, and execute Java programs?",
    options: ["JRE", "JIT", "JDK", "JVM"],
    answer: 2,
  },
   {
    question: "Which of these cannot be used as a variable name in Java?",
    options: ["Identifier & Keyword", "Identifier", "Keyword", "None of the mentioned"],
    answer: 2,
  },
   {
    question: "Which of these is not a Java feature?",
    options: ["Object-oriented", "Use of pointer", "Portable","Dynamic and extensible"],
    answer: 1,
  },
   {
    question: "Which of these is not a feature of Java?",
    options: ["Object-oriented", "Platform-independent", "Compiled", "Intepreted language"],
    answer: 2,
  },
   {
    question: "Which component is responsible for running compiled Java bytecode?",
    options: ["JDK", "JVM", "JRE", "JIT"],
    answer: 1,
  },
   {
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    answer: 1,
  },
   {
    question: "What is the result of casting (int)(7.9)?",
    options: ["7", "7.9", "8", "Syntax Error"],
    answer: 0,
  },
  {
    questio:"Which keyword is used to define a constant variable in Java?",
    options: ["Final", "Static", "Const", "immutable"],
    answer: 0,
  },
];

const Javaassign = () => {
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

export default Javaassign;
