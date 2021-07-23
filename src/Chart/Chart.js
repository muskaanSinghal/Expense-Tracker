//props.data
import Card from "../components/Card";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = function (props) {
  const chartDatapoints = [
    { value: 0, label: "jan" },
    { value: 0, label: "feb" },
    { value: 0, label: "mar" },
    { value: 0, label: "apr" },
    { value: 0, label: "may" },
    { value: 0, label: "june" },
    { value: 0, label: "july" },
    { value: 0, label: "aug" },
    { value: 0, label: "sept" },
    { value: 0, label: "oct" },
    { value: 0, label: "nov" },
    { value: 0, label: "dec" },
  ];

  props.array.forEach((element) => {
    const month = element.date.getMonth();
    chartDatapoints[month].value += +element.price;
  });

  //   const maxValue = chartDatapoints
  //     .map((point) => {
  //       console.log(point.value);
  //       return point.value;
  //     })
  // .reduce((acc, price) => (acc > price ? acc : price), 0);

  return (
    <Card className="chart">
      {chartDatapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={props.maxValue}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
