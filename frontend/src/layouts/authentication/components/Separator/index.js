 

// @mui material components
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Separator() {
  return (
    <ArgonBox position="relative" py={0.25}>
      <Divider />
      <ArgonBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <ArgonTypography variant="button" fontWeight="medium" color="secondary">
          or
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

export default Separator;
