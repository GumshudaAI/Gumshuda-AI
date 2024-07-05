 

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-select components
import Select from "react-select";

// Gumshuda AI MUI base styles
import colors from "assets/theme/base/colors";

// Gumshuda AI MUI context
import { useArgonController } from "context";

// Custom styles for ArgonSelect
import styles from "components/ArgonSelect/styles";

const ArgonSelect = forwardRef(({ size, error, success, ...rest }, ref) => {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const { light } = colors;

  return (
    <Select
      {...rest}
      ref={ref}
      styles={styles(size, error, success, darkMode)}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: light.main,
          primary: light.main,
        },
      })}
    />
  );
});

// Setting default values for the props of ArgonSelect
ArgonSelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the ArgonSelect
ArgonSelect.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default ArgonSelect;
