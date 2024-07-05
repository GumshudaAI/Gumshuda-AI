 

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for ArgonInput
import ArgonInputRoot from "components/ArgonInput/ArgonInputRoot";

// Gumshuda AI MUI context
import { useArgonController } from "context";

const ArgonInput = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <ArgonInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
  );
});

// Setting default values for the props of ArgonInput
ArgonInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the ArgonInput
ArgonInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ArgonInput;
