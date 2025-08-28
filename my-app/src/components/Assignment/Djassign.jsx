import React, { useState, useEffect } from "react";
import './Assign.css';
const questionsData = [
  {
    question: "What is Django?",
    options: ["A front-end framework","A web server","A high-level python web framework"],
    answer: 2,
  },
  {
    question: "Which design pattern does Django follow?",
    options: ["MVC (Model-View-Controller)", "MVVM(Model-view-ViewModel)", "MVP(Model-View-Presenter)", "PCA"],
    answer: 3,
  },
  {
    question: "Which command is used to create a new Django Project?",
    options: ["django-admin createproject projectname","python maage.py create projectname","django-admin startproject projectname"],
    answer: 2,
  },
   {
    question: "What is the default database used in Django?",
    options: ["PostgreSQL", "SQLite", "MySQL", "Oracle"],
    answer: 1,
  },
   {
    question: "What is the following command do? python manage.py makemigrations",
    options: ["Runs the development server", "Deletes the database", "Creates migration files based on model changes", "Applies changes to the database"],
    answer: 2,
  },
   {
    question: "Which file is used to define URL routes in a Django app?",
    options: ["views.py", "models.py", "admin.py", "urls.py"],
    answer: 3,
  },
   {
    question: "What is the purpose of the model.py file in a Django app?",
    options: ["To handle URLs", "To store HTML templates", "To define database schema using classes", "To configure the app's settings"],
    answer: 2,
  },
   {
    question: "How can you register a model to the Django admin suite?",
    options: ["By adding it to views.py", "By using register() function in models.py", "By regustering it in admin.py using admin.site.register()", "It gets registered automatically"],
    answer: 2,
  },
   {
    question: "Which of the following is used to render a template in Django?",
    options: ["Httpresponse(template)", "render(request,template_name,context)", "sendfile(request,template)", "template.render()"],
    answer: 1,
  },
  {
    question: "How do you start the Django development server?",
    options: ["Python manage.py runserver", "django run", "python runserver.py", "manage.py django run"],
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
    <span style={{ fontWeight: 'bold', color: '#ff9800' }}>
      {min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}
    </span>
  );
}

const Djassign = () => {
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

export default Djassign;
