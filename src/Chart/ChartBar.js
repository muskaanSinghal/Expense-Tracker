import "./ChartBar.css";
const ChartBar = function (props) {
  let fillHeight;

  if (props.maxValue !== 0) {
    fillHeight = Math.round((props.value / props.maxValue) * 100);
  } else {
    fillHeight = Math.round(props.value) * 100;
  }
  //   console.log(fillHeight);
  //props => {height  , label}

  return (
    <div>
      <div className="bar">
        <div
          className="bar-inner"
          style={{
            height: fillHeight + "%",
          }}
        ></div>
      </div>
      <label className="bar-label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
