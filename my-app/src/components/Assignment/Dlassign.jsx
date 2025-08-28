import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: " What is a key characteristic of deep learning models?",
    options: ["They require very little data","They use shallow decision trees",  "They consist of many layers of neurons","They don't require training"],
    answer: 2 ,
  },
  {
    question: "Which neural network is best suited for image recognition tasks?",
    options: ["RNN","CNN","SVM","K-Means"],
    answer: 1,
  },
  {
    question: "What does a neuron in a neural network do?",
    options: ["Stores data","Sends internet packets","Performs a simple computation on input and passes output"," Acts as a memory unit"],
    answer: 2,
  },
   {
    question: "What is the main role of an activation function?",
    options: ["Reduce overfitting","Combine input layers","Introduce non-linearity" ,"Increase training speed"],
    answer: 2,
  },
   {
    question: " What is overfitting in deep learning?",
    options: ["Model performs well on test data", "Model is too slow to train", "Model memorizes training data but performs poorly on new data","Model predicts the future"],
    answer: 2,
  },
   {
    question: " Which of the following is commonly used to prevent overfitting?",
    options: ["Larger datasets","Dropout","Early stopping","All of the above"],
    answer: 3,
  },
   {
    question: "In a CNN, what is the main purpose of a pooling layer?",
    options: ["Increase image size","Normalize pixel values","Reduce dimensionality","Add activation functions"],
    answer: 2,
  },
   {
    question: ". What type of deep learning model is typically used for language tasks like translation or text generation?",
    options: ["CNN","GAN","Transformer","KNN"],
    answer: 2,
  },
   {
    question: "Which of the following is a popular deep learning framework?",
    options: [ "MySQL","TensorFlow","Selenium","Apache"],
    answer: 1,
  },
  {
    question: " What is the purpose of backpropagation in neural networks?",
    options: ["To initialize weights","To reduce data size","To update weights by minimizing loss","To increase learning rate"],
    answer: 2,
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

const Dlassign = () => {
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

export default Dlassign;
