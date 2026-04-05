import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/useAuth';
import { submitAssignment } from '../../services/userService';
import './Assign.css';
const questionsData = [
  {
    question: "What does EC2 stands for in AWS?",
    options: ["Elastic Cloud Compute", "Elastic Compute Cloud", "Elastic Cluster Cloud", "Enhanced Compute Cloud"],
    answer: 1,
  },
  {
    question: "Which AWS service is used for object storage?",
    options: ["Amazon EBS", "Amazon RDS","Amazon S3", "Amazon EC2"],
    answer: 2,
  },
  {
    question: "What is the main function of Amazon Route 53?",
    options: ["Compute Engine", "Load balancer", "Domain name system(DNS) service", "Messaging service"],
    answer: 2,
  },
   {
    question: "What AWS service provides a managed NoSQL database?",
    options: ["Amazon Aurora", "Amazon Redshift", "Amazon DynamoDB", "Amazon RDS"],
    answer: 2,
  },
   {
    question: "What is the purpose of AWS CloudFormation?",
    options: ["Monitor application health", "Automate infrastructure provisioning using code", "Create cloud backups", "Perform data analysis"],
    answer: 1,
  },
   {
    question: "Which AWS service can be used to run containerized applications?",
    options: ["Amazon EC2", "Amazon ECS", "Amazon Lambda", "Amazon Lightsail"],
    answer: 1,
  },
   {
    question: "What is the benefit of using AWS Lambda?",
    options: ["Dedicated Servers", "Run code without provisioning or managing servers", "Launch virtual machines", "Manual scaling of applications"],
    answer: 1,
  },
   {
    question: "What is the primary storage service used by Amazon EC2?",
    options: ["Amazon S3", "Amazon Glacier", "Amazon EFS", "Amazon EBS"],
    answer: 3,
  },
   {
    question: "Which of the following is a serverless compute service?",
    options: ["Amazon EC2", "Amazon EBS", "AWS Lambda", "Amazon RDS"],
    answer: 2,
  },
   {
    question: "What does the AWS IAM service do?",
    options: ["Provides logging","Provides DNS management", "Manages user access and permissions", "Hosts container service"],
    answer: 2,
  },
];

const Awsassign = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    if (secondsLeft <= 0 || isSubmitted) return;
    const timer = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, isSubmitted]);

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const score = calculateScore();
    const grade = score >= 9 ? 'A+' : score >= 8 ? 'A' : score >= 6 ? 'B' : score >= 4 ? 'C' : 'F';
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    if (user?.uid) {
      submitAssignment(user.uid, {
        name: 'AWS Basics Assignment',
        courseId: 'aws',
        score: score,
        total: questionsData.length,
        grade: grade,
        status: 'completed'
      }).catch(err => console.error("Failed to sync score:", err));
    }
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
        <button onClick={handlePrevious} disabled={currentQuestion === 0 || isSubmitted} className="prev-btn">
          ← Previous Question
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questionsData.length - 1 || isSubmitted} className="next-btn">
          Next Question →
        </button>
        <button onClick={handleSubmit} disabled={isSubmitted || isSubmitting} className="submit-btn">
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Submit Assignment'}
        </button>
      </div>
    </div>
    </>
  );
};

export default Awsassign;
