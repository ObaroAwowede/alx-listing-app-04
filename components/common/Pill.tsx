import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      className={`
        px-4 py-1 rounded-full border
        transition
        ${active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}
        hover:${active ? 'bg-blue-700' : 'bg-gray-100'}
      `}
      onClick={() => onClick?.(label)}
    >
      {label}
    </button>
  );
};

export default Pill;