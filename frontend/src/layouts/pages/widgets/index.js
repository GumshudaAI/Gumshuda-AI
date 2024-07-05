 

import { useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "examples/Cards/MasterCard";
import MiniInfoCard from "examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "examples/Cards/ControllerCard";
import Calendar from "examples/Calendar";
import CategoriesList from "examples/Lists/CategoriesList";

// Widgets page components
import Steps from "layouts/pages/widgets/components/Steps";
import FullBody from "layouts/pages/widgets/components/FullBody";
import MediaPlayer from "layouts/pages/widgets/components/MediaPlayer";
import OrdersOverview from "layouts/pages/widgets/components/OrdersOverview";
import UpcomingEvents from "layouts/pages/widgets/components/UpcomingEvents";
import Chart from "layouts/pages/widgets/components/Chart";

// Data
import progressLineChartData from "layouts/pages/widgets/data/progressLineChartData";
import calendarEventsData from "layouts/pages/widgets/data/calendarEventsData";
import categoriesListData from "layouts/pages/widgets/data/categoriesListData";
import incomeChartData from "layouts/pages/widgets/data/incomeChartData";
import caloriesChartData from "layouts/pages/widgets/data/caloriesChartData";

function Widgets() {
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <ArgonBox mb={3}>
                <MiniStatisticsCard
                  bgColor="dark"
                  title={{ text: "battery health", fontWeight: "regular" }}
                  count="99 %"
                  icon={{ component: "sports_esports" }}
                />
              </ArgonBox>
              <MiniStatisticsCard
                bgColor="dark"
                title={{ text: "music volume", fontWeight: "regular" }}
                count="15/100"
                icon={{ color: "info", component: "music_note" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Chart
                title="income"
                count="$130,832"
                percentage={{ color: "success", label: "+90%" }}
                chart={incomeChartData}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ProgressLineChart
                icon="date_range"
                title="Tasks"
                count={480}
                progress={60}
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="account_balance"
                title="salary"
                description="Belong Interactive"
                value="+$2000"
              />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="paypal"
                title="paypal"
                description="Freelance Payment"
                value="$455.00"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={
                  <Icon className={lights ? "text-white" : "text-dark"} fontSize="large">
                    lightbulb
                  </Icon>
                }
                title="Lights"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="calories"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon="shortcut"
                title={
                  <>
                    754&nbsp;
                    <ArgonTypography variant="button" color="secondary" fontWeight="medium">
                      m
                    </ArgonTypography>
                  </>
                }
                description="New York City"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: "calendar", date: "Monday, 2021" }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <ArgonBox mb={3}>
              <CategoriesList title="categories" categories={categoriesListData} />
            </ArgonBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Widgets;
