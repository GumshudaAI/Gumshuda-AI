 

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/ecommerce/orders/order-list/data/dataTableData";

function OrderList() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <MenuItem onClick={closeMenu}>
        <ArgonTypography variant="button" color="error" fontWeight="regular">
          Remove Filter
        </ArgonTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <ArgonButton variant="outlined" color="white">
            New order
          </ArgonButton>
          <ArgonBox display="flex">
            <ArgonButton variant="outlined" color="white" onClick={openMenu}>
              Filters&nbsp;
              <Icon>keyboard_arrow_down</Icon>
            </ArgonButton>
            {renderMenu}
            <ArgonBox ml={1}>
              <ArgonButton variant="outlined" color="white">
                <Icon>description</Icon>
                &nbsp;Export CSV
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <Card>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
