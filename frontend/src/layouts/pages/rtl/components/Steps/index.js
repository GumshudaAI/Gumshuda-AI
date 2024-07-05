 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

function Steps() {
  return (
    <Card>
      <ArgonBox p={3}>
        <ArgonTypography variant="body2" color="text" fontWeight="regular">
          خطوات
        </ArgonTypography>
        <ArgonBox mt={2} mb={1} lineHeight={0}>
          <ArgonTypography variant="h3" fontWeight="bold">
            11.4ك
          </ArgonTypography>
        </ArgonBox>
        <ArgonBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </ArgonBox>
    </Card>
  );
}

export default Steps;
