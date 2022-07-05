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

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
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
