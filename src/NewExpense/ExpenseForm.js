import "./ExpenseForm.css";
import { useState } from "react";
import Card from "../components/Card";
const ExpenseForm = function (props) {
  //states...///////////////////////////////////////////////////////////////
  //input form.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  //event handlers///////////////////////////////////////////////////

  //handler for submission of form
  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random(),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");

    props.onSave(expenseData);
    props.onCancel();
  };

  //handler for title changing.
  const titleChangeHandler = function (event) {
    // console.log(`in the title handler !`, event.target.value);
    setEnteredTitle(event.target.value);
  };

  //handler for amount changing.
  const AmountChangeHandler = function (event) {
    // console.log(`in the amount handler!`);
    setAmount(event.target.value);
  };
  //handler for date changing.
  const DateChangeHandler = function (event) {
    // console.log(`in the Date handler!`);
    setDate(event.target.value);
  };
  //return statement//////////////////////////////////////////////////////////////////
  return (
    <div>
      <form className="expense-form" onSubmit={submitHandler}>
        <Card className="expense-form--controls">
          <label className="expense-form--label">Title</label>
          <input
            type="text"
            placeholder="name of the item"
            className="expense-form--input"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
          <label className="expense-form--label">Amount</label>
          <input
            type="number"
            min="0"
            step="100"
            className="expense-form--input"
            placeholder="in Rupees"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          ></input>
          <label className="expense-form--label">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enteredDate}
            className="expense-form--input"
            onChange={DateChangeHandler}
          ></input>
          <div className="expense-form--button">
            <button
              className="expense-button"
              type="button"
              onClick={props.onCancel}
            >
              Cancel!
            </button>
            <button type="submit" className="expense-button">
              Add Expense!
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default ExpenseForm;
