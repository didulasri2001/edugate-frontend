import React from "react";
import "./Attendence.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Attendence = ({ data, backgroungcolor, subject }) => {
  const totalAttendance = data.attendance[0];
  const studentAttendance = data.attendance[1];
  const studentAttendancePercentage =
    (studentAttendance / totalAttendance) * 100;
  const remainingPercentage = 100 - studentAttendancePercentage;

  const chartData = {
    labels: ["", "Your Attendance"], // Keep only "Your Attendance" label
    datasets: [
      {
        label: "Attendance",
        data: [remainingPercentage, studentAttendancePercentage],
        backgroundColor: ["rgba(249, 249, 247, 1)", backgroungcolor],
        borderColor: [backgroungcolor, backgroungcolor],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          filter: function (legendItem) {
            // Only show the "Your Attendance" label
            return legendItem.text === "Your Attendance";
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label;
            const value = tooltipItem.raw.toFixed(2) + "%";
            return `${label}: ${value}`;
          },
        },
      },
      title: {
        display: true,
        text: subject, // Set the title to "Chemistry"
        font: {
          size: 16, // Customize the font size
        },
        padding: {
          top: 10,
          bottom: 10,
        },
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
