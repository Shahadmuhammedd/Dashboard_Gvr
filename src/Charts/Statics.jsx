import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

function Statics() {
  const data = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        label: 'User Statistics',
        data: [65, 35], 
        backgroundColor: ['#6F4FF2', '#E5E7EB'], 
        hoverBackgroundColor: ['#2563EB', '#D1D5DB'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    cutout: '80%', 
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
    <div className='w-[345px] h-[400px] ml-[100px] mt-10 bg-white shadow-2xl rounded-2xl py-8 px-3'>
      <div className="w-full h-64 bg-white flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-5 text-blue-800">Statistics</h2>
        <div className="relative flex items-center justify-center w-[280px] h-[280px] mt-4"> {/* Adjust size here */}
          <Doughnut data={data} options={options} width={280} height={280} /> {/* Manually control width/height */}
        </div>
        <div className="mt-10 flex items-center space-x-4">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
            <span>Active Users</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-2 bg-gray-200 rounded-full"></span>
            <span>Inactive Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statics;
