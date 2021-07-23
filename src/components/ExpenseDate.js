import "./ExpenseDate.css";
import Card from "./Card";

const ExpenseDate = function (props) {
  const date = props.date;
  // console.log(date);
  const day = date.toLocaleString(navigator.language, {
    day: "2-digit",
  });
  const year = date.getFullYear();
  const month = date.toLocaleString(navigator.language, {
    month: "short",
  });
  return (
    <Card className="date">
      <div> {day}</div>
      <div> {month}</div>
      <div> {year}</div>
    </Card>
  );
};

export default ExpenseDate;
