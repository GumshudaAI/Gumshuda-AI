 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";

function EditProduct() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <ArgonBox mb={3} position="relative">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <ArgonTypography variant="h4" color="white" fontWeight="medium">
                Make the changes below
              </ArgonTypography>
              <ArgonBox mt={1} mb={2}>
                <ArgonTypography variant="body2" color="white">
                  We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                  have the opportunity to play.
                </ArgonTypography>
              </ArgonBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ArgonBox display="flex" justifyContent="flex-end">
                <ArgonButton variant="outlined" color="white">
                  Save
                </ArgonButton>
              </ArgonBox>
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;
