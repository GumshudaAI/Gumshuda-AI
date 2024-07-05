 

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
          جسم كامل
        </ArgonTypography>
        <ArgonBadge variant="contained" color="info" badgeContent="معتدل" />
      </ArgonBox>
      <ArgonBox pb={3} px={3}>
        <ArgonTypography variant="body2" color="text" fontWeight="regular">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
        </ArgonTypography>
      </ArgonBox>
    </Card>
  );
}

export default FullBody;
