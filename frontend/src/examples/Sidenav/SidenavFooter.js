// @mui material components
import Link from "@mui/material/Link";

// Gumshuda AI MUI components
import PowerButton from "components/PowerButton";
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI context
import { usePowerController } from "context";

// Images
import icon from "assets/images/illustrations/icon-documentation.svg";

function SidenavFooter() {
  const [controller] = usePowerController();
  const { miniSidenav, darkSidenav } = controller;

  return (
    <PowerBox opacity={miniSidenav ? 0 : 1} sx={{ transition: "opacity 200ms linear" }}></PowerBox>
  );
}

export default SidenavFooter;
