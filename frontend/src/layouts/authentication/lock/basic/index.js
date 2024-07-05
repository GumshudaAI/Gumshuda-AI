 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/lock-basic.jpg";

function Basic() {
  return (
    <BasicLayout image={bgImage} button={{ variant: "gradient", color: "dark" }}>
      <Card>
        <ArgonBox p={3} my={3} textAlign="center">
          <ArgonTypography variant="h4" color="dark" fontWeight="bold">
            Mike Priesler
          </ArgonTypography>
          <ArgonTypography variant="body2" color="text" sx={{ mb: 3 }}>
            Enter password to unlock your account.
          </ArgonTypography>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mt={2} mb={1}>
              <ArgonButton variant="gradient" color="dark" size="large" fullWidth>
                Unlock
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
