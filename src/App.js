// import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
// import Chart from "./Chart/Chart.js";
import Expenses from "./components/Expenses.js";
import NewExpense from "./NewExpense/NewExpense.js";
import "./App.css";

const DUMMY_ARRAY = [
  {
    id: Math.random(),
    title: "toilet-paper",
    price: 250,
    date: new Date("2020 / 5 / 5"),
  },
  {
    id: Math.random(),
    title: "brownie",
    price: 300,
    date: new Date("2019 / 12 / 5"),
  },
  {
    id: Math.random(),
    title: "sweets",
    price: 800,
    date: new Date("2021 / 5 / 2"),
  },
];

const App = function () {
  // let expense;
  const [newArray, setNewArray] = useState(DUMMY_ARRAY);
  const changingFilterHandler = function (event) {
    console.log(event);
  };

  const submitHandler = function (event) {
    setNewArray((prevArray) => {
      return [event, ...prevArray];
    });
  };
  // console.log(newArray);
  return (
    <div>
      <NewExpense onSubmit={submitHandler}></NewExpense>

      <Expenses
        array={newArray}
        onChangingFilter={changingFilterHandler}
      ></Expenses>
    </div>
  );
};

export default App;
// value = > aruments as attributes
// return  => all arguments => objects
