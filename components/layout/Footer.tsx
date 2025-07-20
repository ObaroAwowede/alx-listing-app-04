import React from 'react';
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} </p>
      <p>
        <Link href="/" className="hover:underline">Privacy Policy</Link> |
        <Link href="/" className="hover:underline">Terms & Conditions</Link>
      </p>
    </footer>
  );
};

export default Footer;