 

// @mui material components
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonBadge from "components/ArgonBadge";

function FullBody() {
  return (
    <Card>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
        mb={2}
        px={3}
      >
        <ArgonTypography variant="body2" color="text" fontWeight="regular">
          Full Body
        </ArgonTypography>
        <ArgonBadge variant="contained" color="info" badgeContent="moderate" container />
      </ArgonBox>
      <ArgonBox pb={3} px={3}>
        <ArgonTypography variant="body2" color="text" fontWeight="regular">
          What matters is the people who are sparked by it. And the people who are liked.
        </ArgonTypography>
      </ArgonBox>
    </Card>
  );
}

export default FullBody;
