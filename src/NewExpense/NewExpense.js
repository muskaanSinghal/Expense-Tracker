import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../components/Card.js";
import "./NewExpense.css";

const NewExpense = function (props) {
  //states ..........///////////////////////////////////////////
  const [active, setActive] = useState(false);

  //event handlers /////////////////////////////////////////////////////////////

  const saveHandler = function (e) {
    console.log("in the new expense.js ");
    props.onSubmit(e);
  };

  const clickHandler = function () {
    setActive(true);
  };

  const cancelHandler = function () {
    setActive(false);
  };
  //variables ..........////////////////////////////////////////////
  const beforeClicked = (
    <div className="expense-form--Only-Button">
      <button className="expense-button" onClick={clickHandler}>
        Add New Expense !
      </button>
    </div>
  );

  const afterClicked = (
    <ExpenseForm onSave={saveHandler} onCancel={cancelHandler}></ExpenseForm>
  );
  //return statement////////////////////////////////////////////////////////////////////
  return (
    <Card className="header">
      {active === true ? afterClicked : beforeClicked}
    </Card>
  );
};

export default NewExpense;
