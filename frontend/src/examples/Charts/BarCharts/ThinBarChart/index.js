 

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// ThinBarChart configuration
import configs from "examples/Charts/BarCharts/ThinBarChart/configs";

function ThinBarChart({ color, title, height, chart }) {
  const { data, options } = configs(color, chart.labels || [], chart.datasets || {});

  const renderChart = (
    <ArgonBox p={2}>
      {title && (
        <ArgonBox mb={1}>
          <ArgonTypography variant="h6" color={color}>
            {title}
          </ArgonTypography>
        </ArgonBox>
      )}
      {useMemo(
        () => (
          <ArgonBox height={height} pt={2}>
            <Bar data={data} options={options} />
          </ArgonBox>
        ),
        [chart, height]
      )}
    </ArgonBox>
  );

  return title ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of ThinBarChart
ThinBarChart.defaultProps = {
  color: "dark",
  title: "",
  height: "12.5rem",
};

// Typechecking props for the ThinBarChart
ThinBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string,
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
    ).isRequired,
  }).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ThinBarChart;
