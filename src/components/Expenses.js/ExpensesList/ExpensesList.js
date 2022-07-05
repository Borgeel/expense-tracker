import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <h3 style={{ color: "white", textAlign: "center" }}>
        No expenses found.
      </h3>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
