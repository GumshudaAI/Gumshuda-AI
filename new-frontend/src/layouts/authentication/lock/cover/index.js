 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import ArgonAvatar from "components/ArgonAvatar";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import profileImage from "assets/images/team-2.jpg";
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/lock-cover.jpg";

function Cover() {
  return (
    <CoverLayout image={bgImage} button={{ color: "dark", variant: "gradient" }}>
      <Card sx={{ overflow: "visible", mt: -4 }}>
        <ArgonBox p={3} textAlign="center">
          <ArgonBox mt={-8} mb={3}>
            <ArgonAvatar
              size="xxl"
              shadow="md"
              variant="rounded"
              alt="Image placeholder"
              src={profileImage}
              sx={{ mx: "auto", border: "1px solid white" }}
            />
          </ArgonBox>
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
            <ArgonBox mt={4} mb={1} textAlign="center">
              <ArgonButton variant="gradient" color="dark" size="large">
                Unlock
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
