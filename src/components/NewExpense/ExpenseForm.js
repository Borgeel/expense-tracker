import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ saveExpenseData }) => {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEneteredDate] = useState("");

  // Title Change Handler
  const titleChangeHandler = (e) => {
    setEneteredTitle(e.target.value);
  };

  // Amount Change Handler
  const amountChangeHandler = (e) => {
    setEneteredAmount(e.target.value);
  };
  // Date Change Handler
  const dateChangeHandler = (e) => {
    setEneteredDate(e.target.value);
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    // Create new expense
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Save expense data
    saveExpenseData(newExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2022-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
