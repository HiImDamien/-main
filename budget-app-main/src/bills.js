import { useState } from 'react';
import './bills.css';


function Bills({ onBillsChange }) {
  const [bills, setBills] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [name, setName] =useState("");

  const [cost, setCost] = useState("");
  const [recurrence, setRecurrence] = useState("monthly");

  function handleAddBill() {
    if (!name || !cost || !recurrence) return;

    const newBill = {
      id: Date.now(),
      name,
      cost: parseFloat(cost),
      recurrence,
    };

    const updatedBills = [...bills, newBill];
    setBills(updatedBills);

    if (onBillsChange) onBillsChange(updatedBills);

   
    setName("");
    setCost("");
    setRecurrence("monthly");
    setFormVisible(false);

    
      
  }

  function handleRemoveBill(id) {
    const updatedBills = bills.filter((bill) => bill.id !== id);
    setBills(updatedBills);
    if (onBillsChange) onBillsChange(updatedBills);
  }

  return(
    <div>

      <h2>Bills</h2>

      <button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? "Cancel" :"Add Bill"}

      </button>

      {formVisible && (
  <>
    <div className="input-row">
      <input
        type="text"

        placeholder="Bill Name"
        value={name}
        onChange={(e) =>setName(e.target.value)}
       />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e)=> setCost(e.target.value)}
      />
      <select value={recurrence} onChange={(e) =>setRecurrence(e.target.value)}>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>

        <option value="yearly">Yearly</option>
      </select>
    </div>
    <button onClick={handleAddBill}>Add</button>
  </>
)}


      <button onClick={() => setShowList(!showList)} style={{ marginTop: '10px' }}>
        {showList ?"Hide Bills" :"Show Bills"}
      </button>

      {showList && (
  <ul className="bill-list">
    {bills.map((bill) => (
      <li key={bill.id}>
        <strong>{bill.name}</strong>: ${bill.cost} ({bill.recurrence})
        <button
          onClick={() => handleRemoveBill(bill.id)}
          style={{ marginLeft: '10px' }}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
)}

    </div>
  );
}

export default Bills;
