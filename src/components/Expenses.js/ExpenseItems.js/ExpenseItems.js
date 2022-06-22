import "./ExpenseItems.css";

// Components
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

const ExpenseItems = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
    </Card>
  );
};

export default ExpenseItems;
