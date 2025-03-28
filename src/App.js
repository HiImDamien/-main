import "./App.css";
import { useState } from "react";
import BudgetBanner from "./banner";
import Salary from "./salary";
import Bills from "./bills";
import ExpensePieChart from "./components/ExpensePieChart";
import SimpleSavingsComponent from "./components/SImpleSavingsComponent";

function App() {
  const [salary, setSalary] = useState(60000); // initial salary is 60,000
  const [bills, setBills] = useState([]);

  // Calculate total monthly bill cost dynamically based on entered bills
  const totalMonthlyBillCost = bills.reduce((total, bill) => {
    const multiplier =
      bill.recurrence === "weekly"
        ? 4.33
        : bill.recurrence === "yearly"
        ? 1 / 12
        : 1;
    return total + bill.cost * multiplier;
  }, 0);

  // Calculate monthly savings: (salary / 12) - total monthly bill costs
  const monthlySavings = salary / 12 - totalMonthlyBillCost;

  // Calculate expense data dynamically based on the entered bills (use bill name directly)
  const expenseData = bills.reduce((data, bill) => {
    const multiplier =
      bill.recurrence === "weekly" 
        ? 4.33
        : bill.recurrence === "yearly"
        ? 1 / 12
        : 1;
    data[bill.name] = (data[bill.name] || 0) + bill.cost * multiplier;
    return data;
  }, {});

  // Calculate the percentage distribution for each bill
  const totalExpenses = Object.values(expenseData).reduce((total, value) => total + value, 0);

  // Convert expenseData values to percentages
  const expenseDataPercentage = Object.fromEntries(
    Object.entries(expenseData).map(([name, value]) => [
      name,
      (value / totalExpenses) * 100,
    ])
  );

  return (
    <div className="App">
      <BudgetBanner />
      <Salary setSalary={setSalary} />
      
      <div className="BillPieSaving">
        <Bills onBillsChange={setBills} />
        <ExpensePieChart expenseData={expenseDataPercentage} />
        <SimpleSavingsComponent savings={monthlySavings} />
      </div>      
    </div>
  );
}

export default App;