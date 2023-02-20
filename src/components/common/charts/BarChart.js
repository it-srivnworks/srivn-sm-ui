import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const BarChart = ({titleHeader,xaxis,yaxis, chartData}) => {
  
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: titleHeader,
    },
    axisX: {
      title: xaxis,
      reversed: true,
    },
    axisY: {
      title: yaxis,
      includeZero: true,
    },
    data: [
      {
        type: "bar",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </>
  );
};

export default BarChart;
