import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What type of database is MongoDB?",
    options: ["Relational", "Document-oriented", "Graph-based", "Key-value"],
    answer: 1,
  },
  {
    question: "Which format does MongoDB use to store data?",
    options: ["Tables", "Document(BSON)", "key-value pairs", "CSV"],
    answer: 1,
  },
  {
    question: "Which command is used to insert a document into a MongoDB collection?",
    options: ["db.collection.insert()", "db.insert()", "db.add()", "db.collection.add()"],
    answer: 0,
  },
   {
    question: "What is the default port for MongoDB?",
    options: ["8080", "3306", "27017", "1521"],
    answer: 3,
  },
   {
    question: "What is collection in MongoDB?",
    options: ["A table-like structure that holds documents", "A group of databases", "A single field", "A backup file"],
    answer: 0,
  },
   {
    question: "Which data format does MongoDB use internally to represent documents?",
    options: ["JSON", "XML", "BSON", "CSV"],
    answer: 2,
  },
   {
    question: "What is the purpose of the _id field in MongoDB?",
    options: ["It stores user credentials", "It uniquely ientifies each document", "It defines the schema", "It represents the document size"],
    answer: 1,
  },
   {
    question: "How do you retrieve all documents from a collection in MongoDB?",
    options: ["db.collection.findOne()", "db.collection.retriveAll()", "db.collection.get()", "db.collection.find()"],
    answer: 3,
  },
   {
    question: "Which of the following is not a valid MongoDB data type?",
    options: ["String", "Integer", "Float", "DateTimePicker"],
    answer: 3,
  },
   {
    question: "What is MongoDB Atlas?",
    options: ["A data visualization tool","An on-premise MongoDB GUI", "A cloud-based MongoDB database service", "Webpack"],
    answer: 2,
  },
];

const Mongodbassign = () => {
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

export default Mongodbassign;
