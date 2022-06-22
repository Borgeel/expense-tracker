import { useState } from "react";

// Data
import expenses from "./data/expenses.js";

// Components
import ExpenseItems from "./components/Expenses.js/ExpenseItems.js/ExpenseItems.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const [expense, setExpense] = useState(expenses);
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  console.log(newExpense);

  // Change Title
  const changeTitle = (id) => {
    setExpense((prevState) => {
      return prevState.map((expense) => {
        return expense.id === id ? { ...expense, title: "Updated!!" } : expense;
      });
    });
  };

  // New Expense: Set Title
  const updateTitle = (event) => {
    setNewExpense((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  // New Expense: Set Amount
  const updateAmount = (event) => {
    setNewExpense((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  //New Expense: Set Date
  const updateDate = (event) => {
    setNewExpense((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  return (
    <div className="App">
      <NewExpense
        updateTitle={updateTitle}
        updateAmount={updateAmount}
        updateDate={updateDate}
      />
      <ExpenseItems expense={expense} changeTitle={changeTitle} />
    </div>
  );
}

export default App;
