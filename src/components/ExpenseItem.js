// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";

const ExpenseItem = function (props) {
  try {
    return (
      <Card className="container">
        <ExpenseDate date={props.obj.date} className="date"></ExpenseDate>
        <div className="sub">
          <div className="title">{props.obj.title}</div>
          <Card className="price">{+props.obj.price}</Card>
          {/* <button onClick={clickHandler}>Click Me!</button> */}
        </div>
      </Card>
    );
  } catch (error) {
    console.error("error.message");
  }
};

export default ExpenseItem;
