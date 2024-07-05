 

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonTypography from "components/ArgonTypography";

// Custom styles for ArgonProgress
import ArgonProgressRoot from "components/ArgonProgress/ArgonProgressRoot";

const ArgonProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <ArgonTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </ArgonTypography>
    )}
    <ArgonProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of ArgonProgress
ArgonProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the ArgonProgress
ArgonProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default ArgonProgress;
