import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerProgress from "components/PowerProgress";

// ProgressLineChart configurations
import configs from "examples/Charts/LineCharts/ProgressLineChart/config";

function ProgressLineChart({ color, icon, title, count, progress, height, chart }) {
  const { data, options } = configs(color, chart.labels || [], title, chart.data || []);

  return (
    <Card>
      <PowerBox display="flex" alignItems="center" pt={2} px={2}>
        <PowerBox
          width="3rem"
          height="3rem"
          display="grid"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          shadow="md"
          color="white"
          bgColor={color}
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </PowerBox>
        <PowerBox ml={2} lineHeight={1}>
          <PowerTypography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
            color="text"
          >
            {title}
          </PowerTypography>
          {count ? (
            <PowerTypography variant="h5" fontWeight="bold">
              {count}
            </PowerTypography>
          ) : null}
        </PowerBox>
        <PowerBox width="25%" ml="auto">
          <PowerTypography display="block" variant="caption" fontWeight="medium" color="text">
            {progress}%
          </PowerTypography>
          <PowerBox mt={0.25}>
            <PowerProgress
              variant="gradient"
              color={color}
              value={progress}
              sx={{ height: "8px" }}
            />
          </PowerBox>
        </PowerBox>
      </PowerBox>
      {useMemo(
        () => (
          <PowerBox mt={2}>
            <Line data={data} options={options} style={{ height }} />
          </PowerBox>
        ),
        [chart, height, color]
      )}
    </Card>
  );
}

// Setting default values for the props of ProgressLineChart
ProgressLineChart.defaultProps = {
  color: "info",
  count: 0,
  height: "6.25rem",
};

// Typechecking props for the ProgressLineChart
ProgressLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progress: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProgressLineChart;
