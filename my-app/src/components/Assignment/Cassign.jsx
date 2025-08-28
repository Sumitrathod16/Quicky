import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is the correct syntax to declare a pointer in C?",
    options: ["int p","int *p","int &p","pointer int p"],
    answer: 1,
  },
  {
    question: " Which of the following is the correct operator to compare two values?",
    options: ["==", "=", "===", "!="],
    answer: 0,
  },
  {
    question: 'int a=5; printf("%d",a++)?',
    options: ["5", "6", "Compilation Error", "Runtime Error"],
    answer: 0,
  },
   {
    question:  "Which function is used to read a formatted input in C?",
    options: ["printf()", "scanf()", "gets()", "puts()"],
    answer: 1,
  },
   {
    question: "What is the size of int typically in a 32-bit system?",
    options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    answer: 1,
  },
   {
    question: "Which of the following is not valid C storage class?",
    options: ["auto", "register", "static", "mutable"],
    answer: 3,
  },
   {
    question: "Which loop will execute at least once, even if the condition is false initially?",
    options: ["for", "while", "do-while", "None of the above"],
    answer: 2,
  },
   {
    question: "What is a correct way to declare a multi-dimensional array in C?",
    options: [ "int arr[10][20]", "int arr[10,20]", "int arr(10)(20)", "int arr{10,20}"],
    answer: 0,
  },
   {
    question: "Which header file is required for using malloc() function?",
    options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
    answer: 0,
  },
  {
    question: " Which of the following functions is used to find the length of a string in C?",
    options: ["strcpy()", "strlen()", "strcat()", "strcmp()"],
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

const Cassign = () => {
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

export default Cassign;
