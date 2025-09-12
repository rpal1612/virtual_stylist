// Quiz.jsx
import React, { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleFinish = () => {
    setSubmitted(true);
    setTimeout(() => {
      navigate("/"); // Redirect back to home
    }, 2000); // waits 2 sec before redirect
  };

  return (
    <div className="quiz-container">
      {!submitted ? (
        <>
          <h2>Style Quiz</h2>
          <form className="quiz-form">
            <label>1. What type of outfits do you prefer?</label>
            <select>
              <option>Casual</option>
              <option>Formal</option>
              <option>Trendy</option>
              <option>Traditional</option>
            </select>

            <label>2. Favorite color palette?</label>
            <select>
              <option>Neutral</option>
              <option>Bright</option>
              <option>Dark</option>
              <option>Pastel</option>
            </select>

            <label>3. Which occasion do you shop for the most?</label>
            <select>
              <option>Work</option>
              <option>Party</option>
              <option>Travel</option>
              <option>Everyday</option>
            </select>

            <button
              type="button"
              className="btn-finish"
              onClick={handleFinish}
            >
              Finish
            </button>
          </form>
        </>
      ) : (
        <div className="thank-you">
          <h2>✨ Thanks for the feedback!</h2>
          <p>Your wardrobe has been updated.</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
