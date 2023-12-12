 

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonSelect from "components/ArgonSelect";
import ArgonTypography from "components/ArgonTypography";

// Security page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import FormField from "layouts/pages/account/components/FormField";
import SecuritySettings from "layouts/pages/account/security/components/SecuritySettings";
import Authentication from "layouts/pages/account/security/components/Authentication";
import ChangePassword from "layouts/pages/account/security/components/ChangePassword";
import PasswordRequirements from "layouts/pages/account/security/components/PasswordRequirements";

function Security() {
  return (
    <BaseLayout stickyNavbar>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} sm={6}>
          <ArgonBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
            <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <ArgonTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                security question
              </ArgonTypography>
            </ArgonBox>
            <ArgonSelect
              placeholder="Question 1"
              options={[
                { value: "question 1", label: "Question 1" },
                { value: "question 2", label: "Question 2" },
                { value: "question 3", label: "Question 3" },
                { value: "your question", label: "Your Question", isDisabled: true },
              ]}
            />
          </ArgonBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField label="your answer" placeholder="Enter your answer" />
        </Grid>
      </Grid>
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SecuritySettings />
          </Grid>
          <Grid item xs={12} md={6}>
            <Authentication />
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ChangePassword />
          </Grid>
          <Grid item xs={12} md={6}>
            <PasswordRequirements />
          </Grid>
        </Grid>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Security;
