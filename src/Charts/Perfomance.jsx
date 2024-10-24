import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

function Perfomance() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      const gradientThisWeek = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradientThisWeek.addColorStop(0, "rgba(255, 159, 64, 0.5)");
      gradientThisWeek.addColorStop(1, "rgba(255, 159, 64, 0)");

      const gradientLastWeek = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradientLastWeek.addColorStop(0, "rgba(255, 99, 132, 0.5)");
      gradientLastWeek.addColorStop(1, "rgba(255, 99, 132, 0)");

      chart.data.datasets[0].backgroundColor = gradientThisWeek;
      chart.data.datasets[1].backgroundColor = gradientLastWeek;

      chart.update();
    }
  }, []);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "This Week",
        data: [5, 15, 30, 45, 50, 40, 55, 40, 25, 30, 60, 50],
        borderColor: "rgba(255, 159, 64, 1)",
        fill: true,
        tension: 0.1, 
        pointBorderColor: "rgba(255, 159, 64, 1)",
        pointBackgroundColor: "rgba(255, 159, 64, 0.5)",
      },
      {
        label: "Last Week",
        data: [20, 35, 25, 45, 70, 60, 50, 30, 45, 65, 80, 55],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: true,
        tension: 0.1,
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 15,
          usePointStyle: true,
          font: {
            size: 12,
          },
          color: "#4B5563",
        },
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="ml-24 mt-10 bg-white w-[750px] h-auto shadow-2xl rounded-2xl p-6">
      <h2
        className="text-xl mb-6 text-blue-800 font-bold"
        aria-label="Performance Chart"
      >
        Performance
      </h2>
      <div className="relative -top-2">
        <Line ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Perfomance;
