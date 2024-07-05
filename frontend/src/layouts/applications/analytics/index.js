 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonBadgeDot from "components/ArgonBadgeDot";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import ComplexReportsDoughnutChart from "examples/Charts/DoughnutCharts/ComplexReportsDoughnutChart";

// Analytics application components
import Social from "layouts/applications/analytics/components/Social";
import Pages from "layouts/applications/analytics/components/Pages";

// Data
import defaultLineChartData from "layouts/applications/analytics/data/defaultLineChartData";
import complexReportsDoughnutChartData from "layouts/applications/analytics/data/complexReportsDoughnutChartData";

function Analytics() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Yesterday</MenuItem>
      <MenuItem onClick={closeMenu}>Last 7 days</MenuItem>
      <MenuItem onClick={closeMenu}>Last 30 days</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox display="flex" justifyContent="flex-end" mb={3} ml={2}>
          <ArgonBox mr={3}>
            <ArgonButton variant="outlined" color="white">
              Export&nbsp;&nbsp;
              <Icon>folder</Icon>
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="gradient" color="dark" onClick={openMenu}>
            Today&nbsp;
            <Icon>expand_more</Icon>
          </ArgonButton>
          {renderMenu}
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "users", fontWeight: "medium" }}
                count="930"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "dark", component: "account_circle" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "new users", fontWeight: "medium" }}
                count="744"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "dark", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "sessions", fontWeight: "medium" }}
                count="1,414"
                percentage={{ color: "success", text: "-2%" }}
                icon={{ color: "dark", component: "watch" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "Pages/Session", fontWeight: "medium" }}
                count="1.76"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "dark", component: "image" }}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <DefaultLineChart
                title="Traffic channels"
                description={
                  <ArgonBox display="flex" ml={-1}>
                    <ArgonBadgeDot color="info" size="sm" badgeContent="Organic search" />
                    <ArgonBadgeDot color="dark" size="sm" badgeContent="Referral" />
                    <ArgonBadgeDot color="primary" size="sm" badgeContent="Social media" />
                  </ArgonBox>
                }
                chart={defaultLineChartData}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <ComplexReportsDoughnutChart
                title="Referrals"
                chart={complexReportsDoughnutChartData}
                tooltip="See which websites are sending traffic to your website"
                action={{
                  type: "internal",
                  route: "/",
                  color: "secondary",
                  label: "See All Referrals",
                }}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Social />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Pages />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
