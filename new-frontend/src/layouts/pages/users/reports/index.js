 

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Table from "examples/Tables/Table";

// Reports page components
import Reviews from "layouts/pages/users/reports/components/Reviews";

// Data
import tableData from "layouts/pages/users/reports/data/tableData";

function Reports() {
  const { columns, rows } = tableData;

  // ComplexStatisticsCard dropdown menu state
  const [usersActiveMenu, setUsersActiveMenu] = useState(null);
  const [clickEventsMenu, setClickEventsMenu] = useState(null);
  const [purchasesMenu, setPurchasesMenu] = useState(null);
  const [likesMenu, setLikesMenu] = useState(null);

  // ComplexStatisticsCard dropdown menu handlers
  const openUsersActiveMenu = (event) => setUsersActiveMenu(event.currentTarget);
  const closeUsersActiveMenu = () => setUsersActiveMenu(null);
  const openClickEventsMenu = (event) => setClickEventsMenu(event.currentTarget);
  const closeClickEventsMenu = () => setClickEventsMenu(null);
  const openPurchasesMenu = (event) => setPurchasesMenu(event.currentTarget);
  const closePurchasesMenu = () => setPurchasesMenu(null);
  const openLikesMenu = (event) => setLikesMenu(event.currentTarget);
  const closeLikesMenu = () => setLikesMenu(null);

  // Dropdown menu template for the ComplexProjectCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports1.jpg"
                    icon="account_circle"
                    count={{ number: 1600, label: "users active" }}
                    percentage="+55%"
                    dropdown={{
                      action: openUsersActiveMenu,
                      menu: renderMenu(usersActiveMenu, closeUsersActiveMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports2.jpg"
                    icon="touch_app"
                    count={{ number: 357, label: "click events" }}
                    percentage="+124%"
                    dropdown={{
                      action: openClickEventsMenu,
                      menu: renderMenu(clickEventsMenu, closeClickEventsMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports3.jpg"
                    icon="shopping_cart"
                    count={{ number: 2300, label: "purchases" }}
                    percentage="+55%"
                    dropdown={{
                      action: openPurchasesMenu,
                      menu: renderMenu(purchasesMenu, closePurchasesMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reports4.jpg"
                    icon="thumb_up"
                    count={{ number: 940, label: "likes" }}
                    percentage="+90%"
                    dropdown={{
                      action: openLikesMenu,
                      menu: renderMenu(likesMenu, closeLikesMenu),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Reviews />
            </Grid>
          </Grid>
        </ArgonBox>
        <Table columns={columns} rows={rows} />
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
