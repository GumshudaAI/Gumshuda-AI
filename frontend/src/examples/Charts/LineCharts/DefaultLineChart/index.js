import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// DefaultLineChart configurations
import configs from "examples/Charts/LineCharts/DefaultLineChart/configs";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

function DefaultLineChart({ title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
        pointBackgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        borderColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        maxBarThickness: 6,
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

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
          <PowerBox height={height}>
            <Line data={data} options={options} />
          </PowerBox>
        ),
        [chart, height]
      )}
    </PowerBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default DefaultLineChart;
