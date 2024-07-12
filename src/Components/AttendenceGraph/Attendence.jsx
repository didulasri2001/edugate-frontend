import React from "react";
import "./Attendence.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Attendence = ({ data }) => {
  const chartData = {
    labels: ["Total Attendance", "Student Attendance"],
    datasets: [
      {
        label: "Attendance",
        data: data.attendance,
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw;
          },
        },
      },
      title: {
        display: true,
        text: "Student Attendance",
      },
    },
  };

  return (
    <div className="graph-container">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default Attendence;
