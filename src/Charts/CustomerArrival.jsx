import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Settings } from "lucide-react";

// Register necessary Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const CustomerArrival = () => {
 
  const chartData = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1), 
    datasets: [
      {
        label: "Customer Arrival",
        data: [
          100, 200, 300, 500, 600, 700, 900, 800, 600, 400, 
          300, 400, 500, 700, 600, 400, 300, 200, 100, 150,
          300, 400, 500, 450, 350, 300, 400, 500, 600, 700, 
          800, 900 
        ], 
        borderColor: "rgba(59, 130, 246, 0.8)", 
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        pointRadius: 4, 
        fill: true,
      },
     
      {
        label: "Last Week",
        data: [
          30, 100, 150, 200, 350, 400, 300, 200, 100, 150,
          200, 250, 300, 400, 300, 200, 150, 100, 50, 30,
          100, 200, 150, 100, 50, 30, 100, 200, 250, 300,
          200, 100 
        ],
        borderColor: "rgba(70, 130, 180, 0.8)", 
        backgroundColor: "rgba(70, 130, 180, 0.2)",
        pointRadius: 5, 
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200, 
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="ml-24 mt-10 bg-white w-[750px] shadow-2xl rounded-2xl py-10 h-[350px] px-5">
      <div className="w-full h-64 p-4 -mt-9">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Customer Arrival</h2>
          <Settings className="cursor-pointer" /> {/* Add cursor pointer for UX */}
        </div>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CustomerArrival;
