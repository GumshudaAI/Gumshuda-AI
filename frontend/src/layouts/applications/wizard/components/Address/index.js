 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address() {
  return (
    <ArgonBox>
      <ArgonBox width="80%" textAlign="center" mx="auto" mb={4}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5" fontWeight="regular">
            Are you living in a nice area?
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="body2" fontWeight="regular" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the
          neighborhood woods before dinner
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FormField type="text" label="street name" placeholder="Eg. Soft" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField type="number" label="street number" placeholder="Eg. 221" />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormField type="text" label="city" placeholder="Eg. Tokyo" />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormField type="text" label="country" placeholder="Eg. Argentina" />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default Address;
