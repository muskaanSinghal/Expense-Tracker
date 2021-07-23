import "./ExpenseFilter.css";

const ExpenseFilter = function (props) {
  const eventHandler = function (event) {
    console.log(event.target.value);
    props.onSubmit(event.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-container--label">Filter by year</div>
      <div>
        <select
          className="filter-container--input"
          value={props.selected}
          onChange={eventHandler}
        >
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
