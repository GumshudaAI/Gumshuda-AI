 

// @mui material components
import Link from "@mui/material/Link";

// Gumshuda AI MUI components
import ArgonButton from "components/ArgonButton";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI context
import { useArgonController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = useArgonController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <ArgonBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}>
    </ArgonBox>
  );
}

export default SidenavFooter;
