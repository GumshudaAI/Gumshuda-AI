 

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Security page components
import FormField from "layouts/pages/account/components/FormField";

function ChangePassword() {
  return (
    <Card id="change-password">
      <ArgonBox pt={2} px={2} lineHeight={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Change Password
        </ArgonTypography>
        <ArgonTypography variant="button" fontWeight="regular" color="text">
          We will send you an email with the verification code.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox component="form" p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <ArgonBox mt={2}>
          <ArgonButton variant="gradient" color="dark" fullWidth>
            Update Password
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ChangePassword;
