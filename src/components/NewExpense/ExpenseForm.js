import "./ExpenseForm.css";

const ExpenseForm = ({ updateTitle, updateAmount, updateDate }) => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={updateTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={updateAmount} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={updateDate}
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
