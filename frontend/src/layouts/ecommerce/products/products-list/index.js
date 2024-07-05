 

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

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
import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <ArgonBox lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                All Products
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </ArgonTypography>
            </ArgonBox>
            <Stack spacing={1} direction="row">
              <Link to="/ecommerce/products/new-product">
                <ArgonButton variant="gradient" color="info" size="small">
                  + New Product
                </ArgonButton>
              </Link>
              <ArgonButton variant="outlined" color="info" size="small">
                Import
              </ArgonButton>
              <ArgonButton variant="outlined" color="info" size="small">
                Export
              </ArgonButton>
            </Stack>
          </ArgonBox>
          <DataTable
            table={dataTableData}
            entriesPerPage={{
              defaultValue: 7,
              entries: [5, 7, 10, 15, 20, 25],
            }}
            canSearch
          />
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;
