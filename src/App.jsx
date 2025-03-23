import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataEntry from "./pages/DataEntry";

function App() {
  // Portfolio Data Storage
  const [portfolioData, setPortfolioData] = useState(() => {
    const savedData = localStorage.getItem("portfolioData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const saveData = (data) => {
    setPortfolioData(data);
    localStorage.setItem("portfolioData", JSON.stringify(data));
  };

  // Dark Mode State with Local Storage Persistence
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataEntry saveData={saveData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/home" element={<Home portfolioData={portfolioData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
