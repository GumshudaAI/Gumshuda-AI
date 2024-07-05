// @mui material components
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

function Separator() {
  return (
    <PowerBox position="relative" py={0.25}>
      <Divider />
      <PowerBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <PowerTypography variant="button" fontWeight="medium" color="secondary">
          or
        </PowerTypography>
      </PowerBox>
    </PowerBox>
  );
}

export default Separator;
