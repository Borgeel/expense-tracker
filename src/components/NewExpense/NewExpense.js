import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ updateTitle, updateAmount, updateDate, addExpense }) => {
  const [showForm, setShowForm] = useState(true);

  // Add Expense
  const saveExpenseData = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
    setShowForm(!showForm);
  };

  // Toggle Form
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <button onClick={toggleForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          updateTitle={updateTitle}
          updateAmount={updateAmount}
          updateDate={updateDate}
          saveExpenseData={saveExpenseData}
          toggleForm={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
