 

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";

function configs(labels, datasets, customTick) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            callback: (value) => customTick + value,
            family: typography.fontFamily,
            display: true,
            padding: 10,
            color: "#9ca2b7",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            family: typography.fontFamily,
            display: true,
            padding: 10,
            color: "#9ca2b7",
          },
        },
      },
    },
  };
}

export default configs;
