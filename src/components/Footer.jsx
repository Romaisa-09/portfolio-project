import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Romaisa's Portfolio</p>
    </footer>
  );
}

export default Footer;
