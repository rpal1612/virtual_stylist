// Hero.jsx
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="subtitle">AI Fashion Assistant</p>
        <h1>
          Virtual Stylist & <br /> Outfit Recommender
        </h1>
        <p className="tagline">
          Luxury styling, weather-ready looks, and shoppable outfits — curated for you.
        </p>

        <div className="button-group">
          <Link to="/quiz">
            <button className="btn start">Start Style Quiz</button>
          </Link>
          <button className="btn upload">Upload Wardrobe</button>
        </div>

        <div className="tags">
          <span>Occasion-based looks</span>
          <span>Weather-aware suggestions</span>
          <span>Shop similar pieces</span>
        </div>
      </div>

      <div className="hero-card">
        <span className="badge">✨ Curated for You</span>
      </div>
    </div>
  );
}

export default Hero;
