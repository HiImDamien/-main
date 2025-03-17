import { useState } from "react";
import "./salary.css";

const Salary = () => {
  const [yearlySalary, setYearlySalary] = useState("");

  // Calculate Monthly and Weekly Salary
  const monthlySalary = yearlySalary ? ((yearlySalary) / 12).toFixed(2) : "0.00";
  const weeklySalary = yearlySalary ? ((yearlySalary) / 52).toFixed(2) : "0.00";

  return (
    <div className="Salary-Calculator">
    <img src="/dollar.png" alt="Dollar Sign" className="dollar-icon"/>
      <div className="Salary-input">
        <h2>Salary Breakdown</h2> 
        <label>Enter Yearly Salary ($): </label>
        <input
          type="number"
          value={yearlySalary}
          onChange={(e) => setYearlySalary(e.target.value)}
          placeholder="Enter yearly salary"
        />
        <div className="Salary-result">
          <p>Monthly: ${monthlySalary}</p>
          <p>Weekly: ${weeklySalary}</p>
        </div>
      </div>
      <img src="/dollar.png" alt="Dollar Sign" className="dollar-icon"/>
    </div>
  );
}

export default Salary;