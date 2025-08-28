import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is the main goal of Artificial Intelligence?",
    options: ["To solve puzzles","To understand human thinking", "To make intelligent machines" ,"To play games"],
    answer: 2,
  },
  {
    question: " Which of the following is an application of AI?",
    options: [ "Email spam filtering" ,"Autonomous vehicles","Speech recognition", "All of the above"],
    answer: 3,
  },
  {
    question: "Who is considered the father of Artificial Intelligence?",
    options: ["Alan Turing","John McCarthy","Marvin Minsky"," Geoffrey Hinton"],
    answer: 1,
  },
   {
    question:  "Which of the following is NOT a type of machine learning??",
    options: ["Supervised Learning","Reinforcement Learning","Unsupervised Learning","Assisted Learning"],
    answer: 3,
  },
   {
    question: "What does NLP stand for in AI?",
    options: ["Natural Language Processing", "Natural Learning Processing", "Neural Language Programming"," None of the above"],
    answer: 0
  },
   {
    question: "Which algorithm is used for classification problems in AI?",
    options: [" K-Means","Linear Regression","Decision Tree","Apriori"],
    answer: 2,
  },
   {
    question: " What is the Turing Test used for?",
    options: ["Measuring CPU speed","Testing computer vision","Checking machine intelligence ","Validating software"],
    answer: 2,
  },
   {
    question: "Which of the following is a component of an intelligent agent?",
    options: [ "Perception", "Learning", "Reasoning","All of the above"],
    answer: 3,
  },
   {
    question: "In which AI approach are knowledge and rules explicitly coded?",
    options: ["Neural Networks","Rule-based System","Genetic Algorithms","Deep Learning"],
    answer: 1,
  },
  {
    question: " Which of these is an example of Weak AI?",
    options: ["Siri","Self-aware robots","Sentient machines","Conscious AI"],
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
    <span style={{ fontWeight: 'bold', color: '#0f0f0fff' }}>
      {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
    </span>
  );
}

const Aiassign = () => {
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
    <style>{`
     
    `}</style>

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

export default Aiassign;
