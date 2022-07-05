import "./ExpensesFilter.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
