// src/App.js
import React from "react";               // 1) React for components/JSX
import "./App.css";                      // 2) global theme variables + resets
import Hero from "./components/Hero";    // 3) bring in the Hero section

function App() {                         // 4) root component
  return (                               // 5) return the UI tree
    <main>                               {/* 6) semantic main container */}
      <Hero />                           {/* 7) render the hero section */}
    </main>
  );
}

export default App;                      // 8) export for ReactDOM to render
