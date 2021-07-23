import "./Card.css";

const Card = function (props) {
  const classes = props.className + " card";
  //warpper element
  return <div className={classes}>{props.children}</div>;
};

export default Card;
