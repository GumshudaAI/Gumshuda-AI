import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for PowerInput
import PowerInputRoot from "components/PowerInput/PowerInputRoot";

// Gumshuda AI MUI context
import { usePowerController } from "context";

const PowerInput = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  const [controller] = usePowerController();
  const { darkMode } = controller;

  return (
    <PowerInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
  );
});

// Setting default values for the props of PowerInput
PowerInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the PowerInput
PowerInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default PowerInput;
