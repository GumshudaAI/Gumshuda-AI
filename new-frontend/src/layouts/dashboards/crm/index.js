 
import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CategoriesList from "examples/Lists/CategoriesList";
import MessageCard from "examples/Cards/MessageCard";
import RankingsList from "examples/Lists/RankingsList";
import Calendar from "examples/Calendar";

// Data
import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";
import categoriesListData from "layouts/dashboards/crm/data/categoriesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";

// Images
import ivancik from "assets/images/ivancik.jpg";
import kalVisualsSquare from "assets/images/kal-visuals-square.jpg";

function CRM() {
  const { visitorsChart, incomeChart } = miniGradientLineChartData;
  const { transactionsData, revenueData } = rankingsListData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
                    title="visitors"
                    description={
                      <ArgonTypography variant="h5" fontWeight="bold">
                        5,927{" "}
                        <ArgonTypography variant="button" color="success" fontWeight="bold">
                          +55%
                        </ArgonTypography>
                      </ArgonTypography>
                    }
                    chart={visitorsChart}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MiniGradientLineChart
                    title="income"
                    description={
                      <ArgonTypography variant="h5" fontWeight="bold">
                        $130,832{" "}
                        <ArgonTypography variant="button" color="success" fontWeight="bold">
                          +90%
                        </ArgonTypography>
                      </ArgonTypography>
                    }
                    chart={incomeChart}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <PlaceholderCard title={{ variant: "h6", text: "New tab" }} hasBorder />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ArgonBox mt={3}>
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
                </ArgonBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <BackgroundBlogCard
                    image={ivancik}
                    title="hey john!"
                    description={
                      <>
                        Wealth creation is an evolutionarily recent <br />
                        positive-sum game. It is all about who take the opportunity first.
                      </>
                    }
                    buttonText="read more"
                    action={{ type: "internal", route: "/dashboards/crm", label: "read more" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <CategoriesList title="categories" categories={categoriesListData} />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <MessageCard
                    image={kalVisualsSquare}
                    text="Today is Martina's birthday. Wish her the best of luck!"
                    action={{
                      type: "internal",
                      route: "/dashboards/crm",
                      color: "dark",
                      label: "Send Message",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RankingsList
              title="transactions"
              date="23 - 30 March 2021"
              rankings={transactionsData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RankingsList title="revenue" date="01 - 07 June 2021" rankings={revenueData} />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CRM;
