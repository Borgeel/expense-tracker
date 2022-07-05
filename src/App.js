import { useState } from "react";

// Components
import ExpenseItems from "./components/Expenses.js/ExpenseItems.js/ExpenseItems.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const expenseList = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

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
