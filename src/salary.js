import { useState, useEffect } from "react";
import "./salary.css";

const Salary = ({ setSalary }) => {
  const [yearlySalary, setYearlySalary] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  // Calculate yearly salary based on input
  const calculatedYearlySalary = yearlySalary
    ? parseFloat(yearlySalary)
    : hourlyRate
    ? parseFloat(hourlyRate) * 40 * 52
    : 0;

  const monthlySalary = (calculatedYearlySalary / 12).toFixed(2);
  const weeklySalary = (calculatedYearlySalary / 52).toFixed(2);
  const hourlySalary = (calculatedYearlySalary / (40 * 52)).toFixed(2); // Assuming 40 hours per week, 52 weeks per year

  // Format function to add commas to salary amounts
  const formatSalary = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  // Pass the calculated salary to the parent component (App.js)
  useEffect(() => {
    setSalary(calculatedYearlySalary);  // Update the salary in the parent component whenever it changes
  }, [calculatedYearlySalary, setSalary]);

  return (
    <div className="Salary-Calculator">
      {/* Salary Inputs Section */}
      <div className="Salary-input">
        <h2>Salary Breakdown</h2>

        {/* Yearly Salary Input */}
        <label>Enter Yearly Salary ($):</label>
        <input
          type="text"
          value={yearlySalary}
          onChange={(e) => {
            setYearlySalary(e.target.value);
            setHourlyRate(""); // Reset hourly rate when yearly salary is entered
          }}
          placeholder="Enter yearly salary"
        />

        <p>OR</p>

        {/* Hourly Rate Input */}
        <label>Enter Hourly Rate ($):</label>
        <input
          type="text"
          value={hourlyRate}
          onChange={(e) => {
            setHourlyRate(e.target.value);
            setYearlySalary(""); // Reset yearly salary when hourly rate is entered
          }}
          placeholder="Enter hourly rate"
        />
      </div>

      {/* Salary Breakdown Section */}
      <div className="Salary-result">
        <h3>Salary Breakdown:</h3>
        <p>Yearly: ${formatSalary(calculatedYearlySalary)}</p>
        <p>Monthly: ${formatSalary(monthlySalary)}</p>
        <p>Weekly: ${formatSalary(weeklySalary)}</p>
        <p>Hourly: ${formatSalary(hourlySalary)}</p>
      </div>
    </div>
  );
};

export default Salary;