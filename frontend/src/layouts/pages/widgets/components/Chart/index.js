 

import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// Chart configurations
import configs from "layouts/pages/widgets/components/Chart/configs";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

function Chart({ title, count, percentage, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets.map((dataset) => ({
      ...dataset,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
      borderColor: colors[dataset.color].main,
      fill: true,
      maxBarThickness: 6,
      backgroundColor: gradientChartLine(
        chartRef.current.children[0],
        colors[dataset.color].main,
        0.075
      ),
    }));

    setChartData(configs(chart.labels, chartDatasets));
  }, [chart]);

  return (
    <Card>
      <ArgonBox p={2} lineHeight={1}>
        <ArgonTypography
          variant="button"
          textTransform="capitalize"
          fontWeight="medium"
          color="text"
        >
          {title}
        </ArgonTypography>
        <ArgonTypography variant="h5" fontWeight="bold" color="dark">
          {count}&nbsp;
          <ArgonTypography variant="button" fontWeight="bold" color={percentage.color}>
            {percentage.label}
          </ArgonTypography>
        </ArgonTypography>
      </ArgonBox>
      {useMemo(
        () => (
          <ArgonBox ref={chartRef} sx={{ height: "6.25rem" }}>
            <Line data={data} options={options} />
          </ArgonBox>
        ),
        [chartData]
      )}
    </Card>
  );
}

// Typechecking props for the Chart
Chart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }).isRequired,
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Chart;
