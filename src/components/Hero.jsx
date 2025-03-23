import React from 'react';

function Hero({ portfolioData }) {
  if (!portfolioData) {
    return (
      <section className="text-center py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello World!</h1>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
          Welcome to my portfolio. Please enter your details in the Data Entry form.
        </p>
        <a href="#projects" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded shadow-md transition-transform transform hover:scale-105">
          View My Work
        </a>
      </section>
    );
  }

  return (
    <section className="text-center py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white animate-fadeIn">Hello World!</h1>
      
      {/* Name & Bio */}
      <p className="text-lg mt-4 text-gray-700 dark:text-gray-300 animate-fadeIn delay-100">
        I am <span className="text-blue-600 dark:text-blue-400 font-semibold">{portfolioData.studentName}</span>,
        {portfolioData.bio ? ` ${portfolioData.bio}` : " a passionate Computer Science student exploring AI, web development, and game design."}
      </p>
      
      {/* Call-To-Action Button */}
      <a href="#projects" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded shadow-md transition-transform transform hover:scale-105 animate-fadeIn delay-200">
        View My Work
      </a>
    </section>
  );
}

export default Hero;
