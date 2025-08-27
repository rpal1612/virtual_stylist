// src/components/Hero.jsx
import React from "react";                     // 1) import React to write JSX
import "./Hero.css";                           // 2) attach the Hero-specific styles

const Hero = () => {                           // 3) functional component named Hero
  return (                                     // 4) returns JSX to render on screen
    <section className="hero">                 {/* 5) semantic wrapper for the hero area */}
      <div className="hero__content">           {/* 6) left column: text + CTAs */}
        <span className="hero__eyebrow">
          AI Fashion Assistant
          {/* 7) small label */}
        </span>
        <h1 className="hero__title">
          {/* 8) main headline */}
          Virtual Stylist &amp; Outfit Recommender
        </h1>
        <p className="hero__subtitle">
          {/* 9) supporting copy */}
          Luxury styling, weather-ready looks, and shoppable outfits — curated for you.
        </p>

        <div className="hero__cta">
          {/* 10) CTA button group */}
          <button className="btn btn--primary">
            Start Style Quiz
            {/* 11) primary CTA */}
          </button>
          <button className="btn btn--ghost">
            Upload Wardrobe
            {/* 12) secondary CTA */}
          </button>
        </div>

        <ul className="hero__highlights">
          {/* 13) quick benefits list */}
          <li>
            Occasion-based looks
            {/* 14) point 1 */}
          </li>
          <li>
            Weather-aware suggestions
            {/* 15) point 2 */}
          </li>
          <li>
            Shop similar pieces
            {/* 16) point 3 */}
          </li>
        </ul>
      </div>

      <div className="hero__visual">
        {/* 17) right column: imagery card */}
        <div className="hero__card">
          {/* 18) glassy card with image */}
          <div className="hero__image" />
          {/* 19) styled background image */}
          <div className="hero__badge">
            {/* 20) floating badge */}
            ✨ Curated for You
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;                            // 21) export so App can import it
