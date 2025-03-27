import { useState } from "react";
import "./salary.css";

const Salary = () => {
  const [yearlySalary, setYearlySalary] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  // Calculate salary based on input
  const calculatedYearlySalary = yearlySalary
    ? parseFloat(yearlySalary)
    : hourlyRate
    ? parseFloat(hourlyRate) * 40 * 52
    : 0;

  const monthlySalary = (calculatedYearlySalary / 12).toFixed(2);
  const weeklySalary = (calculatedYearlySalary / 52).toFixed(2);
  const hourlySalary = (calculatedYearlySalary / (40 * 52)).toFixed(2); // Assuming 40 hours per week, 52 weeks per year

  return (
    <div className="Salary-Calculator">
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

        {/* Always Show Breakdown */}
        <div className="Salary-result">
          <h3>Salary Breakdown:</h3>
          <p>Yearly: ${calculatedYearlySalary.toFixed(2)}</p>
          <p>Monthly: ${monthlySalary}</p>
          <p>Weekly: ${weeklySalary}</p>
          <p>Hourly: ${hourlySalary}</p>
        </div>
      </div>
    </div>
  );
};

export default Salary;
