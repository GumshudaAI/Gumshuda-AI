 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import SalesTable from "examples/Tables/SalesTable";
import DataTable from "examples/Tables/DataTable";

// Overview page components
import ChannelsChart from "layouts/ecommerce/overview/components/ChannelsChart";

// Data
import defaultLineChartData from "layouts/ecommerce/overview/data/defaultLineChartData";
import horizontalBarChartData from "layouts/ecommerce/overview/data/horizontalBarChartData";
import salesTableData from "layouts/ecommerce/overview/data/salesTableData";
import dataTableData from "layouts/ecommerce/overview/data/dataTableData";

function Overview() {
  // DefaultStatisticsCard state for the dropdown value
  const [salesDropdownValue, setSalesDropdownValue] = useState("6 May - 7 May");
  const [customersDropdownValue, setCustomersDropdownValue] = useState("6 May - 7 May");
  const [revenueDropdownValue, setRevenueDropdownValue] = useState("6 May - 7 May");

  // DefaultStatisticsCard state for the dropdown action
  const [salesDropdown, setSalesDropdown] = useState(null);
  const [customersDropdown, setCustomersDropdown] = useState(null);
  const [revenueDropdown, setRevenueDropdown] = useState(null);

  // DefaultStatisticsCard handler for the dropdown action
  const openSalesDropdown = ({ currentTarget }) => setSalesDropdown(currentTarget);
  const closeSalesDropdown = ({ currentTarget }) => {
    setSalesDropdown(null);
    setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openCustomersDropdown = ({ currentTarget }) => setCustomersDropdown(currentTarget);
  const closeCustomersDropdown = ({ currentTarget }) => {
    setCustomersDropdown(null);
    setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openRevenueDropdown = ({ currentTarget }) => setRevenueDropdown(currentTarget);
  const closeRevenueDropdown = ({ currentTarget }) => {
    setRevenueDropdown(null);
    setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
  };

  // Dropdown menu template for the DefaultStatisticsCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
      disableAutoFocusItem
    >
      <MenuItem onClick={close}>Last 7 days</MenuItem>
      <MenuItem onClick={close}>Last week</MenuItem>
      <MenuItem onClick={close}>Last 30 days</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="sales"
                count="$230,220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openSalesDropdown,
                  menu: renderMenu(salesDropdown, closeSalesDropdown),
                  value: salesDropdownValue,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="customers"
                count="3.200"
                percentage={{
                  color: "success",
                  value: "+12%",
                  label: "since last month",
                }}
                dropdown={{
                  action: openCustomersDropdown,
                  menu: renderMenu(customersDropdown, closeCustomersDropdown),
                  value: customersDropdownValue,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DefaultStatisticsCard
                title="avg. revenue"
                count="$1.200"
                percentage={{
                  color: "secondary",
                  value: "+$213",
                  label: "since last month",
                }}
                dropdown={{
                  action: openRevenueDropdown,
                  menu: renderMenu(revenueDropdown, closeRevenueDropdown),
                  value: revenueDropdownValue,
                }}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <ChannelsChart />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <DefaultLineChart
                title="Revenue"
                description={
                  <ArgonBox display="flex" justifyContent="space-between">
                    <ArgonBox display="flex" ml={-1}>
                      <ArgonBadgeDot color="info" size="sm" badgeContent="Facebook Ads" />
                      <ArgonBadgeDot color="dark" size="sm" badgeContent="Google Ads" />
                    </ArgonBox>
                    <ArgonBox mt={-5.25} mr={-1}>
                      <Tooltip title="See which ads perform better" placement="left" arrow>
                        <ArgonButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          circular
                          iconOnly
                        >
                          <Icon>priority_high</Icon>
                        </ArgonButton>
                      </Tooltip>
                    </ArgonBox>
                  </ArgonBox>
                }
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <HorizontalBarChart title="Sales by age" chart={horizontalBarChartData} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <SalesTable title="Sales by Country" rows={salesTableData} />
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <ArgonBox pt={3} px={3}>
                <ArgonTypography variant="h6" fontWeight="medium">
                  Top Selling Products
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox py={1}>
                <DataTable
                  table={dataTableData}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                />
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
