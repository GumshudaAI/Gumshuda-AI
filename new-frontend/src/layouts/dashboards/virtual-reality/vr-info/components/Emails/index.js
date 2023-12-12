 

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Emails() {
  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <ArgonTypography variant="body2" color="text">
          Emails (21)
        </ArgonTypography>
        <Tooltip title="Check your emails" placement="top">
          <ArgonBox component="a" href="#">
            <ArgonTypography variant="body2">Check</ArgonTypography>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default Emails;
