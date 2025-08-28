import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "Which of the following is the correct way to declare a class in C++?",
    options: ["class MyClass {}", "class MyClass[]", "MyClass class {}", "MyClass()"],
    answer: 0,
  },
  {
    question: "What will be the output int a=10; cout<<++a;?",
    options: ["10", "11", "Compilation Error", "Runtime Error"],
    answer: 1,
  },
  {
    question: 'Which header file is used for cin and cout in C++?',
    options: ["iostream.h", "iostream", "stdio.h", "cinout.h"],
    answer: 0,
  },
   {
    question:  "Which of the following is not a basic data type in C++?",
    options: ["int", "float", "string", "char"],
    answer: 2,
  },
   {
    question: "How do you declare a pointer in C++?",
    options: ["int *ptr", "int ptr*", "int &ptr", "int ptr[]"],
    answer: 0,
  },
   {
    question: "What is the default access modifier for members of a class in C++?",
    options: ["public", "private", "protected", "none of the above"],
    answer: 1,
  },
   {
    question: "Which OOP concept allows defining multiple functions with the same name but different parameters?",
    options: ["Abstraction", "Overriding", "Encapsulation", "Overloading"],
    answer: 3,
  },
   {
    question:'What will be the output int x=5; int y=++x; cout<<x<<" "<<y;?',
    options: [ "5 5", "6 5", "6 6", "5 6"],
    answer: 1,
  },
   {
    question: "Which of the following is used to create objects in C++?",
    options: ["new", "create", "malloc", "object"],
    answer: 0,
  },
  {
    question: "What is a constructor in C++?",
    options: ["A special function to initialize objects", "A function to destroy objects", "A function to copy objects", "A function to overload operators"],
    answer: 0,
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

const Cppassign = () => {
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

export default Cppassign;
