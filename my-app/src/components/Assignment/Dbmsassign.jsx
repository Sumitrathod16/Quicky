import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "Which of the following is NOT a type of database Model?",
    options: ["Hierarchical Model","Network Model","Relational Model","Programming Model"],
    answer: 3,
  },
  {
    question: "Which language is used to define the structure of a database?",
    options: ["DML","DDL","DCL","TCL"],
    answer: 1,
  },
  {
    question: 'In a relational database, a tuple represents:',
    options: ["A row","A column", "A table", "A schema"],
    answer: 0,
  },
   {
    question:  "Which of the following is a valid property of transactions in DBMS?",
    options: ["ACID","BASE", "BLOB", "SQL"],
    answer: 0,
  },
   {
    question: "Which normal form eliminates transitive dependency?",
    options: ["1NF","2NF","3NF","BCNF"],
    answer: 2,
  },
   {
    question: "What does the SQL command ROLLBACK do?",
    options: ["Saves the changes permanently", "Undoes the last transaction", "Deletes a table", "Grants user privileges"],
    answer: 1,
  },
   {
    question: "Which of the following is non-procedural language?",
    options: ["C","Java","SQL","Pascal"],
    answer: 2,
  },
   {
    question: "The primary key in a table?",
    options: ["Can have duplicate values", "Can be NULL","Must be unique and not NULL", "Must always be numeric"],
    answer: 2,
  },
   {
    question: "Which of the following is used to ensure data integrity in DBMS?",
    options: ["Keys and Constraints", "Triggers", "Views", "Indexes"],
    answer: 0,
  },
  {
    question: " Which type of join returns all records from both tables , matching rows where available?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: 3,
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

const Dbmsassign = () => {
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

export default Dbmsassign;
