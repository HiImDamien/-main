import "./App.css";
import { useState } from "react";
import BudgetBanner from "./banner";
import Salary from "./salary";
import Bills from "./bills";
import ExpensePieChart from "./components/ExpensePieChart";
import SimpleSavingsComponent from "./components/SImpleSavingsComponent";

function App() {
  const [salary, setSalary] = useState(60000); // placeholder
  const [bills, setBills] = useState([]);

  const totalMonthlyBillCost = bills.reduce((total, bill) => {
    const multiplier = bill.recurrence === "weekly" ? 4.33 :
                       bill.recurrence === "yearly" ? 1 / 12 :
                       1; 
    return total + (bill.cost * multiplier);
  }, 0);

  const monthlySavings = (salary / 12) - totalMonthlyBillCost;

  const expenseData = {
    Housing: 35,
    Food: 20,
    Transport: 15,
    Entertainment: 10,
    Medical: 5,
    Other: 15,
  };

  return (
    <div className="App">
      <BudgetBanner />
      <Salary setSalary={setSalary} />
      <Bills onBillsChange={setBills} />

      <ExpensePieChart expenseData={expenseData} />
      <SimpleSavingsComponent savings={monthlySavings} />
    </div>
  );
}

export default App;
