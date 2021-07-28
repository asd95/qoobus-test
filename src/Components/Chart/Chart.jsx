import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [5, 7, 3, 6, 4, 2],
        borderColor: ["rgb(232, 237, 241)"],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default Chart;
