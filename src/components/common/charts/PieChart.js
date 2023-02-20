import { CanvasJSChart } from "canvasjs-react-charts";

const PieChart = ({title, chartData}) => {
  console.log('--PieChart--')
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: title,
        },
        data: [
          {
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
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
  )
}

export default PieChart
