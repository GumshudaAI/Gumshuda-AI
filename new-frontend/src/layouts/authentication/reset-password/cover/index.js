 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reset-cover.jpg";

function Cover() {
  return (
    <CoverLayout
      title="Reset Password"
      description="You will receive an e-mail in maximum 60 seconds"
      image={bgImage}
      imgPosition="top"
      button={{ color: "info" }}
    >
      <Card>
        <ArgonBox p={3}>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox
              width="3rem"
              height="3rem"
              bgColor="info"
              shadow="md"
              display="grid"
              alignItems="center"
              justifyContent="center"
              borderRadius="md"
            >
              <ArgonBox
                component="i"
                color="white"
                fontSize="1.25rem"
                className="ni ni-circle-08"
              />
            </ArgonBox>
            <ArgonBox ml={2} lineHeight={1}>
              <ArgonTypography variant="h5" color="dark">
                Can&apos;t log in?
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular">
                Restore access to your account
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox p={3}>
          <ArgonBox component="form" role="form">
            <ArgonBox mb={2}>
              <ArgonTypography
                display="block"
                variant="caption"
                fontWeight="bold"
                color="dark"
                sx={{ ml: 0.5, mb: 1 }}
              >
                We will send a recovery link to
              </ArgonTypography>
              <ArgonInput type="email" placeholder="Email" />
            </ArgonBox>
            <ArgonBox mt={3} mb={1} textAlign="center">
              <ArgonButton color="info" fullWidth>
                Reset Password
              </ArgonButton>
              <ArgonTypography
                display="block"
                variant="button"
                color="text"
                fontWeight="regular"
                mt={3}
                sx={{ cursor: "pointer" }}
              >
                I don&apos;t have access to my Email
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
