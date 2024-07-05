 

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Doughnut } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import ReportsDoughnutChartItem from "examples/Charts/DoughnutCharts/ReportsDoughnutChart/ReportsDoughnutChartItem";

// ReportsDoughnutChart configurations
import configs from "examples/Charts/DoughnutCharts/ReportsDoughnutChart/configs";

function ReportsDoughnutChart({ title, count, chart, tooltip }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderItems =
    chart.labels && chart.datasets
      ? chart.labels.map((label, key) => (
          <ReportsDoughnutChartItem
            color={chart.datasets.backgroundColors ? chart.datasets.backgroundColors[key] : "dark"}
            title={label}
            key={label}
            percentage={`${chart.datasets.data ? chart.datasets.data[key] : 0}%`}
            hasBorder={key !== chart.labels.length - 1}
          />
        ))
      : null;

  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6">{title}</ArgonTypography>
        <Tooltip title={tooltip} placement="bottom" arrow>
          <ArgonButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </ArgonButton>
        </Tooltip>
      </ArgonBox>
      <ArgonBox p={2}>
        {useMemo(
          () => (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <ArgonBox height="100%" textAlign="center" position="relative">
                  <ArgonBox height={{ xs: "65%", sm: "100%" }} mt={{ xs: 6, sm: 0 }}>
                    <Doughnut data={data} options={options} />
                  </ArgonBox>
                  <ArgonBox
                    mt={{ xs: 0, sm: -15.25 }}
                    position="relative"
                    top={{ xs: "-8.25rem", sm: 0 }}
                  >
                    <ArgonTypography variant="h4" fontWeight="medium">
                      {count.number}
                    </ArgonTypography>
                    <ArgonTypography
                      variant="button"
                      color="text"
                      textTransform="uppercase"
                      fontWeight="medium"
                    >
                      {count.text}
                    </ArgonTypography>
                  </ArgonBox>
                </ArgonBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                {renderItems}
              </Grid>
            </Grid>
          ),
          [chart]
        )}
      </ArgonBox>
    </Card>
  );
}

// Setting default values for the props of ReportsDoughnutChart
ReportsDoughnutChart.defaultProps = {
  tooltip: "",
};

// Typechecking props for the ReportsDoughnutChart
ReportsDoughnutChart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired,
  }).isRequired,
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])
    ).isRequired,
  }).isRequired,
  tooltip: PropTypes.string,
};

export default ReportsDoughnutChart;
