import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is the main purpose of the Spring Framework?",
    options: ["To provide a programming model for Javascript applications", "To manage application dependencies via inversion of control", "To offer a web server out of the box", "To simplify Javascript-based web development"],
    answer: 1,
  },
  {
    question: "Which annotation indeicates a Spring-managed bean?",
    options: ["@Component", "@Bean", "@Service", "All of the above"],
    answer: 3,
  },
  {
    question: "What is dependency injection in Spring?",
    options: ["A way to manage object creation", "A design pattern for loose coupling", "Both A and B", "Creating objects manually within classes"],
    answer: 2,
  },
   {
    question: "Which of the following is not a valid Spring bean scope?",
    options: ["Singleton", "Prototype", "Session", "View"],
    answer: 3,
  },
   {
    question: "What is the default scope of a Spring bean?",
    options: ["Prototype", "Singleton", "Request", "Session"],
    answer: 1,
  },
   {
    question: "Which annotation is used for automatic dependency injection?",
    options: ["@inject", "@Autowired", "@Resource", "@Qualifier"],
    answer: 1,
  },
   {
    question: "Which annotation defines a configuration class?",
    options: ["@Component", "@Service", "@Configuration", "@Repository"],
    answer: 2,
  },
   {
    question: "What is the purpose of @Transaction?",
    options: ["Marks a method for aspect iterception", "Manages transactions in Spring", "Defines bean creation policy", "Indicates a data access object"],
    answer: 1,
  },
   {
    question: "In spring MVC, what does DispatcherServlet do?",
    options: ["Acts as the front controller for HTTP requests", "Resolves views to specific URLs", "Binds model data to view templates", "Manages bean lifecycles"],
    answer: 0,
  },
  {
    question: "Which annotation is used to map HTTP requests to controller methods?",
    options: ["@RequestMapping", "@Controller","@ModelAttribute", "@ExceptionHandler"],
    answer: 0,
  },
];

const Springassign = () => {
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

export default Springassign;
