'use client'
import { useState } from 'react';

const PeopleCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 ">Number of People Crossed So Far:     <span className="text-4xl font-bold">962</span></h2>

    </div>
  );
};

export default PeopleCounter;
