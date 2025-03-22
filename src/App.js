import "./App.css";
import BudgetBanner from "./banner";
import Salary from "./salary";
import ExpensePieChart from "./components/ExpensePieChart";
import SimpleSavingsComponent from "./components/SImpleSavingsComponent";
function App() {
  //fake data for now
  const expenseData = {
    Housing: 35,
    Food: 20,
    Transport: 15,
    Entertainment: 10,
    Medical: 5,
    Other: 15,
  };
  const currentSavings = 2500;
  return (
    <div className="App">
      <BudgetBanner />
      <Salary />

      <ExpensePieChart expenseData={expenseData} />
      <SimpleSavingsComponent savings={currentSavings} />
    </div>
  );
}

export default App;
