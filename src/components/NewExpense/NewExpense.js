import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ updateTitle, updateAmount, updateDate, addExpense }) => {
  // Add Expense
  const saveExpenseData = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      New Expense
      <ExpenseForm
        updateTitle={updateTitle}
        updateAmount={updateAmount}
        updateDate={updateDate}
        saveExpenseData={saveExpenseData}
      />
    </div>
  );
};

export default NewExpense;
