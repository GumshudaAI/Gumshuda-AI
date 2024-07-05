 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "examples/Charts/MixedChart";
import BubbleChart from "examples/Charts/BubbleChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "examples/Charts/PieChart";
import RadarChart from "examples/Charts/RadarChart";
import PolarChart from "examples/Charts/PolarChart";

// Data
import defaultLineChartData from "layouts/pages/charts/data/defaultLineChartData";
import gradientLineChartData from "layouts/pages/charts/data/gradientLineChartData";
import verticalBarChartData from "layouts/pages/charts/data/verticalBarChartData";
import horizontalBarChartData from "layouts/pages/charts/data/horizontalBarChartData";
import mixedChartData from "layouts/pages/charts/data/mixedChartData";
import bubbleChartData from "layouts/pages/charts/data/bubbleChartData";
import defaultDoughnutChartData from "layouts/pages/charts/data/defaultDoughnutChartData";
import pieChartData from "layouts/pages/charts/data/pieChartData";
import radarChartData from "layouts/pages/charts/data/radarChartData";
import polarChartData from "layouts/pages/charts/data/polarChartData";

function Charts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
              <ArgonTypography variant="h5">Charts</ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                Charts on this page use Chart.js - Simple yet flexible JavaScript charting for
                designers & developers.
              </ArgonTypography>
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultLineChart title="Line chart" chart={defaultLineChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GradientLineChart title="Line chart with gradient" chart={gradientLineChartData} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VerticalBarChart title="Bar chart" chart={verticalBarChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <HorizontalBarChart title="Bar chart horizontal" chart={horizontalBarChartData} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MixedChart title="Mixed chart" height="19.75rem" chart={mixedChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <BubbleChart title="Bubble chart" chart={bubbleChartData} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultDoughnutChart title="Doughnut chart" chart={defaultDoughnutChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <PieChart title="Pie chart" chart={pieChartData} />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RadarChart title="Radar chart" chart={radarChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <PolarChart title="Polar chart" chart={polarChartData} />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
