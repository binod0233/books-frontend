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
  maintainAspectRatio: false,
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

function PieChart({totalDuePercent,totalPaymentPercent}) {

  const pieData = {
    //   labels: ["12", "19"],
    datasets: [
      {
        label: "# of Votes",
        data: [totalDuePercent, totalPaymentPercent],
        backgroundColor: ["#FFC928", "#ED6F47"],
        borderColor: ["white", "white"],
  
        borderWidth: 9,
        hoverBorderColor: ["white", "white"],
      },
    ],
  };
  return (
    
      <Pie
      style={{width:'inherit',height:'inherit'}}
        // className="pt-5"
        data={pieData}
        options={pieOptions}
      />
  
  );
}

export default PieChart;
