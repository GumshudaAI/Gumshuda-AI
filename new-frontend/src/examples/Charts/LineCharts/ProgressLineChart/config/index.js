 

/* eslint-disable no-dupe-keys */
// Gumshuda AI MUI helper functions
import rgba from "assets/theme/functions/rgba";

// Gumshuda AI MUI base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

const { gradients } = colors;

function configs(color, labels, label, data) {
  return {
    data: {
      labels,
      datasets: [
        {
          label,
          tension: 0.3,
          pointRadius: 2,
          pointBackgroundColor: gradients[color] ? gradients[color].main : gradients.info.main,
          borderColor: gradients[color] ? gradients[color].main : gradients.info.main,
          borderWidth: 2,
          backgroundColor: gradients[color]
            ? rgba(gradients[color].main, 0.1)
            : rgba(gradients.dark.main, 0.1),
          maxBarThickness: 6,
          fill: true,
          data,
        },
      ],
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
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
            font: {
              family: typography.fontFamily,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            color: "#252f40",
            padding: 10,
            font: {
              family: typography.fontFamily,
            },
          },
        },
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
            font: {
              family: typography.fontFamily,
            },
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
            display: true,
            padding: 10,
            color: "#9ca2b7",
            font: {
              family: typography.fontFamily,
            },
          },
        },
      },
    },
  };
}

export default configs;
