 

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function BaseLayout({ stickyNavbar, children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
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

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute={!stickyNavbar} isMini />
      <ArgonBox mt={stickyNavbar ? 3 : 10}>
        <Grid container>
          <Grid item xs={12} sm={8} lg={4}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab label="Messages" />
                <Tab label="Social" />
                <Tab label="Notifications" />
                <Tab label="Backup" />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
  stickyNavbar: false,
};

// Typechecking props for BaseLayout
BaseLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
