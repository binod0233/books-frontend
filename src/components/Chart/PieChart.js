import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Earnings Statistics",
      position: "top",
    },
    label: {
      display: false,
    },
  },
};
export const pieData = {
  //   labels: ["12", "19"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 70],
      backgroundColor: ["#FFC928", "#ED6F47"],
      borderColor: ["white", "white"],

      borderWidth: 9,
      hoverBorderColor: ["white", "white"],
    },
  ],
};

function PieChart() {
  return (
    <div>
      <Pie
        // className="pt-5"
        data={pieData}
        options={pieOptions}
      />
    </div>
  );
}

export default PieChart;
