import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      // text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const OrderChart = ({ customersWeekly, ordersWeekly }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Total Customers",
        data: customersWeekly,
        borderColor: "#E0B0FF",
        backgroundColor: "#E0B0FF",
      },
      {
        label: "Total Orders",
        data: ordersWeekly,
        borderColor: "#FFDB58",
        backgroundColor: "#FFDB58",
      },
    ],
  };
  return (
    <div className="h-full bg-white px-5 pt-5">
      <Line options={options} data={data} />
    </div>
  );
};
