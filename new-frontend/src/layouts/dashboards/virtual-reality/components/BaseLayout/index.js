 

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// Gumshuda AI MUI context
import { useArgonController, setMiniSidenav, setLayout, setDarkSidenav } from "context";

// Gumshuda AI MUI routes
import routes from "routes";

// Custom styles for the BaseLayout
import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/dashboards/virtual-reality/components/BaseLayout/styles";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

function BaseLayout({ children }) {
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

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setDarkSidenav(dispatch, darkMode);
  }, [pathname]);

  return (
    <ArgonBox sx={baseLayout}>
      <ArgonBox bgColor={darkMode ? "transparent" : "info"} borderRadius="xl" mt={3} mx={3}>
        <DashboardNavbar />
      </ArgonBox>
      <ArgonBox sx={baseLayoutBackground}>
        <ArgonBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName="Gumshuda AI"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </ArgonBox>
        <ArgonBox sx={baseLayoutContent}>
          <ArgonBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName="Gumshuda AI"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </ArgonBox>
          <DashboardLayout bgColor="transparent">{children}</DashboardLayout>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox pb={2} pt={0.25}>
        <Footer />
      </ArgonBox>
    </ArgonBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
