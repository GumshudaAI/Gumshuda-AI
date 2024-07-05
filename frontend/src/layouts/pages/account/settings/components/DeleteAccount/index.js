 

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <ArgonBox p={3} lineHeight={1}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5">Delete Account</ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox
        pb={3}
        px={3}
        display="flex"
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <ArgonBox display="flex" alignItems="center" mb={{ xs: 3, sm: 0 }}>
          <Switch />
          <ArgonBox ml={2} lineHeight={0}>
            <ArgonTypography display="block" variant="button" fontWeight="medium">
              Confirm
            </ArgonTypography>
            <ArgonTypography variant="caption" color="text">
              I want to delete my account.
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <ArgonButton variant="outlined" color="secondary">
            Deactivate
          </ArgonButton>
          <ArgonBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <ArgonButton variant="gradient" color="error" sx={{ height: "100%" }}>
              Delete Account
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default DeleteAccount;
