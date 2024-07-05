 

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <ArgonBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <ArgonTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </ArgonTypography>
      </ArgonBox>
    );
  });

  return (
    <Card id="change-password">
      <ArgonBox p={3}>
        <ArgonTypography variant="h5">Change Password</ArgonTypography>
      </ArgonBox>
      <ArgonBox component="form" pb={3} px={3}>
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
        <ArgonBox mt={6} mb={1}>
          <ArgonTypography variant="h5">Password requirements</ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1}>
          <ArgonTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <ArgonBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </ArgonBox>
          <ArgonBox ml="auto">
            <ArgonButton variant="gradient" color="dark" size="small">
              Update Password
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default ChangePassword;
