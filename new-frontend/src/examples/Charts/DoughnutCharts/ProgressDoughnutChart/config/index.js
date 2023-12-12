 

/* eslint-disable no-dupe-keys */
// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

const { gradients } = colors;

function configs(labels, datasets) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color, index) => {
      if (gradients[color]) {
        if (index === 0) {
          backgroundColors.push(gradients[color].main);
        } else {
          backgroundColors.push(gradients[color].state);
        }
      } else {
        backgroundColors.push(gradients.info.main);
      }
    });
  } else {
    backgroundColors.push(gradients.info.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          weight: 9,
          cutout: 50,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: backgroundColors,
          fill: false,
          data: datasets.data,
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
            display: false,
          },
        },
      },
    },
  };
}

export default configs;
