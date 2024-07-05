import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for PowerBox
import PowerBoxRoot from "components/PowerBox/PowerBoxRoot";

const PowerBox = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }, ref) => (
    <PowerBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  )
);

// Setting default values for the props of PowerBox
PowerBox.defaultProps = {
  variant: "contained",
  bgColor: "#F9F9E0",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

// Typechecking props for the PowerBox
PowerBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default PowerBox;
