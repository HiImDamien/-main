import React, { useState, useEffect } from "react";
import "./SavingsDisplay.css"; // Import the CSS file

const SavingsDisplay = ({ savings }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animation effect for counting up
  useEffect(() => {
    let start = 0;
    const end = savings;
    const increment = end / 40;
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setAnimatedValue(end);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [savings]);

  // Format the savings amount as currency
  const formattedSavings = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(animatedValue);

  return (
    <div className="savings-container">
      <h2 className="savings-label">Savings</h2>
      <div className="savings-amount">{formattedSavings}</div>
    </div>
  );
};

export default SavingsDisplay;
