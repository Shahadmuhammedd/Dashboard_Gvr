import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, ChartDataLabels);

function Revenue() {
  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "#6F4FF2",
          "#FF4550",
          "#C1BBEB",
        ],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
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
    <div className="w-[345px] h-[400px] ml-[50px] mt-10 bg-white shadow-2xl rounded-2xl py-10 px-10">
      <div className="w-full h-64 bg-white flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-14 text-blue-800 -mt-10 ">
          Revenue
        </h2>

        <div>
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Revenue;
