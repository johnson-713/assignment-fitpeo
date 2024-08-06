import { AgCharts } from "ag-charts-react";
import { useState } from "react";

export const ActivityChart = () => {
  const [options, setOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { day: 5, amount: 4000 },
      { day: 7, amount: 1000 },
      { day: 9, amount: 2000 },
      { day: 11, amount: 1000 },
      { day: 13, amount: 3000 },
      { day: 15, amount: 8000 },
      { day: 17, amount: 12000 },
      { day: 19, amount: 13000 },
      { day: 21, amount: 15000 },
      { day: 23, amount: 14000 },
      { day: 25, amount: 11000 },
      { day: 27, amount: 8000 },
    ],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "day",
        yKey: "amount",
        fillOpacity: 1,
        strokeRadius: '5px',
        strokeOpacity: 0,
        cornerRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          },
      },
    ],
    background: {
      fill: "#1F2029",
    },
    legend: {
        enabled: false
    },
    axes: [
      { interval: { step: 5000 }, position: "left", type: "number" },
      { type: "category", position: "bottom" },
    ],
  });
  console.log(setOptions);
  return <AgCharts options={options} style={{ maxHeight: "200px", overflowX: 'auto' }} />;
};
