import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// GradientLineChart configurations
import configs from "examples/Charts/LineCharts/GradientLineChart/configs";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

function GradientLineChart({ title, description, height, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => ({
          ...dataset,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: colors[dataset.color]
            ? colors[dataset.color || "dark"].main
            : colors.dark.main,
          fill: true,
          maxBarThickness: 6,
          backgroundColor: gradientChartLine(
            chartRef.current.children[0],
            colors[dataset.color] ? colors[dataset.color || "dark"].main : colors.dark.main
          ),
        }))
      : [];

    setChartData(configs(chart.labels || [], chartDatasets));
  }, [chart]);

  const renderChart = (
    <PowerBox p={2}>
      {title || description ? (
        <PowerBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <PowerBox mb={1}>
              <PowerTypography variant="h6">{title}</PowerTypography>
            </PowerBox>
          )}
          <PowerBox mb={2}>
            <PowerTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </PowerTypography>
          </PowerBox>
        </PowerBox>
      ) : null}
      {useMemo(
        () => (
          <PowerBox ref={chartRef} sx={{ height }}>
            <Line data={data} options={options} />
          </PowerBox>
        ),
        [chartData, height]
      )}
    </PowerBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of GradientLineChart
GradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the GradientLineChart
GradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default GradientLineChart;
