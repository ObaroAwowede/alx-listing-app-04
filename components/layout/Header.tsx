'use client';

import React from 'react';
import Link from 'next/link';

const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Apartments', 'Cabins'];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <div>

      </div>
      <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
        {accommodationTypes.map((type) => (
          <Link key={type} href={`/accommodation/${type.toLowerCase()}`}>
            <span>{type}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search.."
          className="border rounded px-3 py-1"
        />
        <Link href="/">
          <button className="text-black-600 hover:underline">Sign In</button>
        </Link>
        <Link href="/">
          <button className="bg-white-300 text-black px-4 py-1 rounded hover:bg-black-300 text-white">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;