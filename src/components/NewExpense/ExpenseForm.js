import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ saveExpenseData }) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // Change Handler
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNewExpense((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    saveExpenseData(newExpense);
    setNewExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={changeHandler}
            name="title"
            value={newExpense.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={changeHandler}
            name="amount"
            value={newExpense.amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={changeHandler}
            name="date"
            value={newExpense.date}
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
