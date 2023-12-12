// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/Facebook";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Gumshuda AI MUI context
import {
  useArgonController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useArgonController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <ArgonBox>
          <ArgonTypography variant="h5">Gumshuda AI Settings</ArgonTypography>
          <ArgonTypography variant="body2" color="text">
            The Ultimate Lost and Found App
          </ArgonTypography>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </ArgonBox>

      <Divider />

      <ArgonBox pt={1.25} pb={3} px={3}>
        <ArgonBox mt={3} lineHeight={1}>
          <ArgonTypography variant="h6">Sidenav Type</ArgonTypography>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </ArgonTypography>

          <ArgonBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
            <ArgonButton
              color="info"
              variant={darkSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              fullWidth
            >
              White
            </ArgonButton>
            <ArgonButton
              color="info"
              variant={darkSidenav ? "gradient" : "outlined"}
              onClick={handledarkSidenav}
              fullWidth
              sx={{
                ml: 1,
              }}
            >
              Dark
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox display="flex" justifyContent="space-between" mt={3} lineHeight={1}>
          <ArgonTypography variant="h6">Navbar Fixed</ArgonTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </ArgonBox>

        <Divider />

        <ArgonBox display="flex" justifyContent="space-between" lineHeight={1}>
          <ArgonTypography variant="h6">Sidenav Mini</ArgonTypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </ArgonBox>

        <Divider />

        <ArgonBox display="flex" justifyContent="space-between" lineHeight={1}>
          <ArgonTypography variant="h6">Light / Dark</ArgonTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </ArgonBox>

        <ArgonBox mt={3} textAlign="center">
          <ArgonBox mb={0.5}>
            <ArgonTypography variant="h6">Thank you for sharing!</ArgonTypography>
          </ArgonBox>

          <ArgonBox display="flex" justifyContent="center">
            <ArgonBox mr={1.5}>
              <ArgonButton
                component={Link}
                href="//twitter.com/whynesspower2"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </ArgonButton>
            </ArgonBox>
            <ArgonButton
              component={Link}
              href="https://www.linkedin.com/in/whynesspower/"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
