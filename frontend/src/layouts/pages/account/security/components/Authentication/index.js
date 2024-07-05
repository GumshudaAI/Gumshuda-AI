 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function Authentication() {
  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="centers" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Two factor authentication
        </ArgonTypography>
        <ArgonButton variant="gradient" color="dark" size="small">
          Enable
        </ArgonButton>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox mt={6} mb={3} lineHeight={0}>
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Two-factor authentication adds an additional layer of security to your account by
            requiring more than just a password to log in.
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          bgColor="dark"
          borderRadius="lg"
          shadow="lg"
          p={2}
          variant="gradient"
          lineHeight={1}
        >
          <ArgonTypography variant="h6" fontWeight="medium" color="white">
            Questions about security?
          </ArgonTypography>
          <ArgonBox mb={3}>
            <ArgonTypography variant="button" fontWeight="regular" color="white">
              Have a question, concern, or comment about security? Please contact us.
            </ArgonTypography>
          </ArgonBox>
          <ArgonButton variant="gradient" color="light">
            Contact Us
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Authentication;
