 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Automotive dashboard components
import AutomotiveDetails from "layouts/dashboards/automotive/components/AutomotiveDetails";
import AutomotiveMonitor from "layouts/dashboards/automotive/components/AutomotiveMonitor";

function Automotive() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox pt={3}>
        <ArgonBox mb={3}>
          <AutomotiveDetails />
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "today's trip", fontWeight: "medium" }}
                count="145 Km"
                icon={{ component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "battery health", fontWeight: "medium" }}
                count="99 %"
                icon={{ component: "sports_esports" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "average speed", fontWeight: "medium" }}
                count="56 Km/h"
                icon={{ component: "speed" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "music volume", fontWeight: "medium" }}
                count="15/100"
                icon={{ color: "info", component: "music_note" }}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <AutomotiveMonitor />
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Automotive;
