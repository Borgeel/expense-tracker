import Button from "../../UI/Button/Button.js";
import Card from "../../UI/Card/Card.js";
import ExpenseDate from "../ExpenseDate.js/ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date, changeTitle, id }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> {amount} </div>
      </div>
      <Button changeTitle={changeTitle} id={id} />
    </Card>
  );
};

export default ExpenseItem;
