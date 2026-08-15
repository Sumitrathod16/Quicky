import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../context/useAuth';
import { submitAssignment } from '../../services/userService';
import { fetchAssignmentQuestions } from '../../data/assignmentQuestions';
import './Assign.css';

function Timer({ initialMinutes = 10, isSubmitted }) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0 || isSubmitted) return;

    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, isSubmitted]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <span style={{ fontWeight: 'bold', color: '#0f0f0fff' }}>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </span>
  );
}

const AssignmentQuiz = ({
  courseKey = 'default',
  assignmentName = 'Assignment',
  courseLabel = 'General',
  totalQuestions = 10,
  initialMinutes = 10,
  apiUrl = null,
  title = 'Related Topics Review',
}) => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadQuestions = async () => {
      setIsLoading(true);
      const freshQuestions = await fetchAssignmentQuestions(courseKey, totalQuestions, apiUrl);

      if (!active) return;

      setQuestions(freshQuestions);
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setIsSubmitted(false);
      setIsLoading(false);
    };

    loadQuestions();

    return () => {
      active = false;
    };
  }, [apiUrl, courseKey, totalQuestions]);

  const current = questions[currentQuestion];

  const progressWidth = useMemo(() => {
    if (!questions.length) return '0%';
    return `${((currentQuestion + 1) / questions.length) * 100}%`;
  }, [currentQuestion, questions.length]);

  const handleOptionClick = (index) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: index }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const grade = score >= 9 ? 'A+' : score >= 8 ? 'A' : score >= 6 ? 'B' : score >= 4 ? 'C' : 'F';

    if (user?.uid) {
      submitAssignment(user.uid, {
        name: assignmentName,
        courseId: courseKey,
        score,
        total: questions.length,
        grade,
        status: 'completed',
      }).catch((err) => console.error('Failed to sync score:', err));
    }
  };

  if (isLoading) {
    return (
      <div className="assignment-container">
        <div className="assignment-header">
          <h3>Loading Assignment...</h3>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="assignment-container">
        <div className="assignment-header">
          <h3>No questions available for {courseLabel}.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="assignment-container">
      <div className="assignment-header">
        <h3>Assignment 1:</h3>
        <h1>{title}</h1>
        <div className="progress-bar">
          <div className="progress-filled" style={{ width: progressWidth }}></div>
        </div>
        <div className="timer">
          <span>⏱️ Remaining</span> | <Timer initialMinutes={initialMinutes} isSubmitted={isSubmitted} />
        </div>
      </div>

      <div className="question-section">
        <div className="question-box">
          <h4>
            Question {currentQuestion + 1} of {questions.length}
          </h4>
          <p className="question-text">{current.question}</p>
          <div className="options">
            {current.options.map((option, index) => (
              <label
                key={`${current.question}-${index}`}
                className={`option-label ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleOptionClick(index)}
              >
                <span>{String.fromCharCode(65 + index)}</span> {option}
              </label>
            ))}
          </div>
        </div>

        <div className="score-box">
          <p>Total {questions.length} Questions</p>
          <p>{Object.keys(selectedAnswers).length} Attempted</p>
          <hr />
          <p>Score</p>
          <input type="text" readOnly value={isSubmitted ? calculateScore() : ''} />
        </div>
      </div>

      <div className="button-group">
        <button onClick={handlePrevious} disabled={currentQuestion === 0 || isSubmitted} className="prev-btn">
          ← Previous Question
        </button>
        <button onClick={handleNext} disabled={currentQuestion === questions.length - 1 || isSubmitted} className="next-btn">
          Next Question →
        </button>
        <button onClick={handleSubmit} disabled={isSubmitted || isLoading} className="submit-btn">
          {isSubmitted ? 'Submitted!' : 'Submit Assignment'}
        </button>
      </div>
    </div>
  );
};

export default AssignmentQuiz;
