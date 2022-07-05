import { useState } from "react";

import expenseList from "./data/expenses.js";

// Components
import ExpenseItems from "./components/Expenses.js/ExpenseItems.js/ExpenseItems.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const [expenses, setExpenses] = useState(expenseList);

  // Add Expense
  const addExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense addExpense={addExpense} />
      <ExpenseItems expenses={expenses} />
    </div>
  );
}

export default App;
