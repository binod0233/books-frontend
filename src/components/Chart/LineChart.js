import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

    label: {
      display: false,
    },
  },
};

const labels = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function LineChart() {
  // console.log("fakerdata", faker.datatype.number({ min: 0, max: 10000 }));
  const data = {
    labels,
    datasets: [
      {
        data: labels.map((d) => (d === "sun" ? 100 : 500)),
        borderColor: "#3F50F0",
        backgroundColor: "#3F50F0",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
