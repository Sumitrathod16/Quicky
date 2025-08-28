import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "Which sql command is used to remove all records from a table without removing the table structure?",
    options: ["DROP","DELETE", "TRUNCATE", "ALTER"],
    answer: 0,
  },
  {
    question: "Which of the following is the correct order of SQL statements execution in a SELECT query?",
    options: ["FROM → WHERE → SELECT → ORDER BY","SELECT → WHERE → ORDER BY → FROM","WHERE → FROM → SELECT → ORDER BY","ORDER BY → SELECT → FROM → WHERE"],
    answer: 0,
  },
  {
    question: "Which SQL clause is used to group rows that have the same values?",
    options: ["GROUP BY","ORDER BY","HAVING","DISTINCT"],
    answer: 0,
  },
   {
    question: "What does the HAVING clause do in SQL?",
    options: ["Filters rows before grouping", "Filters groups after grouping", "Renames columns", "Joins tables"],
    answer: 1,
  },
   {
    question: "Which of the following is not a valid SQL constraint?",
    options: ["PRIMARY KEY","FOREIGN KEY", "UNIQUE", "RENAME"],
    answer: 3,
  },
   {
    question: "What will SELECT COUNT(*) FROM students; return?",
    options: ["Number of rows","Number of columns","Number of NULL values","Number of unique values"],
    answer: 0,
  },
   {
    question: "Which SQL statement is used to retrieve unique values from a column?",
    options: ["UNIQUE","DISTINCT","PRIMARY KEY", "DIFFERENT"],
    answer: 1,
  },
   {
    question: "Which type of join returns only the rows that have matching values in both tables?",
    options: ["LEFT JOIN","RIGHT JOIN","INNER JOIN","FULL JOIN"],
    answer: 2,
  },
   {
    question: "Which command is used to change the structure of a table (e.g., add column)?",
    options: ["MODIFY","UPDATE","ALTER","CHANGE"],
    answer: 2,
  },
  {
    question: "What will happen if you run DELETE FROM employees; without a WHERE clause?",
    options: ["Deletes one row only","Deletes all rows from the table","Throws an error","Deletes the table"],
    answer: 1,
  },
  
];

const Sqlassign = () => {
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

export default Sqlassign;
