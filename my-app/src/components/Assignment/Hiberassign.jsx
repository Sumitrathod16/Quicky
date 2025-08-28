import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "Hibernate ORM stands for?",
    options: ["Class relational Mapping", "Class Object Mapping", "Object Relational Mapping", "None of the above"],
    answer: 2,
  },
  {
    question: "Which of the following is not a core interface of Hibernate?",
    options: ["Configuration", "Criteria", "SessionManagement", "Session"],
    answer: 2,
  },
  {
    question: "SessionFactory is a thread-safe object?",
    options: ["True","False"],
    answer: 0,
  },
   {
    question: "Which method returns a proxy object in Hibernate?",
    options: ["loadDatabase()", "getDatabase()", "load()", "get()"],
    answer: 2,
  },
   {
    question: "Which method always hits the database?",
    options: ["load()", "get()", "loadDatabase()", "getDatabase()"],
    answer: 1,
  },
   {
    question: "What annotation is used to define a composite primary key in Hibernate?",
    options: ["@ManyToMany", "@OneToMany", "@Embeddedid", "@idclass"],
    answer: 2,
  },
   {
    question: "Which annotation marks a composite primary key?",
    options: ["@Entity", "@id", "@GenerativeValue", "@Embeddedid"],
    answer: 3,
  },
   {
    question: "Hibernate uses two levels of cache by default?",
    options: ["True", "False-only first-level cache is enabled by default", "Second-level cache is enabled by default", "Caching is not supported"],
    answer: 1,
  },
   {
    question: "Which property is Hibernate config specifies the batch size?",
    options: ["hibenate.jdbc.batch_size", "hibernate.batch.size", "hibernate.jdbc.batch", "hibernate.batch_size"],
    answer: 0,
  },
  {
    question: "Which annotation optimizes updates by including only modified columns?",
    options: ["@DynamicInsert", "@DynamicUpdate", "@UpdateSelective", "@OptimisticUpdate"],
    answer: 1,
  },
];

const Hiberassign = () => {
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

export default Hiberassign;
