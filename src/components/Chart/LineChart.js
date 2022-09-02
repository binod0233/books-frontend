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
import { Button, Col, Row } from "react-bootstrap";
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
  maintainAspectRatio: false,
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
export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 10, max: 30 })),
      borderColor: "#3F50F0",
      backgroundColor: "#3F50F0",
    },
  ],
};

function LineChart() {
  return (
    <>
    <Row className='ps-2 py-1'>
    <Row className="ps-4" style={{fontSize:'1.2rem',fontWeight:'700'}}>Earning Statistics</Row>
<Row className="pt-3 pb-1">
<Line style={{height:'25vh',width:'100%'}} options={options} data={data} />
</Row>
    </Row>
    </>
  );
}

export default LineChart;
