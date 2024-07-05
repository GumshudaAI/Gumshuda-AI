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
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerButton from "components/PowerButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Gumshuda AI MUI context
import {
  usePowerController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = usePowerController();
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
      <PowerBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <PowerBox>
          <PowerTypography variant="h5">Gumshuda AI Settings</PowerTypography>
          <PowerTypography variant="body2" color="text">
            The Ultimate Lost and Found App
          </PowerTypography>
        </PowerBox>

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
      </PowerBox>

      <Divider />

      <PowerBox pt={1.25} pb={3} px={3}>
        <PowerBox mt={3} lineHeight={1}>
          <PowerTypography variant="h6">Sidenav Type</PowerTypography>
          <PowerTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </PowerTypography>

          <PowerBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
            <PowerButton
              color="info"
              variant={darkSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              fullWidth
            >
              White
            </PowerButton>
            <PowerButton
              color="info"
              variant={darkSidenav ? "gradient" : "outlined"}
              onClick={handledarkSidenav}
              fullWidth
              sx={{
                ml: 1,
              }}
            >
              Dark
            </PowerButton>
          </PowerBox>
        </PowerBox>
        <PowerBox display="flex" justifyContent="space-between" mt={3} lineHeight={1}>
          <PowerTypography variant="h6">Navbar Fixed</PowerTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </PowerBox>

        <Divider />

        <PowerBox display="flex" justifyContent="space-between" lineHeight={1}>
          <PowerTypography variant="h6">Sidenav Mini</PowerTypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </PowerBox>

        <Divider />

        <PowerBox display="flex" justifyContent="space-between" lineHeight={1}>
          <PowerTypography variant="h6">Light / Dark</PowerTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </PowerBox>

        <PowerBox mt={3} textAlign="center">
          <PowerBox mb={0.5}>
            <PowerTypography variant="h6">Thank you for sharing!</PowerTypography>
          </PowerBox>

          <PowerBox display="flex" justifyContent="center">
            <PowerBox mr={1.5}>
              <PowerButton
                component={Link}
                href="//twitter.com/whynesspower2"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </PowerButton>
            </PowerBox>
            <PowerButton
              component={Link}
              href="https://www.linkedin.com/in/whynesspower/"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </PowerButton>
          </PowerBox>
        </PowerBox>
      </PowerBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
