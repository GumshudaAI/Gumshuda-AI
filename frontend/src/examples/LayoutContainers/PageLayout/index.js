import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";

// Gumshuda AI MUI context
import { usePowerController, setLayout } from "context";

function PageLayout({ background, children }) {
  const [controller, dispatch] = usePowerController();
  const { darkMode } = controller;

  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <PowerBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={darkMode ? "transparent" : background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </PowerBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
