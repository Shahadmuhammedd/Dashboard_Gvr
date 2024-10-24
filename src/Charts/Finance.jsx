import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Finance = () => {

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [65, 59, 80, 81, 56, 85, 90],
        backgroundColor: '#FB7D5B',
        borderRadius: {
          topLeft: 10,
          topRight: 10,
        },
        borderWidth: 1,
        borderColor: '#FB7D5B',
      },
      {
        label: 'Last Week',
        data: [75, 69, 70, 91, 66, 95, 100],
        backgroundColor: '#FCC43E',
        borderRadius: {
          topLeft: 10,
          topRight: 10,
        },
        borderWidth: 1,
        borderColor: '#FCC43E',
      },
    ],
  };

  
  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}% Income`,
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="w-[345px] h-[400px]  mt-10 -ml-[46px] bg-white shadow-2xl rounded-2xl py-8 px-3 ">
      <h1 className="text-blue-800 font-bold text-lg -mt-4 ">Finance</h1>
      <Bar data={chartData} options={chartOptions} height={300} width={345} />
    </div>
  );
};

export default Finance;
