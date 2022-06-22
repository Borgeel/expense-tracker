import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ updateTitle, updateAmount, updateDate }) => {
  return (
    <div className="new-expense">
      New Expense
      <ExpenseForm
        updateTitle={updateTitle}
        updateAmount={updateAmount}
        updateDate={updateDate}
      />
    </div>
  );
};

export default NewExpense;
