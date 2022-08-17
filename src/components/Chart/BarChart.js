import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio:false,
  //   responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    // scales: {
    //   xAxes: [
    //     {
    //       stacked: true,
    //       barPercentage: 0.2,
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       stacked: true,
    //       barPercentage: 0.2,
    //     },
    //   ],
    // },
  },
};

const labels = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#F0A41F",
      width: "100%",
    },
  ],
};

function BarChart() {
  return (
    <div >
      <Bar  options={options} data={data} style={{height:"42vh "}} />
    </div>
  );
}

export default BarChart;
