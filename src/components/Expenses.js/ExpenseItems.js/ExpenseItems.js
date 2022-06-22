import "./ExpenseItems.css";

// Components
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";

const ExpenseItems = ({ expense, changeTitle }) => {
  return (
    <Card className="expenses">
      {expense.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            changeTitle={changeTitle}
            id={expense.id}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseItems;
