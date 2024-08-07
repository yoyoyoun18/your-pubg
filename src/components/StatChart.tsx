"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import useUserStore from "@/store/useUserStore";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function StatChart() {
  const { wins, losses } = useUserStore((state) => state.targetUser);
  const data = {
    labels: ["Win", "Lose"],
    datasets: [
      {
        data: [wins, losses],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const options: any = {
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (value: any) => {
          return value;
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.raw !== null) {
              label += context.raw;
            }
            return label;
          },
        },
      },
      legend: {
        display: true,
        position: "right",
      },
    },
    cutout: "30%", // 도넛 차트의 가운데 구멍 크기 조절
  };

  return (
    <div className="w-full h-full p-4 flex justify-center flex-col items-center">
      <div className="h-56 overflow-hidden">
        <Doughnut data={data} options={options} />
      </div>
      <div className="h-56 overflow-hidden">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default StatChart;
