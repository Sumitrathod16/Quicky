import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What language is primarily used to develop Flutter apps?",
    options: ["Kotlin", "Java", "Dart", "Swift"],
    answer: 2,
  },
  {
    question: "Which widget is used for creating a layout in a linear direction(either a vertical or horizontal)?",
    options: ["Container", "Row", "Column", "Both B and C"],
    answer: 3,
  },
  {
    question: "What does the build() method in Flutter do?",
    options: ["Creates the app icon", "Describe the part of the UI represented by the widget","Initializes the app", "Handles user input"],
    answer: 1,
  },
   {
    question: "Which widget is used to create a scrollable list of widgets?",
    options: ["ListTile", "GridView", "ListView", "Row"],
    answer: 2,
  },
   {
    question: "In flutter, what is the purpose of the pubspec.yaml file?",
    options: ["Manage app theme", "Define widget structure", "Configure dependencies and assets", "Set the app's layout"],
    answer: 2,
  },
   {
    question: "What type of widget is Text in Flutter?",
    options: ["StatefulWidget", "StatelessWidget", "InheritedWidget", "DynamicWidget"],
    answer: 1,
  },
   {
    question: "Which of the following is true about StatefulWidgets?",
    options: ["Their state cannot change over time", "They are immutable", "They maintain state that might change during the app's lifetime","They are used only once"],
    answer: 2,
  },
   {
    question: "Which command is used to create a new Flutter project?",
    options: ["Flutter new", "Flutter create", "Flutter init", "Flutter start"],
    answer: 1,
  },
   {
    question: "What is the default root widget returned by flutter create?",
    options: ["Myapp", "Homepage", "MainApp", "MainScreen"],
    answer: 0,
  },
  {
    question: "which flutter widget is used to display a material design alert dialog?",
    options: ["AlertMessage", "ShowDialog", "AlertBox", "AlertDialog"],
    answer: 3,
  },
  
];

const Flutterassign = () => {
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

export default Flutterassign;
