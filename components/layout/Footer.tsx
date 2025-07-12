import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} </p>
      <p>
        <a href="/" className="hover:underline">Privacy Policy</a> | 
        <a href="/" className="hover:underline">Terms & Conditions</a>
      </p>
    </footer>
  );
};

export default Footer;