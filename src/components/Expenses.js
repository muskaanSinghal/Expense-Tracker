import "./Expenses.css";
import { useState } from "react";
import Chart from "../Chart/Chart";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "./Card";
//props => array of objects
const Expenses = function (props) {
  const maxValue = props.array
    .map((obj) => +obj.price)
    .reduce((acc, price) => (acc > price ? acc : price), 0);
  // console.log(props.array);

  const [filteredValue, setFilteredValue] = useState("2020");
  const changeHandler = function (event) {
    props.onChangingFilter(event);
    setFilteredValue(event);
  };

  const filteredExpenseItems = props.array.filter(
    (element) => element.date.getFullYear() === +filteredValue
  );

  return (
    <Card className="contains">
      <ExpenseFilter onSubmit={changeHandler} selected={filteredValue} />
      <Chart array={filteredExpenseItems} maxValue={maxValue} />

      {filteredExpenseItems.length === 0 ? (
        <p className="para">No items found!</p>
      ) : (
        filteredExpenseItems.map((expense) => (
          <ExpenseItem obj={expense} key={expense.id} />
        ))
      )}
    </Card>
  );
};

export default Expenses;
