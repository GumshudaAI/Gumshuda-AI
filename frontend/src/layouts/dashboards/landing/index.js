/* eslint-disable no-unused-vars */
 

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, Link } from "react-router-dom";

// mui components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Sidenav from "examples/Sidenav";

// Gumshuda AI MUI context
import { useArgonController, setMiniSidenav, setLayout, setDarkSidenav } from "context";

// Gumshuda AI MUI routes
import routes from "routes";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import defaultDashboard from "assets/images/default.png";
import automotiveDashboard from "assets/images/automotive.png";
import crmDashboard from "assets/images/crm.png";

function Default() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, sidenavColor, darkSidenav, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to landing for the landing view
  useEffect(() => {
    setLayout(dispatch, "landing");
    setDarkSidenav(dispatch, true);

    return () => setDarkSidenav(dispatch, darkMode);
  }, [pathname]);

  const sharedProps = {
    position: "absolute",
    p: { xs: 0.5, lg: 2 },
    borderRadius: "xl",
    shadow: "xl",
  };

  return (
    <DashboardLayout
      sx={{
        backgroundImage: "radial-gradient(circle at bottom right,#3c9add,#191452)",
        height: "105vh",
      }}
    >
      <Sidenav
        color={sidenavColor}
        brand={darkSidenav || darkMode ? brand : brandDark}
        brandName="Gumshuda AI"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <ArgonBox position="relative" display="block">
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={12} lg={10}>
            <ArgonBox
              {...sharedProps}
              right={{ xs: 0, lg: "300px" }}
              zIndex={3}
              mt={{ xs: 1, lg: 12 }}
              sx={{
                backdropFilter: "saturate(200%) blur(30px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
                transform: {
                  xs: "none",
                  lg: "scale(1) perspective(2000px) rotateY(-35deg) rotateX(2deg) rotate(0deg)",
                },
                transition: "transform 400ms ease-in-out",

                "&:hover": {
                  transform: {
                    xs: "none",
                    lg: "scale(1) perspective(2000px) rotateY(-15deg) rotateX(0deg) rotate(0deg)",
                  },
                },
              }}
            >
              <ArgonBox component={Link} to="/home" width="100%">
                <ArgonBox
                  component="img"
                  src={defaultDashboard}
                  alt="default page"
                  width="100%"
                  borderRadius="lg"
                />
              </ArgonBox>
            </ArgonBox>
            <ArgonBox
              {...sharedProps}
              right={{ xs: 0, lg: "30px" }}
              zIndex={2}
              mt={{ xs: 40, lg: 2 }}
              sx={{
                backdropFilter: "saturate(200%) blur(30px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
                transform: {
                  xs: "none",
                  lg: "scale(.7) perspective(2000px) rotateY(-32deg) rotateX(2deg) rotate(0deg)",
                },
              }}
            >
              <ArgonBox component={Link} to="/dashboards/automotive" width="100%">
                <ArgonBox
                  component="img"
                  src={automotiveDashboard}
                  alt="default page"
                  width="100%"
                  borderRadius="lg"
                />
              </ArgonBox>
            </ArgonBox>
            <ArgonBox
              {...sharedProps}
              display={{ xs: "none", lg: "block" }}
              top="-60px"
              right="-240px"
              zIndex={1}
              sx={{
                backdropFilter: "saturate(200%) blur(30px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
                transform:
                  "scale(.5) perspective(2000px) rotateY(-30deg) rotateX(2deg) rotate(0deg)",
              }}
            >
              <ArgonBox component={Link} to="/dashboards/crm" width="100%">
                <ArgonBox
                  component="img"
                  src={crmDashboard}
                  alt="default page"
                  width="100%"
                  borderRadius="lg"
                />
              </ArgonBox>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
