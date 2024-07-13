import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.tests.map((test) => test.name), // Test names for x-axis
    datasets: [
      {
        label: "Chemistry",
        data: data.tests.map((test) => test.marks), // Marks for y-axis
        borderColor: "rgba(127, 180, 215, 1)",
        backgroundColor: "rgba(127, 180, 215, 0.2)",
        fill: true,
        tension: 0.3, // Smooth the line
        pointBackgroundColor: "rgba(127, 180, 215, 1)", // Point color
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(127, 180, 215, 1)",
      },
      {
        label: "Physics",
        data: [65, 86, 61, 82, 73],
        borderColor: "rgba(246, 203, 82, 1)",
        backgroundColor: "rgba(246, 203, 82, 0.2)",
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "rgba(246, 203, 82, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(246, 203, 82, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable maintaining the aspect ratio
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: "#333", // Legend color
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
      title: {
        display: true,
        text: "Tests Marks",
        font: {
          size: 18, // Customize the font size
        },
        color: "#333", // Title color
        padding: {
          top: 10,
          bottom: 5,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          color: "#333", // X-axis title color
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "#333", // X-axis labels color
        },
        grid: {
          display: false, // Disable vertical grid lines
        },
      },
      y: {
        title: {
          display: true,
          color: "#333", // Y-axis title color
          font: {
            size: 16,
          },
        },
        ticks: {
          beginAtZero: true,
          color: "#333", // Y-axis labels color
          stepSize: 10,
        },
        grid: {
          borderDash: [5, 5], // Optional: customize the appearance of the horizontal grid lines
        },
      },
    },
  };

  return (
    <div className="line-chart-container">
      <Line data={chartData} options={options} />{" "}
    </div>
  );
};

export default LineChart;
