import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/useAuth';
import { submitAssignment } from '../../services/userService';
import './Assign.css';
const questionsData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Tool Markup Language"],
    answer: 2,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<link>"],
    answer: 1,
  },
  {
    question: "Which attribute is used to provide a unique identifier to an HTML element?",
    options: ["class", "id", "name", "key"],
    answer: 1,
  },
   {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"],
    answer: 2,
  },
   {
    question: "How can you make a numbered list in HTML?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    answer: 1,
  },
   {
    question: "Which tag is used to display an image in HTML?",
    options: ["<picture>", "<img>", "<image>", "<src>"],
    answer: 1,
  },
   {
    question: "What is the purpose of the <a> tag in HTML?",
    options: ["To create a list", "To define a table", "To insert a image", "To create a hyperlink"],
    answer: 3,
  },
   {
    question: "Which attribute is used in HTML to open a link in a new tab or window?",
    options: ["new", "window", "target", "tab"],
    answer: 2,
  },
   {
    question: "What is the correct HTML tag to make text bold?",
    options: ["<bold>", "<strong>", "<b>", "Both B and C"],
    answer: 3,
  },
   {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section-footer>", "<end>"],
    answer: 1,
  },
];

const Htmlassign = () => {
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(600); // 10 minutes in seconds

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
        name: 'HTML Basics Assignment',
        courseId: 'html',
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

export default Htmlassign;
