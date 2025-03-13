import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const PerformanceChart = () => {
  const data = {
    labels: ["Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24"],
    datasets: [
      {
        label: "Performance",
        data: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
        borderColor: "#A17ACC",
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(184, 138, 255, 0.01)");
          gradient.addColorStop(1, "rgba(184, 138, 255, 0.05)");
          return gradient;
        },
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { 
          color: "#CCCCCC",
          font: {
            family: "Poppins",
            weight: '200'
          }
        },
        grid: { display: false }
      },
      y: {
        min: 0,
        max: 1,
        ticks: { display: false },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    }
  };

  return (
    <div className="w-1/2 h-[220px] py-4 px-6 flex flex-col gap-[24px]" style={{ background: "#291A42" }}>
      <p className="text-white font-poppins mb-0">Your Performance last 6 Months</p>
      <div style={{ height: "147px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
