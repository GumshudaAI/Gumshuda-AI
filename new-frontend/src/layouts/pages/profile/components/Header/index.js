 

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

// Gumshuda AI MUI example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Gumshuda AI MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
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
    <ArgonBox position="relative">
      <DashboardNavbar absolute light />
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 2,
          px: 2,
          boxShadow: ({ boxShadows: { md } }) => md,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ArgonAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="App"
                  icon={
                    <i className="ni ni-app" style={{ marginTop: "6px", marginRight: "8px" }} />
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <i
                      className="ni ni-email-83"
                      style={{ marginTop: "6px", marginRight: "8px" }}
                    />
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <i
                      className="ni ni-settings-gear-65"
                      style={{ marginTop: "6px", marginRight: "8px" }}
                    />
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </ArgonBox>
  );
}

export default Header;
