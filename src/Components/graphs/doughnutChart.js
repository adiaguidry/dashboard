import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";

const DoughnutChart = ({ chart }) => {
  useEffect(() => {
    if (chart === 1) {
    }
  });

  const [data, setData1] = useState({
    datasets: [
      {
        backgroundColor: ["rgb(69, 244, 111)", "#81a8ff", "#AFF000"],
        data: [50, 155, 99]
      }
    ],
    cutoutPercentage: 0
  });

  return (
    <div style={{ width: 350, height: 150 }}>
      <Doughnut
        data={data}
        options={{
          // rotation: 1 * Math.PI,
          // circumference: 1 * Math.PI,
          cutoutPercentage: 80,
          responsive: false,
          plugins: {
            labels: {
              render: "labels",
              arc: true,
              fontColor: "#000",
              position: "outside"
            }
          }
        }}
      ></Doughnut>
    </div>
  );
};

export default DoughnutChart;
