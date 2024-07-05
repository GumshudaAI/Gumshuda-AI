 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <ArgonBox>
      <ArgonTypography variant="h5" fontWeight="bold">
        Socials
      </ArgonTypography>
      <ArgonBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="shoppify handle" placeholder="@soft" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="facebook account" placeholder="https://..." />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="instagram account" placeholder="https://..." />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default Socials;
