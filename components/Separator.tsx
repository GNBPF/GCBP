import React from 'react';

export const Separator: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-16 w-full max-w-5xl mx-auto px-4">
        <div className="w-3 h-3 rounded-full bg-blue-300"></div>
        <div className="h-[1px] bg-blue-300 flex-grow mx-2"></div>
        <div className="w-3 h-3 rounded-full bg-blue-300"></div>
    </div>
  );
};