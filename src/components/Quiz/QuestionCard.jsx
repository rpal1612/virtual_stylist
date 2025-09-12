import React from "react";
import "./Quiz.css";

const QuestionCard = ({ data, onAnswer, selectedAnswer }) => {
  if (!data) return null;

  return (
    <div className="question-card">
      <h3>{data.question}</h3>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => onAnswer(data.id, option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
