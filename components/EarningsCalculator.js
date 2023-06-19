'use client'
import { useState } from 'react';

const EarningsCalculator = () => {
  const [earnings, setEarnings] = useState(0);

  const calculateEarnings = () => {
    const numberOfCrosses = Math.floor(Math.random() * 10); // Random number of crosses (replace with your actual logic)
    const earningsPerCross = 40; // Earnings per cross in cedis
    const totalEarnings = numberOfCrosses * earningsPerCross;
    setEarnings(totalEarnings);
  };

  return (
    <div className=" p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Cost per Person: <span className="text-4xl font-bold">70 cedis</span></h2>

    </div>
  );
};

export default EarningsCalculator;
