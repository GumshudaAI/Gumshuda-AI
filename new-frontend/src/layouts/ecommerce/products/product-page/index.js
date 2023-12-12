 

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/products/product-page/components/ProductImages";
import ProductInfo from "layouts/ecommerce/products/product-page/components/ProductInfo";

// Data
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

function ProductPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <ArgonBox p={3}>
            <ArgonBox mb={3}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Product Details
              </ArgonTypography>
            </ArgonBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ProductImages />
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <ProductInfo />
              </Grid>
            </Grid>

            <ArgonBox mt={8} mb={2}>
              <ArgonBox mb={1} ml={2}>
                <ArgonTypography variant="h5" fontWeight="medium">
                  Other Products
                </ArgonTypography>
              </ArgonBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </ArgonBox>
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductPage;
