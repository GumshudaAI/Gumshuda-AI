 

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Gumshuda AI MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

// Gumshuda AI MUI example components
import CameraView from "layouts/dashboards/smart-home/components/CameraView";

// Images
const camera1 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-1.jpg";
const camera2 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-2.jpg";
const camera3 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/smart-home-3.jpg";

function Cameras() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [openMenu, setOpenMenu] = useState(null);
  const [camera, setCamera] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.md
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetCamera = (event, newCamera) => setCamera(newCamera);
  const handleOpenMenu = ({ currentTarget }) => setOpenMenu(currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>Pause</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Stop</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Schedule</MenuItem>
      <ArgonBox
        component="div"
        bgColor="secondary"
        opacity={0.3}
        width="100%"
        height="1px"
        my={1}
      />
      <MenuItem onClick={handleCloseMenu}>
        <ArgonTypography variant="inherit" color="error">
          Remove
        </ArgonTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6">Cameras</ArgonTypography>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" width="60%">
          <ArgonBox width="90%">
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={camera} onChange={handleSetCamera}>
                <Tab label="Lounge" />
                <Tab label="Office" />
                <Tab label="Attic" />
              </Tabs>
            </AppBar>
          </ArgonBox>
          {renderMenu()}
          <ArgonTypography
            color="text"
            onClick={handleOpenMenu}
            sx={{ lineHeight: 0, cursor: "pointer" }}
          >
            <Icon fontSize="default">more_vert</Icon>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox p={2} mt={1} width="100%" height="26.25rem">
        <CameraView image={camera1} date="17.05.2021" time="4:34PM" value={camera} index={0} />
        <CameraView image={camera2} date="17.05.2021" time="4:35PM" value={camera} index={1} />
        <CameraView image={camera3} date="17.05.2021" time="4:57PM" value={camera} index={2} />
      </ArgonBox>
    </Card>
  );
}

export default Cameras;
