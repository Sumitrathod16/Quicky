import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is Microsoft Azure?",
    options: ["A programming language", "An operating system", "A cloud computing platform and service", "A database engine"],
    answer: 2,
  },
  {
    question: "Which of the following is a compute service in Azure?",
    options: ["Azure SQL Database", "Azure Functions", "Azure Blob Storage", "Azure Devops"],
    answer: 1,
  },
  {
    question: "What does Azure Virtual Machine(VM) allow you to do?",
    options: ["Create web applications", "Host serverless code", "Run operating systems and software in the cloud", "Manage DNS records"],
    answer: 2,
  },
   {
    question: "What is the Azure Blob Storage used for?",
    options: ["Managing user identifies", "Storing large amounts of unstrucured data", "Hosting databases", "Deploying web applications"],
    answer: 1,
  },
   {
    question: "Which service is used to manage identifies and access in Azure?",
    options: ["Azure Active Directory", "Azure Monitor", "Azure Logic Apps", "Azure Key Vault"],
    answer: 0,
  },
   {
    question: "Which Azure service allows running code without managing servers?",
    options: ["Azure Kubernetes Service(AKS)", "Azure Logic Apps", "Azure Virtual Machines", "Azure Functions"],
    answer: 3,
  },
   {
    question: "What is Azure Resource Manager (ARM)?",
    options: ["A tool to monitor resources", "A portal for user management", "A management layer for creating and managing Azure resources", "A pricing calculator"],
    answer: 2,
  },
   {
    question: "Which Azure service provides relational database as a service?",
    options: ["Azure Cosmos DB", "Azure Blob Storage", "Azure SQL Database", "Azure Table Storage"],
    answer: 2,
  },
   {
    question: "What does Azure DevOps help with?",
    options: ["Creating virtual machines", "Monitoring Security", "Managing application lifecycle and CI/CD pipelines", "Encrypting data"],
    answer: 2,
  },
  {
    question: "Which Azure tool provides a graphical interface to manage Azure resources?",
    options: ["Azure PowerShell", "Azure CLI", "Azure Portal", "Azure SDK"],
    answer: 2,
  },
  
];

const Azureassign = () => {
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
          <span>⏱️ Remaining</span> | <span>{Math.floor(secondsLeft / 60)}:{('0' + (secondsLeft % 60)).slice(-2)}</span>
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

export default Azureassign;
