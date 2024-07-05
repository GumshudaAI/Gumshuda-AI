 

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function SecuritySettings() {
  return (
    <Card>
      <ArgonBox pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Security Settings
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2}>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Notify me via email when logging in
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch defaultChecked />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Send SMS confirmation for all online payments
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Check which devices accessed your account
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch defaultChecked />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Find My Device, make sure your device can be found if it gets lost
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Lock your device with a PIN, pattern, or password
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            Manage what apps have access to app-usage data on your device
          </ArgonTypography>
          <ArgonBox ml={2} mr={1}>
            <Switch defaultChecked />
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" justifyContent="flex-end" mt={6}>
          <ArgonBox mr={1}>
            <ArgonButton variant="outlined" color="info" size="small">
              Cancel
            </ArgonButton>
          </ArgonBox>
          <ArgonButton variant="gradient" color="info" size="small">
            Save Changes
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default SecuritySettings;
