import { useState } from "react";
import "./ExpenseItems.css";

// Components
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

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
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default ExpenseItems;
