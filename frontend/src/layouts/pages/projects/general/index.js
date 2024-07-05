 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AnimatedStatisticsCard from "examples/Cards/StatisticsCards/AnimatedStatisticsCard";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import AnnouncementCard from "examples/Cards/AnnouncementCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import ProgressDoughnutChart from "examples/Charts/DoughnutCharts/ProgressDoughnutChart";

// General page components
import TodoList from "layouts/pages/projects/general/components/TodoList";

// Data
import progressLineChartData from "layouts/pages/projects/general/data/progressLineChartData";
import progressDoughnutChartData from "layouts/pages/projects/general/data/progressDoughnutChartData";

// Images
import team3 from "assets/images/team-3.jpg";

function General() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <AnimatedStatisticsCard
                  title="earnings"
                  count="$15,800"
                  description=" They're slowed down by their perception of themselves."
                  percentage={{
                    color: "dark",
                    label: "+15% since last week",
                  }}
                  action={{
                    type: "internal",
                    route: "/pages/projects/general",
                    label: "View More",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ArgonBox mb={3}>
                  <DetailedStatisticsCard
                    title="today's money"
                    count="$53,000"
                    icon={{ color: "dark", component: <i className="ni ni-money-coins" /> }}
                    percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
                  />
                </ArgonBox>
                <DetailedStatisticsCard
                  title="sessions"
                  count="9,600"
                  icon={{ color: "dark", component: <i className="ni ni-planet" /> }}
                  percentage={{ color: "success", count: "+2%", text: "since yesterday" }}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ArgonBox mb={3}>
                  <DetailedStatisticsCard
                    title="today's users"
                    count="2,300"
                    icon={{ color: "dark", component: <i className="ni ni-world" /> }}
                    percentage={{ color: "error", count: "-1%", text: "since last week" }}
                  />
                </ArgonBox>
                <DetailedStatisticsCard
                  title="sign-ups"
                  count="348"
                  icon={{ color: "dark", component: <i className="ni ni-cart" /> }}
                  percentage={{ color: "success", count: "+12%", text: "since last quarter" }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ArgonBox my={3}>
                <TodoList />
              </ArgonBox>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AnnouncementCard
                  by={{ image: team3, name: "lucas prila", date: "2h ago" }}
                  badge={{ color: "info", label: "recommendation" }}
                  title="I need a Ruby developer for my new website."
                  description="The website was initially built in PHP, I need a professional ruby programmer to shift it."
                  value={{ type: "$", amount: "3,000", method: "month" }}
                  action={{ type: "internal", route: "/pages/projects/general", label: "Apply" }}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressLineChart
                  icon="date_range"
                  title="Tasks"
                  count={480}
                  progress={60}
                  chart={progressLineChartData}
                />
              </Grid>
              <Grid item xs={12}>
                <ProgressDoughnutChart
                  icon="workspace_premium"
                  title="projects"
                  count={115}
                  chart={progressDoughnutChartData}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default General;
