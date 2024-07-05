/* eslint-disable no-unused-vars */
/* eslint-disable   */

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import typography from "assets/theme/base/typography";

// Dashboard layout components

import TeamMembers from "layouts/dashboards/default/components/TeamMembers";
import TodoList from "layouts/dashboards/default/components/TodoList";
import BalanceCard from "layouts/dashboards/default/components/BalanceCard";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <PowerBox py={3}>
        <img width="600" height="400" src={ComImage}></img>
      </PowerBox> */}
      <PowerBox py={3}>
        <Grid container item mb={5} xs={12} lg={9} spacing={3}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} md={7}>
              <BalanceCard
                route="/search-lost-item"
                buttonTitle="Search!"
                subtitle="Search for your lost items!"
                title="Search for a lost item"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <BalanceCard
                route="/post-found-item"
                buttonTitle="Post!"
                subtitle="If you found a stranded item, post it here!"
                title="Post a found Item"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Last 24 Hours Activity Overview"
              description={
                <PowerBox display="flex" alignItems="center">
                  <PowerBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </PowerBox>
                  <PowerTypography variant="button" color="text" fontWeight="medium">
                    94% more{" "}
                    <PowerTypography variant="button" color="text" fontWeight="regular">
                      in July 2024
                    </PowerTypography>
                  </PowerTypography>
                </PowerBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          {/* 
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid> */}
          <Grid container spacing={3} m={2}>
            <Grid item xs={12} md={6} lg={4}>
              <TeamMembers />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TodoList />
            </Grid>
            <Grid item xs={12} lg={5}>
              {/* <Post /> */}
            </Grid>
          </Grid>
        </Grid>
      </PowerBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
