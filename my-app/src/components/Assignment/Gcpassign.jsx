import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is Google Cloud Platform?",
    options: ["A mobile operating system", "A search engine", "A suit of cloud computing services", "A web browser"],
    answer: 2,
  },
  {
    question: "Which GCP service provides virtual machines?",
    options: ["Cloud Functions", "Compute engine", "App Engine", "Cloud Run"],
    answer: 1,
  },
  {
    question: "Which service is GCP's serverless platform for building and hosting applications?",
    options: ["Cloud Run", "App Engine", "Compute Engine", "Kubernetes Engine"],
    answer: 1,
  },
   {
    question: "What is the main function of Google cloud Storage?",
    options: ["Hosting Websites", "Managing APIs", "Storing and retrieving any amount of data", "Running virtual machines"],
    answer: 2,
  },
   {
    question: "Which GCP service provides managed Kubernetes?",
    options: ["Cloud Functions", "Cloud Build", "Kubernetes Engine(GKE)", "Cloud Shell"],
    answer: 2,
  },
   {
    question: "What does Google Bigquery do?",
    options: ["Provides relational database services", "Stores structured data", "Runs large-scale data analytics ans SQL queries", "Manages virtual networks"],
    answer: 2,
  },
   {
    question: "Which GCP service is used for identity and access management?",
    options: ["Cloud Identity", "Cloud IAM", "Cloud Security", "Cloud monitor"],
    answer: 1,
  },
   {
    question: "What is the purpose of Cloud Functions in GCP?",
    options: ["Run virtual machine", "Provide a fully managed serverless execution environment", "Create Kubernetes clusters", "Manage APIs"],
    answer: 1,
  },
   {
    question: "Which of the following serrvices is best suited for real-time messaging and event ingestion?",
    options: ["Cloud functions", "Cloud Pub/Sub", "Cloud Datastore", "Cloud Storage"],
    answer: 1,
  },
  {
    question: "What is the role of a GCP Project?",
    options: ["To store all user data", "To organize billing accounts only", "To group related GCP resources together", "To manage only IAM roles"],
    answer: 2,
  },
  
];

const Gcpassign = () => {
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

export default Gcpassign;
